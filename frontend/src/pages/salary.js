import React, {useState, useEffect} from 'react';
import {get} from "../common/api";
import Search from "../search";
import CheckIcon from "../Elements/CheckIcon";
import Button from "../Elements/Button";
import {formatDate, number_format} from "../common/formatting";

const Salary = () => {
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
    return   <div className="container-fluid p-0">
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
                                                aria-label="Position: activate to sort column ascending">Dates#
                                            </th>
                                            <th className="sorting" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 112px;"
                                                aria-label="Office: activate to sort column ascending">Cents/ Mile
                                            </th>
                                            <th className="sorting" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 112px;"
                                                aria-label="Office: activate to sort column ascending">Amount on miles
                                            </th>
                                            <th className="sorting" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 49px;"
                                                aria-label="Age: activate to sort column ascending">Border crossing fee
                                            </th>
                                            <th className="sorting" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 102px;"
                                                aria-label="Start date: activate to sort column ascending">Layover
                                            </th>
                                            <th className="sorting" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 80px;"
                                                aria-label="Salary: activate to sort column ascending">Pickup-delivery fee
                                            </th>
                                            <th className="sorting" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 80px;"
                                                aria-label="Salary: activate to sort column ascending">Waiting fee
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {trips.map((trip, index) => {
                                            return <tr role="row" className="odd">
                                                <td className="dtr-control sorting_1" tabIndex="0">
                                                    <a href={"#"} onClick={() => editTrip(trip.id)}> {trip.trip_id}</a>
                                                </td>
                                                <td>{trip.trip_delivery_date}</td>
                                                <td>{trip.cents_per_mile}</td>
                                                <td> $ {number_format(trip.amount_on_miles, 2)} </td>
                                                <td> $ {trip.border_crossing_fee} </td>
                                                <td> $ {trip.layover_fee} </td>
                                                <td> $ {trip.pickup_delivery_fee} </td>
                                                <td>
                                                    ${trip.waiting_hours_fee}
                                                </td>
                                            </tr>
                                        })}
                                        <tr className={'divRow'}>
                                            <td className="divCell">&nbsp;</td>
                                            <td className="divCell">&nbsp;</td>
                                            <td className="divCell">&nbsp;</td>
                                            <td className="divCell">$ {number_format(getTotalAmountOnMiles(), 2)}</td>
                                            <td className="divCell">$ {number_format(getTotalBorderCrossingFee(), 2)}</td>
                                            <td className="divCell">$ {number_format(getTotalLayover(), 2)}</td>
                                            <td className="divCell">$ {number_format(getTotalPickUpDeliverFee(), 2)}</td>
                                            <td className="divCell">$ {number_format(getTotalWaitingFee(), 2)}</td>
                                        </tr>
                                        <tr className={'divRow'}>
                                            <td className="divCell">&nbsp;</td>
                                            <td className="divCell">&nbsp;</td>
                                            <td className="divCell">&nbsp;</td>
                                            <td className="divCell">$ {number_format(getTotalSalary(), 2)}</td>
                                            <td className="divCell">&nbsp;</td>
                                            <td className="divCell">&nbsp;</td>
                                            <td className="divCell">&nbsp;</td>
                                            <td className="divCell">&nbsp;</td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
};

export default Salary;
