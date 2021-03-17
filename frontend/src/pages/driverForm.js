import React, {useState} from 'react';

const DriverForm = () => {
    let [id, setId] = useState('');
    return <div className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/drivers">Drivers</a></li>
                <li className="breadcrumb-item active" aria-current="page">ID # {id}</li>
            </ol>
        </nav>
        <div className="container-sm w-75">
            <div className="form-row">
                <div className="form-group col-md-3">
                    <label htmlFor="inputEmail4">First Name</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="First Name" />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputPassword4">Last Name</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Last Name" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Email</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Email" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row">
                <div className="form-group col-md-3">
                    <label htmlFor="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputZip">Mobile</label>
                    <input type="text" className="form-control" id="inputZip" placeholder={"Mobile"}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-2">
                    <label htmlFor="inputCity">Cents/ Mile</label>
                    <input type="text" className="form-control" id="inputCity" placeholder={"Cents/ Mile"}/>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputState">Layover</label>
                    <input type="text" className="form-control" id="inputZip" placeholder={"layover"}/>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Pick-up/ Delivery</label>
                    <input type="text" className="form-control" id="inputZip" placeholder={"Pick-up/ Delivery"} />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputZip">Border Crossing</label>
                    <input type="text" className="form-control" id="inputZip" placeholder={"Border Crossing"}/>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputZip">Waiting Fee</label>
                    <input type="text" className="form-control" id="inputZip" placeholder={"Waiting Fee"}/>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            On Payroll
                        </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Save Driver</button>
        </div>
    </div>
}

export default DriverForm;
