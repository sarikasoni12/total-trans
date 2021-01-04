import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import {formatDate} from './../common/formatting';

const Search = (props) => {

    let [fromDate, setFromDate] = useState('');
    let [toDate, setToDate] = useState('');

    const searchTrip = () => {
        const params = {
          from_date: formatDate(fromDate),
          to_date: formatDate(toDate)
        };
        props.onSearch(params);
    }
    return <div>
        <div className="divField cards">
            <div className={'card'}><label>From:</label>
                <div> <DatePicker
                    name="from_date"
                    selected={fromDate}
                    onChange={date => setFromDate(date)}
                    dateFormat="dd-MM-yyyy"
                />
                </div>
            </div>
            <div className={'card'}><label>To: </label>
                <div>
                    <DatePicker
                        name="expected_end_date"
                        selected={toDate}
                        onChange={date => setToDate(date)}
                        dateFormat="dd-MM-yyyy"
                    />
                </div>
            </div>
            <div className={'card'}>
                <input type='button' name='save' value={'Save'} onClick={searchTrip}/>
            </div>
        </div>
    </div>
};

export default Search;
