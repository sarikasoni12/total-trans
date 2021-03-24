import React, {useState, useEffect} from 'react';
import {get} from "./common/api";
import {number_format} from "./common/formatting";
import {Redirect, useHistory} from "react-router";
import {defaultConversionRate} from './common/constants';
import Search from "./search";
import CheckIcon from "./Elements/CheckIcon";
import Button from "./Elements/Button";
import InvoiceButton from "./ui/invoiceButton";
import AddPayment from "./ui/addPayment";

const AllTrips = (props) => {
    const [trips, setTrips] = useState([]);
    const [units, setUnits] = useState([]);
    const [repair, setRepair] = useState([]);
    const [fuel, setFuel] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [searchParam, setSearchParam] = useState([]);
    const [salary, setSalary] = useState([]);
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(false);

    const history = useHistory()
    useEffect(() => {
        let queryString = Object.keys(searchParam).map(function(key) {
            return key + '=' + searchParam[key]
        }).join('&');

        setLoading(true);
        getTrips();
        get('/units')
            .then(res =>{
                setUnits(res);
            });
        get(`/repair?${queryString}`)
            .then(res =>{
                setRepair(res);
            });
        get(`/fuel?${queryString}`)
            .then(res =>{
                setFuel(res);
            });
        get(`/expenses?${queryString}`)
            .then(res =>{
                setExpenses(res);
            });
        // get(`/salary?${queryString}`)
        //     .then(res =>{
        //         setSalary(res);
        //     });
        get(`/driver/salary?${queryString}`)
            .then(res =>{
                setSalary(res);
            });
        get(`/payment?${queryString}`)
            .then(res =>{
                setPayments(res);
            });
    }, [searchParam]);

    const onSearch = (params) => {
        setSearchParam(params)
    }
    const getTrips = () => {
        setLoading(true);
        let queryString = getQueryString();
        get(`/trips?${queryString}`)
            .then(res =>{
                setTrips(res);
                setLoading(false);
            });
    }
    const getQueryString = () => {
        return Object.keys(searchParam).map(function(key) {
            return key + '=' + searchParam[key]
        }).join('&');
    }
    const getTripTotalInCAD = () => {
        return trips.reduce((total, trip) => {
            return trip.currency === 'CAD'? total+parseInt(trip.price): total+0;
        }, 0)
    };
    const getTripTotalInUSD = () => {
        return trips.reduce((total, trip) => {
            return trip.currency === 'USD'? total+parseInt(trip.price): total+0;
        }, 0)
    };
    const getAllTripsTotalInCAD = () => {
        return getTripTotalInCAD()+(getTripTotalInUSD()*defaultConversionRate);
    };
    const getTotalMiles = () => {
        return trips.reduce((total, trip) => {
            return total+parseInt(trip.miles);
        }, 0)
    };
    const getTotalUnitInstallmentAmount = () => {
        return units.reduce((accumulator, unit) => {
            return accumulator+parseInt(unit.installment_amount)+parseInt(unit.insurance_amount)
        }, 0)
    }
    const getAllFuelInCAD = () => {
        return fuel.reduce((accumulator, tmpFuel) => {
            return accumulator+(tmpFuel.amount*tmpFuel.currency_rate);
        }, 0);
    };
    const getAllRepairInCAD = () => {
        return repair.reduce((accumulator, tmpRepair) => {
            return accumulator+(tmpRepair.amount*tmpRepair.currency_rate);
        }, 0);
    };
    const getAllExpensesInCAD = () => {
        return expenses.reduce((accumulator, tmpExpense) => {
            return accumulator+(tmpExpense.amount*tmpExpense.currency_rate);
        }, 0);
    }
    const getAllSalary = () => {
        return salary.reduce((accumulator, tmpSalary) => {
            return accumulator+(tmpSalary.amount_on_miles
                + tmpSalary.border_crossing_fee
                + tmpSalary.layover_fee
                + tmpSalary.pickup_delivery_fee
                + tmpSalary.waiting_hours_fee);
        }, 0);
    }
    const getTripPaymentInCAD = () => {
        return payments.reduce((total, payment) => {
            return payment.currency === 'USD'? total+parseInt(payment.amount)*payment.currency_rate: total+0;
        }, 0)
    };
    const editTrip = (tripId) => {
        history.push(`/trip/${tripId}`);
    };
    const getPayments = (trip) => {
        return trip.payments.reduce((accoumulator, trip) => {
            return parseFloat(accoumulator)+parseFloat(trip.amount)
        }, 0);
    };
    const getTotalPaymentsInCAD = () => {
        return trips.reduce((total, trip) => {
            let tripPayments = trip.payments.reduce((totalPayment, payment) => {
                return payment.currency === 'CAD'? totalPayment + parseInt(payment.amount): 0;
            }, 0)
            return tripPayments+total;
        }, 0)
    }
    const getTotalPaymentsInUSD = () => {
        return trips.reduce((total, trip) => {
            let tripPayments = trip.payments.reduce((totalPayment, payment) => {
                return payment.currency === 'USD'? totalPayment + parseInt(payment.amount): 0;
            }, 0)
            return tripPayments+total;
        }, 0)
    }
    const invoiceStatusClass = (trip) => {
        let dt1 = new Date(trip.delivery_date);
        let dt2 = new Date();

        let diff = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));

        if(diff >= 20){
            return 'blue-status';
        } else if(diff >= 30) {
            return 'red-status';
        } else {
            return 'black';
        }
    }
    return (
        <div className="container-fluid p-0">
            {/*<h1 className="h3 mb-3">Responsive DataTables</h1>*/}
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div id="datatables-reponsive_wrapper"
                                 className="dataTables_wrapper dt-bootstrap4 no-footer">
                                <div className="row">
                                    <form className="d-none d-sm-inline-block">
                                        <div className="input-group input-group-navbar">
                                    <Search onSearch={onSearch}/>
                                        </div></form>
                                            <div className={'card new-trip'}>
                                                <div className={"element"}>
                                                    <a href={"/new-trip"}><Button className={"btn btn-primary"}>Add New Trip</Button></a>
                                                </div>
                                            </div>

                                    {/*<div className="col-sm-12 col-md-6">*/}
                                    {/*    <div className="dataTables_length" id="datatables-reponsive_length">*/}
                                    {/*        /!*<label>Show <select name="datatables-reponsive_length"*!/*/}
                                    {/*        /!*                    aria-controls="datatables-reponsive"*!/*/}
                                    {/*        /!*                    className="custom-select custom-select-sm form-control form-control-sm">*!/*/}
                                    {/*        /!*    <option value="10">10</option>*!/*/}
                                    {/*        /!*    <option value="25">25</option>*!/*/}
                                    {/*        /!*    <option value="50">50</option>*!/*/}
                                    {/*        /!*    <option value="100">100</option>*!/*/}
                                    {/*        /!*</select> entries</label>*!/*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-12 col-md-6">*/}
                                    {/*    <div id="datatables-reponsive_filter" className="dataTables_filter"><label>Search:<input*/}
                                    {/*        type="search" className="form-control form-control-sm" placeholder=""*/}
                                    {/*        aria-controls="datatables-reponsive" /></label></div>*/}
                                    {/*</div>*/}
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table id="datatables-reponsive"
                                               className="table table-striped dataTable no-footer dtr-inline"
                                               // style="width: 100%;"
                                               role="grid"
                                               aria-describedby="datatables-reponsive_info">
                                            <thead>
                                            <tr role="row">
                                                <th className="sorting_asc" tabIndex="0"
                                                    aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                    // style="width: 155px;"
                                                    aria-sort="ascending"
                                                    aria-label="Name: activate to sort column descending">ID#
                                                </th>
                                                <th className="sorting" tabIndex="0"
                                                    aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                    // style="width: 237px;"
                                                    aria-label="Position: activate to sort column ascending">PO#
                                                </th>
                                                <th className="sorting" tabIndex="0"
                                                    aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                    // style="width: 112px;"
                                                    aria-label="Office: activate to sort column ascending">Dates
                                                </th>
                                                <th className="sorting" tabIndex="0"
                                                    aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                    // style="width: 49px;"
                                                    aria-label="Age: activate to sort column ascending">Unit
                                                </th>
                                                <th className="sorting" tabIndex="0"
                                                    aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                    // style="width: 102px;"
                                                    aria-label="Start date: activate to sort column ascending">Location
                                                </th>
                                                <th className="sorting" tabIndex="0"
                                                    aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                    // style="width: 80px;"
                                                    aria-label="Salary: activate to sort column ascending">Miles
                                                </th>
                                                <th className="sorting" tabIndex="0"
                                                    aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                    // style="width: 80px;"
                                                    aria-label="Salary: activate to sort column ascending">Broker
                                                </th>
                                                <th className="sorting" tabIndex="0"
                                                    aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                    // style="width: 80px;"
                                                    aria-label="Salary: activate to sort column ascending">Price<br/>(CAD)
                                                </th>
                                                <th className="sorting" tabIndex="0"
                                                    aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                    // style="width: 80px;"
                                                    aria-label="Salary: activate to sort column ascending">Price<br/>(USD)
                                                </th>
                                                <th className="sorting" tabIndex="0"
                                                    aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                    // style="width: 80px;"
                                                    aria-label="Salary: activate to sort column ascending">Team
                                                </th>
                                                <th className="sorting" tabIndex="0"
                                                    aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                    // style="width: 80px;"
                                                    aria-label="Salary: activate to sort column ascending">Invoice
                                                </th>
                                                <th className="sorting" tabIndex="0"
                                                    aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                    // style="width: 80px;"
                                                    aria-label="Salary: activate to sort column ascending">Paid
                                                </th>
                                                <th className="sorting" tabIndex="0"
                                                    aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                    // style="width: 80px;"
                                                    aria-label="Salary: activate to sort column ascending">Factoring
                                                </th>
                                                <th className="sorting" tabIndex="0"
                                                    aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                    // style="width: 80px;"
                                                    aria-label="Salary: activate to sort column ascending">Action
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {loading &&
                                            <tr role="row" className="odd">
                                                <td className="dtr-control sorting_1" tabIndex="0" colSpan={14} align={"center"}>
                                                    <div className="spinner-border" role="status">
                                                        <span className="visually-hidden"></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            }

                                            {!loading && trips.map((trip, index) => {
                                               return <tr role="row" className="odd">
                                                    <td className="dtr-control sorting_1" tabIndex="0">
                                                        <a href={"#"} onClick={() => editTrip(trip.id)}> {trip.id}</a>
                                                    </td>
                                                    <td>
                                                        {trip.vendor_order_no}
                                                    </td>
                                                    <td>
                                                        {trip.pickup_date}/<br/>  {trip.delivery_date}
                                                    </td>
                                                    <td>
                                                        {trip.truck && trip.truck.name}/ {trip.trailer && trip.trailer.name}
                                                    </td>
                                                    <td>
                                                        {trip.shipper_address && trip.shipper_address.city}, {trip.shipper_address && trip.shipper_address.state}
                                                         -  {trip.consignee_address && trip.consignee_address.city}, {trip.consignee_address && trip.consignee_address.state}
                                                    </td>
                                                    <td>
                                                        {trip.miles}
                                                    </td>
                                                   <td>
                                                       {trip.broker && trip.broker.name}
                                                   </td>
                                                   <td>
                                                       {trip.currency === 'CAD' && `$ ${trip.price}`}
                                                   </td>
                                                   <td>
                                                       {trip.currency === 'USD' && `$ ${trip.price}`}
                                                   </td>
                                                   <td>
                                                       {trip.driver1 && trip.driver1.first_name}/ {trip.driver2 && trip.driver2.first_name}
                                                   </td>
                                                   <td>
                                                       {(trip.invoice_date
                                                           && trip.invoice_number
                                                           && trip.invoice_date !== '0000-00-00'
                                                           && trip.invoice_number !== '')
                                                       && <React.Fragment><CheckIcon /><a href={`/api/trip/${trip.id}/invoice/generate`} target={"_blank"}>{trip.invoice_number}</a></React.Fragment>}

                                                       {trip.invoice_number && getPayments(trip) <= 0 && <React.Fragment>/<br/> {trip.invoice_date}</React.Fragment>}


                                                       {(!trip.invoice_date
                                                           || !trip.invoice_number)
                                                       && <InvoiceButton trip_id={trip.id}/>
                                                       // <a href={`/api/trip/${trip.id}/invoice/generate`} target={"_blank"}>
                                                       //     {/*<button className="btn btn-info"> Invoice  </button>*/}
                                                       // </a>
                                                       }
                                                   </td>
                                                   <td>
                                                       {getPayments(trip) > 0? `$ ${getPayments(trip)} `: `--`}
                                                   </td>
                                                   <td>
                                                       {trip.factoring_done && <CheckIcon />}
                                                   </td>
                                                   <td>
                                                       <div className="dropdown">
                                                           <i className="bi bi-three-dots-vertical dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                               <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                    height="16" fill="currentColor"
                                                                    className="bi bi-three-dots-vertical"
                                                                    viewBox="0 0 16 16">
                                                                   <path
                                                                       d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                                               </svg>
                                                           </i>
                                                           <div className="dropdown-menu"
                                                                aria-labelledby="dropdownMenuButton">
                                                               <AddPayment
                                                                   trip_id={trip.id}
                                                                   currency={trip.currency}
                                                                   invoiceNo={trip.invoice_number}
                                                                   callback={getTrips}
                                                                   amount={trip.price}
                                                               />
                                                               <a className="dropdown-item" href="#">Generate Invoice</a>
                                                               <a className="dropdown-item" href="#">Send E-Manifest</a>
                                                           </div>
                                                       </div>
                                                   </td>
                                                </tr>
                                            })}

                                            <tr>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >{number_format(getTotalMiles())}</td>
                                                <td >&nbsp;</td>
                                                <td > ${number_format(getTripTotalInCAD())} (CAD) </td>
                                                <td > ${number_format(getTripTotalInUSD())} (USD) </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                            </tr>

                                            <tr >
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >Payments</td>
                                                <td >&nbsp;</td>
                                                <td > ${number_format(getTotalPaymentsInCAD())} (CAD) </td>
                                                <td > ${number_format(getTotalPaymentsInUSD())} (USD) </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                            </tr>
                                            <tr >
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >Total in (CAD)</td>
                                                <td > ${number_format(getAllTripsTotalInCAD())} (CAD) </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                            </tr>
                                            <tr >
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >Truck/ Trailer Installments</td>
                                                <td > ${number_format(getTotalUnitInstallmentAmount())} (CAD) </td>
                                                <td >${number_format(getAllTripsTotalInCAD() - getTotalUnitInstallmentAmount())} (CAD)</td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                            </tr>
                                            <tr >
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >Fuel/Repair paid by card (CAD)</td>
                                                <td > ${number_format(getAllFuelInCAD())} (CAD) </td>
                                                <td >${number_format( getAllTripsTotalInCAD() - getAllFuelInCAD() - getTotalUnitInstallmentAmount())} (CAD)</td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                            </tr>
                                            <tr >
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >Repair not paid by card (CAD)</td>
                                                <td > ${number_format(getAllRepairInCAD())} (CAD) </td>
                                                <td >${number_format(getAllTripsTotalInCAD() - getAllFuelInCAD() - getAllRepairInCAD() - getTotalUnitInstallmentAmount())} (CAD)</td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                            </tr>
                                            <tr >
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >Expenses in (CAD)</td>
                                                <td > ${number_format(getAllExpensesInCAD())} (CAD) </td>
                                                <td >${number_format(getAllTripsTotalInCAD() - getAllFuelInCAD() - getAllRepairInCAD() - getTotalUnitInstallmentAmount() - getAllExpensesInCAD())} (CAD)</td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                            </tr>
                                            <tr >
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >Salary in (CAD)</td>
                                                <td > ${number_format(getAllSalary())} (CAD) </td>
                                                <td >${number_format(getAllTripsTotalInCAD() - getAllFuelInCAD() - getAllRepairInCAD() - getTotalUnitInstallmentAmount() - getAllExpensesInCAD() - getAllSalary())} (CAD)</td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                            </tr>
                                            <tr >
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >&nbsp;</td>
                                                <td >Payments in (CAD)</td>
                                                <td > ${number_format(getTripPaymentInCAD())} (CAD) </td>
                                                <td >&nbsp;</td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                                <td > &nbsp; </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/*<div className="row">*/}
                                {/*    <div className="col-sm-12 col-md-5">*/}
                                {/*        <div className="dataTables_info" id="datatables-reponsive_info" role="status"*/}
                                {/*             aria-live="polite">Showing 1 to 10 of 57 entries*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div className="col-sm-12 col-md-7">*/}
                                {/*        <div className="dataTables_paginate paging_simple_numbers"*/}
                                {/*             id="datatables-reponsive_paginate">*/}
                                {/*            <ul className="pagination">*/}
                                {/*                <li className="paginate_button page-item previous disabled"*/}
                                {/*                    id="datatables-reponsive_previous"><a href="#"*/}
                                {/*                                                          aria-controls="datatables-reponsive"*/}
                                {/*                                                          data-dt-idx="0" tabIndex="0"*/}
                                {/*                                                          className="page-link">Previous</a>*/}
                                {/*                </li>*/}
                                {/*                <li className="paginate_button page-item active"><a href="#"*/}
                                {/*                                                                    aria-controls="datatables-reponsive"*/}
                                {/*                                                                    data-dt-idx="1"*/}
                                {/*                                                                    tabIndex="0"*/}
                                {/*                                                                    className="page-link">1</a>*/}
                                {/*                </li>*/}
                                {/*                <li className="paginate_button page-item "><a href="#"*/}
                                {/*                                                              aria-controls="datatables-reponsive"*/}
                                {/*                                                              data-dt-idx="2"*/}
                                {/*                                                              tabIndex="0"*/}
                                {/*                                                              className="page-link">2</a>*/}
                                {/*                </li>*/}
                                {/*                <li className="paginate_button page-item "><a href="#"*/}
                                {/*                                                              aria-controls="datatables-reponsive"*/}
                                {/*                                                              data-dt-idx="3"*/}
                                {/*                                                              tabIndex="0"*/}
                                {/*                                                              className="page-link">3</a>*/}
                                {/*                </li>*/}
                                {/*                <li className="paginate_button page-item "><a href="#"*/}
                                {/*                                                              aria-controls="datatables-reponsive"*/}
                                {/*                                                              data-dt-idx="4"*/}
                                {/*                                                              tabIndex="0"*/}
                                {/*                                                              className="page-link">4</a>*/}
                                {/*                </li>*/}
                                {/*                <li className="paginate_button page-item "><a href="#"*/}
                                {/*                                                              aria-controls="datatables-reponsive"*/}
                                {/*                                                              data-dt-idx="5"*/}
                                {/*                                                              tabIndex="0"*/}
                                {/*                                                              className="page-link">5</a>*/}
                                {/*                </li>*/}
                                {/*                <li className="paginate_button page-item "><a href="#"*/}
                                {/*                                                              aria-controls="datatables-reponsive"*/}
                                {/*                                                              data-dt-idx="6"*/}
                                {/*                                                              tabIndex="0"*/}
                                {/*                                                              className="page-link">6</a>*/}
                                {/*                </li>*/}
                                {/*                <li className="paginate_button page-item next"*/}
                                {/*                    id="datatables-reponsive_next"><a href="#"*/}
                                {/*                                                      aria-controls="datatables-reponsive"*/}
                                {/*                                                      data-dt-idx="7" tabIndex="0"*/}
                                {/*                                                      className="page-link">Next</a>*/}
                                {/*                </li>*/}
                                {/*            </ul>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AllTrips;
