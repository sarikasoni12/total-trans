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

    const getSelectedDriverById = (driverId) => {
        return props.selectedDrivers.filter(item => parseInt(item.driver_id) === parseInt(driverId));
    }

    const getDriverSettingById = (driverId) => {
        return settings.filter(item => parseInt(item.driver_id) === parseInt(driverId));
    }

    const getSelectedDriverIds = () => {
        return props.selectedDrivers.map(item => parseInt(item.driver_id));
    }

    const addDriver = (driverId) => {
        let driverIds = getSelectedDriverIds();
        let index = driverIds.indexOf(driverId);
        if (index === -1) {
            let data = {'driver_id': driverId}
            let tmpDriver = getDriverSettingById(driverId);
            data['cents_per_mile'] = parseInt(tmpDriver[0].cents_per_mile);
            props.addSelectedDrivers([...props.selectedDrivers, data])
        } else {
            let propDrivers = [...props.selectedDrivers];
            propDrivers.splice(index, 1);
            props.addSelectedDrivers(propDrivers);
        }
    }

    const selectDriver = (e, key, driverId) => {
        if(Object.keys(props.selectedDrivers).length > 0){
            let driverIds = getSelectedDriverIds();
            let index = driverIds.indexOf(driverId);
            if (index === -1) {
                let data = {'driver_id': driverId}
                data[key] = parseInt(e.target.value);
                props.addSelectedDrivers([...props.selectedDrivers, data])
            } else {
                let data = [...props.selectedDrivers];
                data.map(item => {
                    if(parseInt(item.driver_id) === parseInt(driverId)){
                       return {...item, key: parseInt(e.target.value)}
                    }
                });
                props.addSelectedDrivers(data);
            }
        } else {
            let data = {'driver_id': driverId}
            data[key] = parseInt(e.target.value);
            props.addSelectedDrivers([data]);
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
            let driverIds = getSelectedDriverIds();
            let checked = false;
            if (driverIds.indexOf(driver.id) !== -1) {
                checked = true;
            }

            let setting = getDriverSettingById(driver.id);
            let selectedDriver = getSelectedDriverById(driver.id);

            return <tr>
                <td>
                    <input type="checkbox"
                            value={driver.id}
                            checked={checked}
                            onChange={(e)=>{addDriver(driver.id)}}/> {driver.first_name}
                </td>
                <td><input
                    type={"text"}
                    className="form-control"
                    onChange={(e)=>{selectDriver(e, 'miles', driver.id)}}
                    disabled={!checked}
                    value={selectedDriver.length > 0? selectedDriver[0].miles: ''}
                /></td>
                <td>
                    <input
                        type={"text"}
                        className="form-control"
                        defaultValue={setting[0].cents_per_mile}
                        value={selectedDriver.length > 0? selectedDriver[0].cents_per_mile: setting[0].cents_per_mile}
                        onChange={(e)=>{selectDriver(e, 'cents_per_mile', driver.id)}}
                        disabled={!checked}
                    />
                </td>
            </tr>
        })}
        </table>
    </div>
}

export default Drivers;
