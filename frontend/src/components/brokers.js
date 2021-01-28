import React, {useState, useEffect} from 'react';
import {get} from "../common/api";

const Brokers = (props) => {

    let [brokers, setBrokers] = useState([]);

    useEffect(() => {
        get('/brokers')
            .then((res) => {
                setBrokers(res);
            });
    }, [])
    return <div className="divField"><label>Brokers:</label>
        <select value={props.brokerId} onChange={(evt) => props.addBroker(evt.target.value)}>
            <option> --</option>
            {brokers.map((broker, index) => {
                return <option value={broker.id} key={`truck_unit_${index}`}>{broker.name}</option>;
            })}
        </select>
        {props.brokerId === '' && <small className="validation-message">*Enter valid broker</small>}
    </div>
}

export default Brokers;
