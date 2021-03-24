import React, {useState, useEffect} from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddPaymentModal from "./modals/addPaymentModal";

const AddPayment = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        props.callback();
    }
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <a className="dropdown-item" href="#" onClick={handleShow} >
                Add Payment
            </a>
            {show && <AddPaymentModal
                handleClose={handleClose}
                handleShow={handleShow}
                show={show}
                tripId={props.trip_id}
                currency={props.currency}
                invoiceNo={props.invoiceNo}
                amount={props.amount}
            />}
        </React.Fragment>
    );
}

export default AddPayment;
