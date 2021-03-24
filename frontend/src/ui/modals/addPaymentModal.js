import {Button, Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {get, post} from "../../common/api";
import DatePicker from "react-datepicker";
import {formatDate} from "../../common/formatting";

const AddPaymentModal = (props) => {
    let [amount, setAmount] = useState('');
    let [paidFullAmount, setPaidFullAmount] = useState(true);
    let [paidDate, setPaidDate] = useState(new Date());

    useEffect(() => {
        if(amount === ''){
            get(`/trip/${props.tripId}/payment`)
                .then(res => {
                    if(res.success){
                        let data = res.data;
                        let day = 60 * 60 * 24 * 1000;
                        let paidDate = new Date(Date.parse(data.paid_on)+day);
                        setAmount(data.amount);
                        setPaidDate(paidDate);
                        setPaidFullAmount(data.paid_full_amount);
                    }
                })
        }
    }, [props.tripId]);

    const save = () => {
        let data = {
            trip_id: props.tripId,
            invoice_no: props.invoiceNo,
            amount: amount,
            paid_full_amount: paidFullAmount,
            currency: props.currency,
            paid_on: formatDate(paidDate)
        };
        post(`/trip/${props.tripId}/payment`, data)
        .then(res => {
            if(res.success){
                props.handleClose();
            }
        })
    }
    return  <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add payment for Trip #{props.tripId} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container">
                <div>
                    Invoice No #{props.invoiceNo} for amount {props.currency} ${props.amount}
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount:</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                {props.currency} $
                            </span>
                        </div>
                        <input
                            className={'form-control col-md-5'}
                            type="text"
                            name="price"
                            value={amount}
                            onChange={(evt) => setAmount(evt.target.value)}
                            id={"amount"}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="paidOn">Paid On:</label>
                    <div id={"paidOn"}>
                        <DatePicker
                            name="po_order_date"
                            selected={paidDate}
                            onChange={date => setPaidDate(date)}
                            dateFormat="dd-MM-yyyy"
                            className={"form-control"}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="paidOn">Paid Full Amount:</label>
                    <input type={"checkbox"} checked={paidFullAmount?"checked":""} onClick={() => setPaidFullAmount(!paidFullAmount)}/>
                </div>
            </div>

        </Modal.Body>
        <Modal.Footer>
                <Button variant="primary" type={"submit"} onClick={save}>
                    Save
                </Button>
        </Modal.Footer>
    </Modal>
}

export default AddPaymentModal;
