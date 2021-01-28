import React from 'react';
import DatePicker from "react-datepicker";

const TripDates = (props) => {

    return <React.Fragment>
        <div className={'card'}><label>Pick-up Date:</label>
            <div><DatePicker
                name="start_date"
                selected={props.startDate}
                onChange={date => props.setStartDate(date)}
                dateFormat="dd-MM-yyyy"
            />
            </div>
            {props.startDate === '' && <small className="validation-message">*Enter valid Pick-up Date</small>}
        </div>
        <div className={'card'}><label>Expected Delivery Date: </label>
            <div>
                <DatePicker
                    name="expected_end_date"
                    selected={props.expectEndDate}
                    onChange={date => props.setExpectedEndDate(date)}
                    dateFormat="dd-MM-yyyy"
                />
            </div>
            {props.expectEndDate === '' && <small className="validation-message">*Enter valid delivery Date</small>}
        </div>
        <div className="card"><label>Delivery Date:</label>
            <div>
                <DatePicker
                    name="end_date"
                    selected={props.endDate}
                    onChange={date => props.setEndDate(date)}
                    dateFormat="dd-MM-yyyy"
                />
            </div>
            {props.endDate === '' && <small className="validation-message">*Enter valid delivery Date</small>}
        </div>
    </React.Fragment>
}

export default TripDates;
