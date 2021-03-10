import React, {useState, useEffect} from 'react';
import {get} from "../common/api";

const Trucks = (props) => {

    let [trucks, setTrucks] = useState([]);

    useEffect(() => {
        get('/trucks')
            .then((res) => {
                setTrucks(res);
            });
    }, [])


    return <React.Fragment>
        <label for={"trucks"}>Truck</label>
        <select
            id={"trucks"}
            name='truck_unit'
            className="form-control"
            onChange={(evt) => props.addTruck(evt.target.value)} value={props.truckId}>
            <option> --</option>
            {trucks.map((truck, index) => {
                return <option value={truck.id} key={`truck_unit_${index}`}>{truck.name}</option>;
            })}
        </select>
        {/*{props.truckId === '' && <small className="validation-message">*Enter valid truck</small>}*/}
    </React.Fragment>
}

export default Trucks;
