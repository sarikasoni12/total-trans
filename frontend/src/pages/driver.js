import React, {useState, useEffect} from 'react';
import {get} from "../common/api";
import Search from "../components/search";
import CheckIcon from "../Elements/CheckIcon";
import Button from "../Elements/Button";
import {formatDate, number_format} from "../common/formatting";

const Driver = () => {
    const [trips, setTrips] = useState([]);
    const [searchParam, setSearchParam] = useState([]);

    useEffect( () => {
        let queryString = Object.keys(searchParam).map(function(key) {
            return key + '=' + searchParam[key]
        }).join('&');

        if(searchParam['driver_id'] !== undefined && searchParam['driver_id'] > 0){
            get(`/driver/${searchParam['driver_id']}/salary?${queryString}`)
                .then(res =>{
                    setTrips(res);
                });
        } else if(queryString !== ''){
            get(`/driver/salary?${queryString}`)
                .then(res =>{
                    setTrips(res);
                });
        }
    }, [searchParam]);

    const getTotalAmountOnMiles = () => {
        return trips.reduce((accumulator, trip) => {
            return accumulator + trip.amount_on_miles;
        }, 0)
    }

    const getTotalBorderCrossingFee = () => {
        return trips.reduce((accumulator, trip) => {
            return accumulator + trip.border_crossing_fee;
        }, 0)
    }

    const getTotalLayover = () => {
        return trips.reduce((accumulator, trip) => {
            return accumulator + trip.layover_fee;
        }, 0)
    }

    const getTotalPickUpDeliverFee = () => {
        return trips.reduce((accumulator, trip) => {
            return accumulator + trip.pickup_delivery_fee;
        }, 0)
    }

    const getTotalWaitingFee = () => {
        return trips.reduce((accumulator, trip) => {
            return accumulator + trip.waiting_hours_fee;

        }, 0)
    }

    const getTotalSalary = () => {
        return getTotalAmountOnMiles()
                + getTotalBorderCrossingFee()
                + getTotalLayover()
                + getTotalPickUpDeliverFee()
                + getTotalWaitingFee();
    }

    const onSearch = (params) => {
        setSearchParam(params)
    }
    return <div>
        <Search onSearch={onSearch}/>
        <header>
            <div className="divCell">Trip Id#</div>
            <div className="divCell">Pick-up - Delivery Date</div>
            <div className="divCell">Amount on miles</div>
            <div className="divCell">Border crossing fee</div>
            <div className="divCell">Layover</div>
            <div className="divCell">Pickup-delivery fee</div>
            <div className="divCell">Waiting fee</div>
        </header>
        {trips.map((trip, index) => {
            return <div className={'divRow'} key={index} onClick={() => editTrip(trip.id)}>
                <div className={'divCell'}>
                    {trip.trip_id}
                </div>
                <div className={'divCell'}>
                    {trip.trip_delivery_date}
                </div>
                <div className={'divCell'}>
                    $ {number_format(trip.amount_on_miles, 2)}
                </div>
                <div className={'divCell'}>
                    $ {trip.border_crossing_fee}
                </div>
                <div className={'divCell'}>
                    $ {trip.layover_fee}
                </div>
                <div className={'divCell'}>
                    $ {trip.pickup_delivery_fee}
                </div>
                <div className={'divCell'}>
                     ${trip.waiting_hours_fee}
                </div>
            </div>;
        })}
        <div className={'divRow'}>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">$ {number_format(getTotalAmountOnMiles(), 2)}</div>
            <div className="divCell">$ {number_format(getTotalBorderCrossingFee(), 2)}</div>
            <div className="divCell">$ {number_format(getTotalLayover(), 2)}</div>
            <div className="divCell">$ {number_format(getTotalPickUpDeliverFee(), 2)}</div>
            <div className="divCell">$ {number_format(getTotalWaitingFee(), 2)}</div>
        </div>
        <div className={'divRow'}>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">$ {number_format(getTotalSalary(), 2)}</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
            <div className="divCell">&nbsp;</div>
        </div>
    </div>
};

export default Driver;
