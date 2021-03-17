import React, {useState, useEffect} from 'react';
import {get} from "../common/api";
import Search from "../search";
import CheckIcon from "../Elements/CheckIcon";
import Button from "../Elements/Button";
import {formatDate, number_format} from "../common/formatting";

const Driver = () => {
    const [drivers, setDrivers] = useState([]);
    const [searchParam, setSearchParam] = useState([]);

    useEffect( () => {
        let queryString = Object.keys(searchParam).map(function(key) {
            return key + '=' + searchParam[key]
        }).join('&');

        // if(searchParam['driver_id'] !== undefined && searchParam['driver_id'] > 0){
        //     get(`/drivers`)
        //         .then(res =>{
        //             setDrivers(res);
        //         });
        // } else if(queryString !== ''){
            get(`/driver`)
                .then(res =>{
                    setDrivers(res);
                });
        // }
    }, []);

    // const onSearch = (params) => {
    //     setSearchParam(params)
    // }
    return   <div className="container-fluid p-0">
        {/*<h1 className="h3 mb-3">Responsive DataTables</h1>*/}
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <div id="datatables-reponsive_wrapper"
                             className="dataTables_wrapper dt-bootstrap4 no-footer">
                            {/*<div className="row">*/}
                            {/*    <form className="d-none d-sm-inline-block">*/}
                            {/*        <div className="input-group input-group-navbar">*/}
                            {/*            <Search onSearch={onSearch}/>*/}
                            {/*        </div></form>*/}
                            {/*</div>*/}
                            <div className={'card new-trip'}>
                                <div className={"element"}>
                                    <a href={"/new-driver"}><Button className={"btn btn-primary"}>Add New Driver</Button></a>
                                </div>
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
                                                aria-label="Name: activate to sort column descending">
                                                Name
                                            </th>
                                            <th className="sorting" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 237px;"
                                                aria-label="Position: activate to sort column ascending">
                                                Cents/ Mile
                                            </th>
                                            <th className="sorting" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 112px;"
                                                aria-label="Office: activate to sort column ascending">
                                                Layover
                                            </th>
                                            <th className="sorting" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 49px;"
                                                aria-label="Age: activate to sort column ascending">
                                                Pick-up/ Delivery fee
                                            </th>
                                            <th className="sorting" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 102px;"
                                                aria-label="Start date: activate to sort column ascending">
                                                Border Crossing Fee
                                            </th>
                                            <th className="sorting" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 80px;"
                                                aria-label="Salary: activate to sort column ascending">
                                                Waiting fee
                                            </th>
                                            <th className="sorting" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 80px;"
                                                aria-label="Salary: activate to sort column ascending">
                                                Salaried
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {drivers.map((driver, index) => {
                                            return <tr role="row" className="odd">
                                                <td className="dtr-control sorting_1" tabIndex="0">
                                                    {/*<a href={"#"} onClick={() => editTrip(trip.id)}> */}
                                                        {driver.first_name}
                                                    {/*</a>*/}
                                                </td>
                                                <td>{driver.cents_per_mile/100}</td>
                                                <td>$ {driver.layover_fee}</td>
                                                <td> $ {driver.pickup_delivery_fee} </td>
                                                <td> $ {driver.layovborder_crossing_feeer_fee} </td>
                                                <td> $ {driver.waiting_fee} </td>
                                                <td>{driver.on_salary? <CheckIcon/>:"X"}</td>
                                            </tr>
                                        })}
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

export default Driver;
