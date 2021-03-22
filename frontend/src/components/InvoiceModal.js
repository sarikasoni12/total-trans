import {Button, Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {get} from "../common/api";

const InvoiceModal = (props) => {
    const [invoiceNumber, setInvoiceNumber] = useState('');

    useEffect(() => {
        if(invoiceNumber === ''){
            get(`/trip/${props.tripId}/invoice/next-number`)
                .then(res => {
                    setInvoiceNumber(res.next_invoice_number);
                })
        }
    }, [invoiceNumber]);
    return  <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Generate Invoice for Trip #{props.tripId}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Invoice Number #{invoiceNumber}</Modal.Body>
        <Modal.Footer>
            <a href={`/api/trip/${props.tripId}/invoice/preview`} target={"_blank"}>
                <Button variant="secondary">
                    Preview
                </Button>
            </a>
            {/*<form onSubmit={generateInvoice}>*/}
            <a href={`/api/trip/${props.tripId}/invoice/generate`} target={"_blank"}>
                <Button variant="primary" type={"submit"}>
                    Generate
                </Button>
            </a>
            {/*</form>*/}
        </Modal.Footer>
    </Modal>
}

export default InvoiceModal;
