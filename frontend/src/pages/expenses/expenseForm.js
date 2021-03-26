import React, {useEffect, useState} from 'react';
import {get, post} from "../../common/api";
import {defaultConversionRate, domain} from "../../common/constants";
import DatePicker from "react-datepicker";
import {formatDate} from "../../common/formatting";
import Price from "../../components/price";

const ExpenseForm = (props) => {
    let [id, setId] = useState(props.match.params && props.match.params.id);
    let [date, setDate] = useState('');
    let [amount, setAmount] = useState('');
    let [tripId, setTripId] = useState('');
    let [currency, setCurrency] = useState('CAD');
    let [conversionRate, setConversionRate] = useState('');
    let [comment, setComment] = useState('');
    let [saved, setSaved] = useState(false);

    const getData = () => {
        const data = {
            'trip_id': tripId,
            'comment': comment,
            'amount': amount,
            'currency': currency,
            'date': formatDate(date),
            'currency_rate': conversionRate
        };
        return data;
    }
    const save = () => {
       let data = getData();
       if(id > 0) {
           post(`/expenses/${id}`, data)
               .then(res => {
                   if(res.success){
                       setSaved(true);
                       location.href = `${domain}/expenses`;
                   }
               })
       }
       else {
           post(`/expenses`, data)
               .then(res => {
                   if(res.success){
                       setSaved(true);
                       location.href = `${domain}/expenses`;
                   }
               })
       }
    }
    const changeCurrency = (currency) => {
        let rate = currency === 'USD' ? defaultConversionRate : 1;
        setConversionRate(rate);
        setCurrency(currency);
    }
    useEffect(() => {
        if(id){
            get(`/expenses/${id}`)
                .then(res => {
                    let day = 60 * 60 * 24 * 1000;
                    let date = new Date(Date.parse(res.date)+day);
                    setDate(date);
                    setTripId(res.trip_id);
                    setAmount(res.amount);
                    setComment(res.comment);
                    setCurrency(res.currency);
                    setConversionRate(res.currency_rate)
                })
        }
    }, [id]);
    return <div className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/expenses">Expenses</a></li>
                <li className="breadcrumb-item">ID# {id}</li>
            </ol>
        </nav>
        {saved && <div className="alert alert-success" role="alert">
            The expense is saved successfully!</div>
        }
        <div className="container-sm w-75">
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="inputEmail4">Date</label>
                    {/*<input type="text" className="form-control" id="inputEmail4" placeholder="YYYY-MM-DD"*/}
                    {/*       value={date}*/}
                    {/*       onChange={(e)=>{setDate(e.target.value)}}/>*/}
                    <div id="inputEmail4">
                        <DatePicker
                            name="po_order_date"
                            selected={date}
                            onChange={date => setDate(date)}
                            dateFormat="dd-MM-yyyy"
                            className={"form-control"}
                        />
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-5">
                    <label htmlFor="inputPassword4">Amount</label>
                    <Price
                        price={amount}
                        setPrice={setAmount}
                        currency={currency}
                        changeCurrency={changeCurrency}
                        conversionRate={conversionRate}
                        setConversionRate={setConversionRate}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-5">
                    <label htmlFor="inputPassword4">Trip ID#</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="Trip ID#"
                           value={tripId}
                           onChange={(e)=>{setTripId(e.target.value)}}/>
                    {/*<input type="text" className="form-control" id="inputPassword4" placeholder="Gender"*/}
                    {/*       onChange={(e)=>{setGender(e.target.value)}}/>*/}
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-5">
                    <label htmlFor="inputPassword4">Comments</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="Comments"
                           value={comment}
                           onChange={(e)=>{setComment(e.target.value)}}/>
                </div>
            </div>

            <button type="submit" className="btn btn-primary" onClick={save}>Save Expenses</button>
        </div>
    </div>
}

export default ExpenseForm;
