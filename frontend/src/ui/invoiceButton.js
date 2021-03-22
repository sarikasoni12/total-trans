import React, {useState, useEffect} from 'react';
import { Button, Modal } from 'react-bootstrap';
import InvoiceModal from "../components/InvoiceModal";

const InvoiceButton = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // const generateInvoice = (e) => {
    //      post(`/trip/${props.trip_id}/invoice/generate`, {}, )
    //          .then(res => res.blob())
    //          .then((blob) => {
    //
    //              // 2. Create blob link to download
    //              const url = window.URL.createObjectURL(new Blob([blob]));
    //              const link = document.createElement('a');
    //              link.href = url;
    //              link.setAttribute('download', `sample`);
    //              // 3. Append to html page
    //              document.body.appendChild(link);
    //              // 4. Force download
    //              link.click();
    //              // 5. Clean up and remove the link
    //              link.parentNode.removeChild(link);
    //          });
    //     e.preventDefault();
    // };

    return (
        <React.Fragment>
            <Button variant="primary" onClick={handleShow} className="btn btn-info">
                Invoice
            </Button>
            {show && <InvoiceModal
                handleClose={handleClose}
                handleShow={handleShow}
                show={show}
                tripId={props.trip_id}
            />}
        </React.Fragment>
    );
}

export default InvoiceButton;
