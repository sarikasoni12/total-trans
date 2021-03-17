import React, {useState, useEffect} from 'react';
import {get} from "../common/api";
import Checkbox from "./checkbox";

const Drivers = (props) => {

    let [allDrivers, setAllDrivers] = useState([]);
    let [settings, setSettings] = useState([]);
    useEffect(() => {
        if(allDrivers.length<=0)
        {
            get('/driver')
                .then((resDriver) => {
                    get('/driver/payroll/settings')
                        .then((res) => {
                            setSettings(res);
                            setAllDrivers(resDriver);
                        });
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

            let setting = settings.filter((s) => {
                return s.driver_id == driver.id
            });

            return <tr>
                <td>
                    <input type="checkbox"
                            value={driver.id}
                            checked={checked}
                            onChange={addDriver}/> {driver.first_name}
                </td>
                <td><input type={"text"} className="form-control" /></td>
                <td><input type={"text"} className="form-control" defaultValue={setting[0].cents_per_mile}/></td>
            </tr>
        })}
        </table>
    </div>
}

export default Drivers;
