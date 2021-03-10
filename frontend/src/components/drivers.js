import React, {useState, useEffect} from 'react';
import {get} from "../common/api";
import Checkbox from "./checkbox";

const Drivers = (props) => {

    let [allDrivers, setAllDrivers] = useState([]);
    useEffect(() => {
        if(allDrivers.length<=0)
        {
            get('/drivers')
                .then((res) => {
                    setAllDrivers(res);
                });
        }

    }, []);


    const addDriver = (e) => {
        let driver = parseInt(e.target.value);
        let propDrivers = [...props.drivers];
        let index = propDrivers.indexOf(driver);
        if (index === -1) {
            props.addDriver([...propDrivers, driver]);
        } else {
            propDrivers.splice(index, 1);
            props.addDriver(propDrivers);
        }
    }

    return <div className="form-group">
        <label>Drivers:</label>
        <table>
            <tr>
                <td>Name</td>
                <td>Miles</td>
                <td>Cents/mile</td>
            </tr>

        {allDrivers.map((driver) => {
            let index = props.drivers.indexOf(driver.id);
            let checked = false;
            if (index !== -1) {
                checked = true;
            }

            return <tr>
                <td>
                    <input type="checkbox"
                            value={driver.id}
                            checked={checked}
                            onChange={addDriver}/> {driver.name}
                </td>
                <td><input type={"text"} className="form-control"/></td>
                <td><input type={"text"} className="form-control" defaultValue={driver.cents_per_mile}/></td>
            </tr>
        })}
        </table>
    </div>
}

export default Drivers;
