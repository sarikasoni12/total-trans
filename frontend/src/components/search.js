import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";
import {formatDate} from './../common/formatting';
import Button from "../Elements/Button";
import {get} from "../common/api";

const Search = (props) => {
    let date = new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    let [fromDate, setFromDate] = useState(firstDay);
    let [toDate, setToDate] = useState(lastDay);
    let [driverId, setDriverId] = useState('');
    let [drivers, setDrivers] = useState([]);

    useEffect( () => {
        get(`/drivers`)
            .then(res =>{
                setDrivers(res);
            });
        searchTrip();
    }, [fromDate, toDate]);

    const searchTrip = () => {
        const params = {
            from_date: formatDate(fromDate),
            to_date: formatDate(toDate),
            driver_id: driverId
        };
        props.onSearch(params);
    }

    const clearParams = () => {
        setFromDate('');
        setToDate('');
        setDriverId('');
        props.onSearch({});
    }
    return <div>
        <div className="divField cards">
            <div className={'card'}><label>Driver:</label>
                <div className={"element"}>
                    <select name={'driver'} onChange={(e) => {setDriverId(e.target.value)}}>
                        <option value={""}> -- </option>
                        {drivers.map((driver) => {
                            return <option value={driver.id}>{driver.name}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className={'card'}><label>From:</label>
                 <DatePicker
                    name="from_date"
                    selected={fromDate}
                    onChange={date => setFromDate(date)}
                    dateFormat="dd-MM-yyyy"
                />
            </div>
            <div className={'card'}><label>To: </label>
                    <DatePicker
                        name="expected_end_date"
                        selected={toDate}
                        onChange={date => setToDate(date)}
                        dateFormat="dd-MM-yyyy"
                    />
            </div>
            <div className={'card'}>
                <Button onClick={searchTrip}>Search</Button>
                <Button onClick={clearParams}>Clear</Button>
            </div>
        </div>
    </div>
};

export default Search;
