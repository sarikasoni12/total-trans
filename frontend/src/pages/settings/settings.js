import React, {useEffect, useState} from "react";
import {get, post} from "../../common/api";

const Settings = () => {
    let [companyName, setCompanyName] = useState();
    let [email, setEmail] = useState();
    let [dotNumber, setDotNumber] = useState();
    let [mcNumber, setMcNumber] = useState();
    let [address1, setAddress1] = useState();
    let [address2, setAddress2] = useState();
    let [city, setCity] = useState();
    let [state, setState] = useState();
    let [zip, setZip] = useState();
    let [phone, setPhone] = useState();

    let [saved, setSaved] = useState(false);

    useEffect(() => {
        get(`/settings`)
            .then(res => {
                setCompanyName(res.name);
                setEmail(res.email);
                setDotNumber(res.dot_number);
                setMcNumber(res.mc_number);
                setAddress1(res.address1);
                setAddress2(res.address2);
                setCity(res.city);
                setState(res.state);
                setZip(res.zip);
                setPhone(res.phone);
            });
    }, []);

    const save = () => {
        let data = {
            name: companyName,
            email: email,
            dot_number: dotNumber,
            mc_number: mcNumber,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            zip: zip,
            phone: phone
        };
        post(`/settings`, data)
            .then(res => {
                setSaved(true);
            });
    };

    return <div className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">Settings</li>
            </ol>
        </nav>
        {saved && <div className="alert alert-success" role="alert">
            The driver is saved successfully!</div>
        }
        <div className="container-sm w-75">
            <div className="form-row">
                <div className="form-group col-md-5">
                    <label htmlFor="inputEmail4">Company Name</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="Company Name"
                           value={companyName}
                           onChange={(e)=>{setCompanyName(e.target.value)}}/>
                </div>
                <div className="form-group col-md-5">
                    <label htmlFor="inputEmail4">Company Email</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="Email"
                           value={email}
                           onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-5">
                    <label htmlFor="inputEmail4">DOT Number</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="DOT Number<"
                           value={dotNumber}
                           onChange={(e)=>{setDotNumber(e.target.value)}}/>
                </div>
                <div className="form-group col-md-5">
                    <label htmlFor="inputEmail4">MC Number</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="MC Number"
                           value={mcNumber}
                           onChange={(e)=>{setMcNumber(e.target.value)}}/>
                </div>
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
                           value={phone}
                           onChange={(e)=>{setPhone(e.target.value)}}/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={save} >Save Settings</button>
        </div>
    </div>
}

export default Settings;
