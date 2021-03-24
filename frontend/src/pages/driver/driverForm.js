import React, {useEffect, useState} from 'react';
import {get, post} from "../../common/api";
import {domain} from "../../common/constants";

const DriverForm = (props) => {
    let [id, setId] = useState(props.match.params && props.match.params.id);
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [gender, setGender] = useState('');
    let [dob, setDob] = useState('');
    let [email, setEmail] = useState('');
    let [address1, setAddress1] = useState('');
    let [address2, setAddress2] = useState('');
    let [city, setCity] = useState('');
    let [state, setState] = useState('');
    let [zip, setZip] = useState('');
    let [mobile, setMobile] = useState('');
    let [centsPerMile, setCentsPerMile] = useState('');
    let [layoverFee, setLayoverFee] = useState('');
    let [pickupDeliveryFee, setPickupDeliveryFee] = useState('');
    let [borderCrossingFee, setBorderCrossingFee] = useState('');
    let [waitingFee, setWaitingFee] = useState('');
    let [onSalary, setOnSalary] = useState(true);

    let [saved, setSaved] = useState(false);

    const getData = () => {
        const driver_data = {
            'first_name': firstName,
            'last_name': lastName,
            'email': email,
            'gender': gender,
            'dob': dob,
            'address1': address1,
            'address2': address2,
            'city': city,
            'state': state,
            'mobile': mobile
        };
        const payroll_settings = {
            'cents_per_mile': centsPerMile,
            'layover_fee': layoverFee,
            'pickup_delivery_fee': pickupDeliveryFee,
            'border_crossing_fee': borderCrossingFee,
            'waiting_fee': waitingFee,
            'on_salary': onSalary? 1: 0
        };
        return {driver_data, payroll_settings};
    }
    const save = () => {
       let data = getData();
       if(id > 0) {
           post(`/driver/${id}`, data)
               .then(res => {
                   if(res.success){
                       setSaved(true);
                       location.href = `${domain}/drivers`;
                   }
               })
       }
       else {
           post(`/driver`, data)
               .then(res => {
                   if(res.success){
                       setSaved(true);
                       location.href = `${domain}/drivers`;
                   }
               })
       }
    }

    useEffect(() => {
        if(id){
            get(`/driver/${id}`)
                .then(res => {
                    let payrollSettings = res.payroll_settings;
                    setFirstName(res.first_name);
                    setLastName(res.last_name);
                    setGender(res.gender);
                    setDob(res.dob);
                    setEmail(res.email);
                    setAddress1(res.address1);
                    setAddress2(res.address2);
                    setCity(res.city);
                    setState(res.state);
                    setZip(res.zip);
                    setMobile(res.mobile);
                    setCentsPerMile(payrollSettings.cents_per_mile);
                    setLayoverFee(payrollSettings.layover_fee);
                    setPickupDeliveryFee(payrollSettings.pickup_delivery_fee);
                    setBorderCrossingFee(payrollSettings.border_crossing_fee);
                    setWaitingFee(payrollSettings.waiting_fee);
                    setOnSalary(payrollSettings.on_salary)
                })
        }
    }, [id]);
    return <div className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/drivers">Drivers</a></li>
                <li className="breadcrumb-item active" aria-current="page">ID # {id}</li>
            </ol>
        </nav>
        {saved && <div className="alert alert-success" role="alert">
            The driver is saved successfully!</div>
        }
        <div className="container-sm w-75">
            <div className="form-row">
                <div className="form-group col-md-3">
                    <label htmlFor="inputEmail4">First Name</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="First Name"
                           value={firstName}
                           onChange={(e)=>{setFirstName(e.target.value)}}/>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputPassword4">Last Name</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="Last Name"
                           value={lastName}
                           onChange={(e)=>{setLastName(e.target.value)}}/>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputPassword4">Gender</label>
                    <select id="inputState" className="form-control" placeholder="Gender"
                            value={gender}
                            onChange={(e)=>{setGender(e.target.value)}}>
                        <option selected>Choose...</option>
                        <option value={"M"}>Male</option>
                        <option value={"F"}>Female</option>
                    </select>
                    {/*<input type="text" className="form-control" id="inputPassword4" placeholder="Gender"*/}
                    {/*       onChange={(e)=>{setGender(e.target.value)}}/>*/}
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputPassword4">DOB</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="YYYY-MM-DD"
                           value={dob}
                           onChange={(e)=>{setDob(e.target.value)}}/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Email</label>
                <input type="email" className="form-control" id="inputAddress" placeholder="Email"
                       value={email}
                       onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
                       value={address1}
                       onChange={(e)=>{setAddress1(e.target.value)}}/>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
                       value={address2}
                       onChange={(e)=>{setAddress2(e.target.value)}}/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-3">
                    <label htmlFor="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"
                           value={city}
                           onChange={(e)=>{setCity(e.target.value)}}/>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputState">State</label>
                    <input type="text" className="form-control" id="inputCity"
                           value={state}
                           onChange={(e)=>{setState(e.target.value)}}/>
                    {/*<select id="inputState" className="form-control">*/}
                    {/*    <option selected>Choose...</option>*/}
                    {/*    <option>...</option>*/}
                    {/*</select>*/}
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip"
                           value={zip}
                           onChange={(e)=>{setZip(e.target.value)}}/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputZip">Mobile</label>
                    <input type="text" className="form-control" id="inputZip" placeholder={"Mobile"}
                           value={mobile}
                           onChange={(e)=>{setMobile(e.target.value)}}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-2">
                    <label htmlFor="inputCity">Cents/ Mile</label>
                    <input type="text" className="form-control" id="inputCity" placeholder={"Cents/ Mile"}
                           value={centsPerMile}
                           onChange={(e)=>{setCentsPerMile(e.target.value)}}/>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputState">Layover</label>
                    <input type="text" className="form-control" id="inputZip" placeholder={"layover"}
                           value={layoverFee}
                           onChange={(e)=>{setLayoverFee(e.target.value)}}/>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Pick-up/ Delivery</label>
                    <input type="text" className="form-control" id="inputZip" placeholder={"Pick-up/ Delivery"}
                           value={pickupDeliveryFee}
                           onChange={(e)=>{setPickupDeliveryFee(e.target.value)}}/>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputZip">Border Crossing Fee</label>
                    <input type="text" className="form-control" id="inputZip" placeholder={"Border Crossing"}
                           value={borderCrossingFee}
                           onChange={(e)=>{setBorderCrossingFee(e.target.value)}}/>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputZip">Waiting Fee</label>
                    <input type="text" className="form-control" id="inputZip" placeholder={"Waiting Fee"}
                           value={waitingFee}
                           onChange={(e)=>{setWaitingFee(e.target.value)}}/>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" checked={onSalary}
                           onChange={(e)=>{setOnSalary(!onSalary)}}/>
                        <label className="form-check-label" htmlFor="gridCheck">
                            On Payroll
                        </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={save}>Save Driver</button>
        </div>
    </div>
}

export default DriverForm;
