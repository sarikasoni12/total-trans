import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";
import {formatDate} from './common/formatting';
import Button from "./Elements/Button";
import {get} from "./common/api";

const Search = (props) => {
    let date = new Date();
    let firstDay = props.fromDate? props.fromDate: new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = props.toDate? props.toDate: new Date(date.getFullYear(), date.getMonth() + 1, 0);

    let [fromDate, setFromDate] = useState(firstDay);
    let [toDate, setToDate] = useState(lastDay);
    let [driverId, setDriverId] = useState('');
    let [drivers, setDrivers] = useState([]);

    let [trucks, setTrucks] = useState([]);
    let [truckId, setTruckId] = useState('');

    let [brokers, setBrokers] = useState([]);
    let [brokerId, setBrokerId] = useState('');

    useEffect( () => {
        get(`/drivers`)
            .then(res =>{
                setDrivers(res);
            });
        get(`/trucks`)
            .then(res =>{
                setTrucks(res);
            });
        get(`/brokers`)
            .then(res =>{
                setBrokers(res);
            });
       // searchTrip();
    }, [fromDate, toDate]);

    const searchTrip = () => {
        const params = {
            from_date: formatDate(fromDate),
            to_date: formatDate(toDate),
            driver_id: driverId,
            truck_id: truckId,
            broker_id: brokerId
        };
        props.onSearch? props.onSearch(params):'';
    }

    const clearParams = () => {
        setFromDate('');
        setToDate('');
        setDriverId('');
        props.onSearch({});
    }
    return (
        <div className="form-row">
                    {/*<div className={'card'}>*/}
                        <div className={"form-group col-md-2"}>
                            <select
                                name={'driver'}
                                onChange={(e) => {setDriverId(e.target.value)}}
                                className="form-control select"
                                placeholder="Driver"
                                aria-label="Search"
                            >
                                <option value={""}> -- Driver -- </option>
                                {drivers.map((driver) => {
                                    return <option value={driver.id}>{driver.name}</option>
                                })}
                            </select>
                        {/*</div>*/}
                    </div>
                    <div className={'form-group col-md-2'}>
                        {/*<div className={"element"}>*/}
                            <select
                                name={'trucks'}
                                onChange={(e) => {setTruckId(e.target.value)}}
                                className="form-control select"
                                placeholder="Trucks"
                                aria-label="Search"
                            >
                                <option value={""}> -- Trucks -- </option>
                                {trucks.map((truck) => {
                                    return <option value={truck.id}>{truck.name}</option>
                                })}
                            </select>
                        {/*</div>*/}
                    </div>
                    <div className={'form-group col-md-2'}>
                        {/*<div className={"element"}>*/}
                            <select
                                name={'brokers'}
                                onChange={(e) => {setBrokerId(e.target.value)}}
                                className="form-control select"
                                placeholder="Brokers"
                                aria-label="Search"
                            >
                                <option value={""}> -- Brokers -- </option>
                                {brokers.map((broker) => {
                                    return <option value={broker.id}>{broker.name}</option>
                                })}
                            </select>
                        {/*</div>*/}
                    </div>
                    <div className={'form-group col-md-2'}>
                        <DatePicker
                            name="from_date"
                            selected={fromDate}
                            onChange={date => setFromDate(date)}
                            dateFormat="dd-MM-yyyy"
                            placeholder={"From date"}
                            className={"form-control"}
                        />
                    </div>
                    <div className={'form-group col-md-2'}>
                        <DatePicker
                            name="expected_end_date"
                            selected={toDate}
                            onChange={date => setToDate(date)}
                            dateFormat="dd-MM-yyyy"
                            placeholder={"To date"}
                            className={"form-control"}
                        />
                    </div>
                    <div className={'form-group col-md-2'}>

                    <div className="btn" type="button" onClick={searchTrip}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round" className="feather feather-search align-middle">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    </div>
                </div>
    )
}

export default Search;
