import React, {useState, useEffect} from 'react';
import {get} from "./../../common/api";
import Search from "./../../search";
import CheckIcon from "./../../Elements/CheckIcon";
import Button from "./../../Elements/Button";
import {formatDate, number_format} from "./../../common/formatting";

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [searchParam, setSearchParam] = useState([]);

    const getQueryString = () => {
        return Object.keys(searchParam).map(function(key) {
            return key + '=' + searchParam[key]
        }).join('&');
    }
    useEffect( () => {
        let queryString = getQueryString();
        get(`/expenses?${queryString}`)
            .then(res =>{
                setExpenses(res);
            });
    }, [searchParam]);

    const onSearch = (params) => {
        setSearchParam(params)
    }

    const getTotalInCAD = () => {
        return expenses.reduce((accumulator, expense) => {
            return expense.currency === 'CAD'? accumulator+parseFloat(expense.amount, 2): accumulator;
        }, 0)
    }
    const getTotalInUSD = () => {
        return expenses.reduce((accumulator, expense) => {
            return expense.currency === 'USD'? accumulator+parseFloat(expense.amount, 2): accumulator;
        }, 0)
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
                                <div className={'card new-trip'}>
                                    <div className={"element"}>
                                        <a href={"/new-expense"}><Button className={"btn btn-primary"}>Add New Expense</Button></a>
                                    </div>
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
                                                ID#
                                            </th>
                                            <th className="sorting_asc" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 155px;"
                                                aria-sort="ascending"
                                                aria-label="Name: activate to sort column descending">
                                                Date
                                            </th>
                                            <th className="sorting" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 237px;"
                                                aria-label="Position: activate to sort column ascending">
                                                Amount (CAD)
                                            </th>
                                            <th className="sorting" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 237px;"
                                                aria-label="Position: activate to sort column ascending">
                                                Amount (USD)
                                            </th>
                                            <th className="sorting" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 112px;"
                                                aria-label="Office: activate to sort column ascending">
                                                Trip ID#
                                            </th>
                                            <th className="sorting" tabIndex="0"
                                                aria-controls="datatables-reponsive" rowSpan="1" colSpan="1"
                                                // style="width: 49px;"
                                                aria-label="Age: activate to sort column ascending">
                                                Comments
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {expenses.map((expense, index) => {
                                            return <tr role="row" className="odd">
                                                <td className="dtr-control sorting_1" tabIndex="0">
                                                    <a href={`/expenses/${expense.id}`}>
                                                        {expense.id}
                                                    </a>
                                                </td>
                                                <td className="dtr-control sorting_1" tabIndex="0">
                                                    <a href={`/expenses/${expense.id}`}>
                                                        {expense.date}
                                                    </a>
                                                </td>
                                                <td>{expense.currency==='CAD'? `$${expense.amount} CAD`:''}</td>
                                                <td>{expense.currency==='USD'? `$${expense.amount} USD`:''}</td>
                                                <td>{expense.trip_id}</td>
                                                <td>{expense.comment}</td>
                                            </tr>
                                        })}
                                        <tr role="row" className="odd">
                                            <td>&nbsp;</td>
                                            <td className="dtr-control sorting_1" tabIndex="0">&nbsp;</td>
                                            <td>${number_format(getTotalInCAD())} CAD</td>
                                            <td>${number_format(getTotalInUSD())} USD</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
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

export default Expenses;
