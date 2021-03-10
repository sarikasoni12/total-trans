import React from 'react';
import DatePicker from "react-datepicker";

const TripDates = (props) => {

    return <div className="form-row">
        <div className={'form-group col-md-2'}>
            <label for={"pickup-date"}>Pick-up Date:</label>
            <DatePicker
                name="start_date"
                selected={props.startDate}
                onChange={date => props.setStartDate(date)}
                dateFormat="dd-MM-yyyy"
                className="form-control"
                id={"pickup-date"}
            />
            {/*</div>*/}
            {/*{props.startDate === '' && <small className="validation-message">*Enter valid Pick-up Date</small>}*/}
        </div>
        <div className={'form-group col-md-2'}>
            <label for={"expected-delivery-date"}>Expected Delivery Date: </label>
            {/*<div>*/}
                <DatePicker
                    name="expected_end_date"
                    selected={props.expectEndDate}
                    onChange={date => props.setExpectedEndDate(date)}
                    dateFormat="dd-MM-yyyy"
                    id={"expected-delivery-date"}
                    className="form-control"
                />
            {/*</div>*/}
            {/*{props.expectEndDate === '' && <small className="validation-message">*Enter valid delivery Date</small>}*/}
        </div>
        <div className="form-group col-md-2">
            <label for={"delivery-date"}>Delivery Date:</label>
            {/*<div>*/}
                <DatePicker
                    name="end_date"
                    selected={props.endDate}
                    onChange={date => props.setEndDate(date)}
                    dateFormat="dd-MM-yyyy"
                    id={"delivery-date"}
                    className="form-control"
                />
            {/*</div>*/}
            {/*{props.endDate === '' && <small className="validation-message">*Enter valid delivery Date</small>}*/}
        </div>
    </div>
}

export default TripDates;
