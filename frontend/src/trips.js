import React, {useState, useEffect} from 'react';
import {get} from "./common/api";
import {number_format} from "./common/formatting";
import {Redirect, useHistory} from "react-router";
import {defaultConversionRate} from './common/constants';
import Search from "./components/search";

const Trips = (props) =>{
    const [trips, setTrips] = useState([]);
    const [units, setUnits] = useState([]);
    const [repair, setRepair] = useState([]);
    const [fuel, setFuel] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [searchParam, setSearchParam] = useState([]);
    const [salary, setSalary] = useState([]);

    const history = useHistory()
    useEffect(() => {
        let queryString = Object.keys(searchParam).map(function(key) {
            return key + '=' + searchParam[key]
        }).join('&');

        get(`/trips?${queryString}`)
            .then(res =>{
               setTrips(res);
            });
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
        get(`/salary?${queryString}`)
            .then(res =>{
                setSalary(res);
            });
    }, [searchParam]);

    const onSearch = (params) => {
        setSearchParam(params)
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

    const editTrip = (tripId) => {
        history.push(`/trip/${tripId}`);
    };

    return <div className={'divTable trips'}>
        <Search onSearch={onSearch}/>
        <header>
            <div className="divCell">Pick-up Date</div>
            <div className="divCell">Delivery Date</div>
            <div className="divCell">Unit</div>
            <div className="divCell">Pick-up Location</div>
            <div className="divCell">Delivery Location</div>
            <div className="divCell">Miles</div>
            <div className="divCell">Broker</div>
            <div className="divCell">Price(CAD)</div>
            <div className="divCell">Price(USD)</div>
            <div className="divCell">Team</div>
            <div className="divCell">Invoice</div>
        </header>
        {trips.map((trip, index) => {
            return <div className={'divRow'} key={index} onClick={() => editTrip(trip.id)}>
                <div className={'divCell'}>
                    {trip.pickup_date}
                </div>
                <div className={'divCell'}>
                    {trip.delivery_date}
                </div>
                <div className={'divCell'}>
                    {trip.truck && trip.truck.name}/{trip.trailer && trip.trailer.name}
                </div>
                <div className={'divCell'}>
                    {trip.pickup_location}
                </div>
                <div className={'divCell'}>
                    {trip.delivery_location}
                </div>
                <div className={'divCell'}>
                    {trip.miles}
                </div>
                <div className={'divCell'}>
                    {trip.broker && trip.broker.name}
                </div>
                <div className={'divCell'}>
                    {trip.currency === 'CAD' && `$ ${trip.price}`}
                </div>
                <div className={'divCell'}>
                    {trip.currency === 'USD' && `$ ${trip.price}`}
                </div>
                <div className={'divCell'}>
                    {trip.driver1 && trip.driver1.name}/{trip.driver2 && trip.driver2.name}
                </div>
                <div className={'divCell'}>
                    {(trip.invoice_date
                    && trip.invoice_number
                    && trip.invoice_date !== '0000-00-00'
                    && trip.invoice_number !== '')
                    && `${trip.invoice_number} on ${trip.invoice_date}`}

                    {(!trip.invoice_date
                        || !trip.invoice_number)
                        && <input type="button" name="invoice" value="Invoice" className={"small-button"}/>}
                </div>
            </div>;
        })}
        <div className={'divRow'}>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">{number_format(getTotalMiles())}</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell"> ${number_format(getTripTotalInCAD())} (CAD) </div>
            <div className="divCell"> ${number_format(getTripTotalInUSD())} (USD) </div>
            <div className="divCell"> &nbsp; </div>
            <div className="divCell"> &nbsp; </div>
        </div>
        <div className={'divRow'}>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">Total in (CAD)</div>
            <div className="divCell"> ${number_format(getAllTripsTotalInCAD())} (CAD) </div>
            <div className="divCell"> &nbsp; </div>
            <div className="divCell"> &nbsp; </div>
            <div className="divCell"> &nbsp; </div>
        </div>
        <div className={'divRow'}>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">Truck/ Trailer Installments</div>
            <div className="divCell"> ${number_format(getTotalUnitInstallmentAmount())} (CAD) </div>
            <div className="divCell">${number_format(getAllTripsTotalInCAD() - getTotalUnitInstallmentAmount())} (CAD)</div>
            <div className="divCell"> &nbsp; </div>
            <div className="divCell"> &nbsp; </div>
            <div className="divCell"> &nbsp; </div>
        </div>
        <div className={'divRow'}>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">Fuel in (CAD)</div>
            <div className="divCell"> ${number_format(getAllFuelInCAD())} (CAD) </div>
            <div className="divCell">${number_format( getAllTripsTotalInCAD() - getAllFuelInCAD() - getTotalUnitInstallmentAmount())} (CAD)</div>
            <div className="divCell"> &nbsp; </div>
            <div className="divCell"> &nbsp; </div>
            <div className="divCell"> &nbsp; </div>
        </div>
        <div className={'divRow'}>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">Repair in (CAD)</div>
            <div className="divCell"> ${number_format(getAllRepairInCAD())} (CAD) </div>
            <div className="divCell">${number_format(getAllTripsTotalInCAD() - getAllFuelInCAD() - getAllRepairInCAD() - getTotalUnitInstallmentAmount())} (CAD)</div>
            <div className="divCell"> &nbsp; </div>
            <div className="divCell"> &nbsp; </div>
            <div className="divCell"> &nbsp; </div>
        </div>
        <div className={'divRow'}>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">Expenses in (CAD)</div>
            <div className="divCell"> ${number_format(getAllExpensesInCAD())} (CAD) </div>
            <div className="divCell">${number_format(getAllTripsTotalInCAD() - getAllFuelInCAD() - getAllRepairInCAD() - getTotalUnitInstallmentAmount() - getAllExpensesInCAD())} (CAD)</div>
            <div className="divCell"> &nbsp; </div>
            <div className="divCell"> &nbsp; </div>
            <div className="divCell"> &nbsp; </div>
        </div>
        <div className={'divRow'}>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">Salary in (CAD)</div>
            <div className="divCell"> ${number_format(getAllSalary())} (CAD) </div>
            <div className="divCell">${number_format(getAllTripsTotalInCAD() - getAllFuelInCAD() - getAllRepairInCAD() - getTotalUnitInstallmentAmount() - getAllExpensesInCAD() - getAllSalary())} (CAD)</div>
            <div className="divCell"> &nbsp; </div>
            <div className="divCell"> &nbsp; </div>
            <div className="divCell"> &nbsp; </div>
        </div>
    </div>
};

export default Trips;
