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

    return <div className={"border"}>
        {/*<div className="divField form-row">*/}
        <div className="divField form-group col-md-6">
                <label for={"name1"}>Company Name:</label>
                {/*<div>*/}
                    <input
                        className="form-control"
                        id="name1" type={"text"} name={"po_number"} value={props.address && props.address.company_name} onChange={(e) => {onChange('company_name',e.target.value)}}/>
                    {props.address && props.address.company_name === '' && <small className="validation-message">*Company number</small>}
                {/*</div>*/}
        </div>
        {/*</div>*/}
        {/*<div className="divField form-row">*/}
            <div className={'form-group col-md-6'}>
                <label for={"address1"}>Address 1:</label>
                    <input
                        id={"address1"}
                        className="form-control"
                        type={"text"}  value={props.address && props.address.address1} onChange={(e) => {onChange('address1',e.target.value)}}/>
                    {props.address && props.address.address1 === '' && <small className="validation-message">*Address 1</small>}
            </div>
            {/*<div className={'form-group col-md-3'}>*/}
            {/*    <label for={"address2"}>Address 2:</label>*/}
            {/*        <input*/}
            {/*            id={"address2"}*/}
            {/*            className="form-control"*/}
            {/*            type={"text"} value={props.address && props.address.address2} onChange={(e) => {onChange('address2', e.target.value)}}/>*/}
            {/*        {props.address && props.address.address2 === '' && <small className="validation-message">*Address 2</small>}*/}
            {/*</div>*/}
        {/*</div>*/}
        <div className="divField form-row">
            <div className={'form-group col-md-2'}>
                <label>City:</label>
                {/*<div>*/}
                    <input type={"text"} className="form-control" value={props.address && props.address.city} onChange={(e) => {onChange('city', e.target.value)}}/>
                    {props.address && props.address.city === '' && <small className="validation-message">*City</small>}
                {/*</div>*/}
            </div>
            <div className={'form-group col-md-2'}>
                <label>State:</label>
                {/*<div>*/}
                    <input className="form-control" type={"text"} maxLength={10} value={props.address && props.address.state} onChange={(e) => {onChange('state', e.target.value)}}/>
                    {props.address && props.address.state === '' && <small className="validation-message">*State</small>}
                {/*</div>*/}
            </div>
            <div className={'form-group col-md-2'}>
                <label>Zip:</label>
                {/*<div>*/}
                    <input className="form-control" type={"text"} maxLength={10} value={props.address && props.address.zip} onChange={(e) => {onChange('zip', e.target.value)}}/>
                    {props.address && props.address.zip === '' && <small className="validation-message">*Zip</small>}
                {/*</div>*/}
            </div>
        </div>
    </div>
}

export default Address;
