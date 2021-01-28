import React, {useState, useEffect} from 'react';
import {get} from "../common/api";
import Checkbox from "./checkbox";

const Drivers = (props) => {

    let [allDrivers, setAllDrivers] = useState([]);

    useEffect(() => {
        if(allDrivers.length<=0){
            get('/drivers')
                .then((res) => {
                    setAllDrivers(res);
                });
        }

    }, [])


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

    return <div className="divField"><label>Drivers:</label>
        {allDrivers.map((driver) => {
            let index = props.drivers.indexOf(driver.id);
            console.log(`${props.drivers}--${driver.id}`);
            let checked = false;
            if (index !== -1) {
                checked = true;
            }

            return <React.Fragment>
               {/* <Checkbox value={driver.id} checked={checked} onChange={addDriver} label={driver.name}/>*/}
                <div><input type="checkbox"
                            value={driver.id}
                            checked={checked}
                            onChange={addDriver}/>{driver.name}</div>
            </React.Fragment>
        })}
    </div>
}

export default Drivers;
