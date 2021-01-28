import React, {useState, useEffect} from "react";
import DatePicker from "react-datepicker";

const Address = (props) => {
    // let tmp = {
    //     'company_name': props.address.company_name,
    //     'address1': props.address.address1,
    //     'address2': props.address.address2,
    //     'city': props.address.city,
    //     'state': props.address.state,
    //     'zip': props.address.zip
    // };
    // let [address, setAddress] = useState(tmp);
    //
    const onChange = (field, value) => {
        let tmp = {...props.address};
        tmp[field] = value;
        // setAddress(tmp)
        props.onChange(tmp);
    }

    return <div>
        <div className="divField cards">
            <div className={'card'}>
                <label>Company Name:</label>
                <div>
                    <input type={"text"} name={"po_number"} value={props.address && props.address.company_name} onChange={(e) => {onChange('company_name',e.target.value)}}/>
                    {props.address && props.address.company_name === '' && <small className="validation-message">*Company number</small>}
                </div>
            </div>
        </div>
        <div className="divField cards">
            <div className={'card'}>
                <label>Address 1:</label>
                <div>
                    <input type={"text"}  value={props.address && props.address.address1} onChange={(e) => {onChange('address1',e.target.value)}}/>
                    {props.address && props.address.address1 === '' && <small className="validation-message">*Address 1</small>}
                </div>
            </div>
            <div className={'card'}>
                <label>Address 2:</label>
                <div>
                    <input type={"text"} value={props.address && props.address.address2} onChange={(e) => {onChange('address2', e.target.value)}}/>
                    {props.address && props.address.address2 === '' && <small className="validation-message">*Address 2</small>}
                </div>
            </div>
        </div>
        <div className="divField cards">
            <div className={'card'}>
                <label>City:</label>
                <div>
                    <input type={"text"} className={"city"} value={props.address && props.address.city} onChange={(e) => {onChange('city', e.target.value)}}/>
                    {props.address && props.address.city === '' && <small className="validation-message">*City</small>}
                </div>
            </div>
            <div className={'card'}>
                <label>State:</label>
                <div>
                    <input className={"state"} type={"text"} maxLength={10} value={props.address && props.address.state} onChange={(e) => {onChange('state', e.target.value)}}/>
                    {props.address && props.address.state === '' && <small className="validation-message">*State</small>}
                </div>
            </div>
            <div className={'card'}>
                <label>Zip:</label>
                <div>
                    <input className={"state"} type={"text"} maxLength={10} value={props.address && props.address.zip} onChange={(e) => {onChange('zip', e.target.value)}}/>
                    {props.address && props.address.zip === '' && <small className="validation-message">*Zip</small>}
                </div>
            </div>
        </div>
    </div>
}

export default Address;
