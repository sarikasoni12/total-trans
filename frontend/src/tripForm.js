import React, {useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import {get, post} from './common/api';
import "react-datepicker/dist/react-datepicker.css";
import {defaultConversionRate, domain} from './common/constants';
import {formatDate} from './common/formatting';
import UploadFiles from "./components/UploadFiles";
import axios from "axios";
import Address from "./components/address";
import Driver from "./pages/driver";
import Drivers from "./components/drivers";
import Brokers from "./components/brokers";
import Trucks from "./components/trucks";
import Trailers from "./components/trailers";
import TripDates from "./components/tripDates";
import Price from "./components/price";

const TripForm = (props) => {

    //-----DATES
    let [startDate, setStartDate] = useState(new Date());
    let [expectEndDate, setExpectedEndDate] = useState(new Date());
    let [endDate, setEndDate] = useState(new Date());

    //------PO ORDER
    let [poOrderNo, setPoOrderNo] = useState('');
    let [poOrderDate, setPoOrderDate] = useState('');

    //-----UNIT AND DRIVER
    let [truck, setTruck] = useState('');
    let [trailer, setTrailer] = useState('');
    let [drivers, setDrivers] = useState([]);
    let [trailerOther, setTrailerOther] = useState('');

    //-----LOCATIONS
    let [pickUpLocation, setPickUpLocation] = useState('');
    let [deliveryLocation, setDeliveryLocation] = useState('');
    let [shipperAddress, setShipperAddress] = useState({});
    let [consigneeAddress, setConsigneeAddress] = useState({});

    let [brokerId, setBrokerId] = useState('');
    let [price, setPrice] = useState('');
    let [currency, setCurrency] = useState('CAD');
    let [conversionRate, setConversionRate] = useState(1);
    let [miles, setMiles] = useState('');


    let [uploads, setUploads] = useState([]);

    //-----EXTRA FEE
    let [borderCrossingNo, setBorderCrossingNo] = useState(0);
    let [layover, setLayover] = useState(0);
    let [pickUpDeliveryNo, setPickUpDeliveryNo] = useState(0);
    let [waitingHours, setWaitingHours] = useState(0);

    //------LIST DATA
    let [tripId, setTripId] = useState(props.match.params && props.match.params.id);

    const validateFields = () => {
        if (startDate === ''
            || expectEndDate === ''
            || endDate === ''
            || truck <= 0
            || (trailer <= 0 && trailerOther == '')
            || pickUpLocation === ''
            || deliveryLocation === ''
            || brokerId <= 0
            || price <= 0
            || miles <= 0
            || drivers.length <= 0
            || poOrderNo === ''
            || poOrderDate === ''
        ) {
            return false;
        }
        return true;
    };
    const saveTrip = () => {
        // if(!validateFields()){
        //     return false;
        // }
        let data = {
            pickup_date: formatDate(startDate),
            expected_delivery_date: formatDate(expectEndDate),
            delivery_date: formatDate(endDate),
            truck_unit: truck,
            trailer_unit: trailer,
            pickup_location: pickUpLocation,
            delivery_location: deliveryLocation,
            miles: miles,
            broker_id: brokerId,
            price: price,
            currency: currency,
            conversion_rate: conversionRate,
            driver1_id: drivers[0] !== undefined ? drivers[0] : null,
            driver2_id: drivers[1] !== undefined ? drivers[1] : null,
            uploads: uploads,
            border_crossing_no: borderCrossingNo,
            layover: layover,
            pickup_delivery_no: pickUpDeliveryNo,
            waiting_hours: waitingHours,
            trailer_other: trailerOther,
            vendor_order_no: poOrderNo,
            vendor_order_date: formatDate(poOrderDate),
            shipper_address: shipperAddress,
            consignee_address: consigneeAddress,
            id: tripId
        };
        post(`/trip`, data)
            .then(trip => {
                saveAddress(trip.id, 'shipper', shipperAddress)
                    .then(res => {
                        saveAddress(res.trip_id, 'consignee', consigneeAddress)
                            .then(res => {
                                saveDrivers(res.trip_id, drivers)
                                    .then(res => {
                                        uploadDocuments(res.trip_id)
                                    })
                            });
                    })
            });
    };

    const uploadDocuments = (tripId) => {
        const formData = new FormData();
        uploads.forEach((upload, index) => {
            formData.append(`uploads${index}`, upload);
        });
        axios.post(`${domain}/api/trip/${tripId}/upload-documents`, formData)
            .then((res) => {
                location.href = `${domain}/trips`;
            });
    }

    const saveAddress = (tripId, addressType, data) => {
        return post(`/trip/${tripId}/address/${addressType}`, data)
            .then(res => res);
    }

    const saveDrivers = (tripId, drivers) => {
        return post(`/trip/${tripId}/drivers`, drivers)
            .then(res => res);
    }

    const changeCurrency = (currency) => {
        let rate = currency === 'USD' ? defaultConversionRate : 1;
        setConversionRate(rate);
        setCurrency(currency);
    }

    const onFileChange = (event, index) => {
        let files = uploads;
        files[index] = event.target.files[0];
        setUploads(files);
    }

    const addDriver = (newDrivers) => {
         setDrivers(newDrivers);
    }

    const addBroker = (newBrokerId) => {
        setBrokerId(newBrokerId);
    }

    const addTruck = (newTruckId) => {
        setTruck(newTruckId);
    }

    const addTrailer = (newTrailerId) => {
        setTrailer(newTrailerId);
    }

    useEffect(() => {

        if (tripId) {
            get(`/trip/${tripId}`)
                .then((res) => {
                    let day = 60 * 60 * 24 * 1000;
                    let start = new Date(Date.parse(res.pickup_date)+day);
                    let expected_delivery = new Date(Date.parse(res.expected_delivery_date)+day);
                    let delivery = new Date(Date.parse(res.delivery_date)+day);
                    let poOrderDate = new Date(Date.parse(res.vendor_order_date)+day);
                    setStartDate(start);
                    setExpectedEndDate(expected_delivery);
                    setEndDate(delivery);
                    setTruck(res.truck_unit);
                    setTrailer(res.trailer_unit);
                    setPickUpLocation(res.pickup_location);
                    setDeliveryLocation(res.delivery_location);
                    setMiles(res.miles);
                    setBrokerId(res.broker_id);
                    setPrice(res.price);
                    setCurrency(res.currency);
                    setConversionRate(res.conversion_rate);
                    setBorderCrossingNo(res.border_crossing_no);
                    setLayover(res.layover);
                    setPickUpDeliveryNo(res.pickup_delivery_no);
                    setWaitingHours(res.waiting_hours);
                    setShipperAddress(res.shipper_address);
                    setConsigneeAddress(res.consignee_address);
                    setPoOrderNo(res.vendor_order_no)
                    setPoOrderDate(poOrderDate)
                    setUploads(res.documents);

                    let driversTemp = [];
                    if(res.driver1_id){
                        driversTemp[driversTemp.length] = parseInt(res.driver1_id);
                    }
                    if(res.driver2_id){
                        driversTemp[driversTemp.length] = parseInt(res.driver2_id);
                    }
                    setDrivers(driversTemp);
                });
        }

    }, [tripId]);

    return <form className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/trips">Trips</a></li>
                <li className="breadcrumb-item active" aria-current="page">ID # {tripId}</li>
            </ol>
        </nav>

        <div className="form-row">
            <Brokers brokerId = {brokerId} addBroker={addBroker}/>
            <div className="form-group col-md-2">
                <label htmlFor="poOrder">PO Order No:</label>
                <input
                    className="form-control"
                    id={"poOrder"}
                    type={"text"}
                    name={"po_number"}
                    value={poOrderNo} onChange={(e) => {
                    setPoOrderNo(e.target.value)
                }}
                    placeholder="PO Order #"
                />
                {/*{poOrderNo === '' && <small className="validation-message">*PO order number</small>}*/}
            </div>
            <div className="form-group col-md-2">
                <label htmlFor="poDate">PO Order Date:</label>
                <div id={"poDate"}>
                    <DatePicker
                        name="po_order_date"
                        selected={poOrderDate}
                        onChange={date => setPoOrderDate(date)}
                        dateFormat="dd-MM-yyyy"
                        className={"form-control"}
                    />
                </div>
                {/*{poOrderDate === '' && <small className="validation-message">*Enter PO order date</small>}*/}
            </div>
            <div className={"col-md-5"}>
                <div className="form-row">
                    <Price
                        price={price}
                        setPrice={setPrice}
                        currency={currency}
                        changeCurrency={changeCurrency}
                        conversionRate={conversionRate}
                        setConversionRate={setConversionRate}
                    />
                </div>
            </div>
        </div>

        <TripDates
            startDate={startDate}
            setStartDate={setStartDate}
            expectEndDate={expectEndDate}
            setExpectedEndDate={setExpectedEndDate}
            endDate={endDate}
            setEndDate={setEndDate}
        />
        <div className="form-row">
            <div className={'col-md-5'}>
                <h6>Shipper Address</h6>
                <Address id="shipper" address={shipperAddress} onChange={setShipperAddress}/>
            </div>
            <div className={'col-md-5'}>
               <h6>Consignee Address</h6>
                <Address address={consigneeAddress} onChange={setConsigneeAddress}/>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-2">
                <label for={"miles"}>Miles :</label>
                <input
                    id={"miles"}
                    className="form-control"
                    type="text" name="miles" value={miles}
                    onChange={(evt) => setMiles(evt.target.value)}/>
                {/*{miles === '' && <small className="validation-message">*Enter valid miles</small>}*/}
            </div>
            <div className={'form-group col-md-2'}>
                <Trucks id="truck" addTruck = {addTruck} truckId={truck}/>
            </div>
            <div className={'form-group col-md-2'}>
               <Trailers addTrailer={addTrailer} trailerId={trailer}/>
            </div>
            {(trailer === '0') &&
                <div className={'form-group col-md-2'}>
                    <label></label>
                    <input
                        className="form-control"
                        type='text' name={'trailer_other'} value={trailerOther} onChange={(e) => {
                        setTrailerOther(e.target.value)
                    }}/>
                </div>
            }
        </div>
        <Drivers drivers={drivers} addDriver={addDriver}/>

        <div className="form-row">
            <div className={'form-group col-md-2'}>
                <label>Border crossings</label>
                <select
                    className="form-control"
                    value={borderCrossingNo} name="border_crossing_no" onChange={(evt) => {
                    setBorderCrossingNo(evt.target.value)
                }}>
                    <option> --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div className={'form-group col-md-2'}>
                <label>Layovers: </label>
                <select
                    className="form-control"
                    name="layover" value={layover} onChange={(evt) => {
                    setLayover(evt.target.value)
                }}>
                    <option> --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div className="form-group col-md-2">
                <label>Pick-up deliveries:</label>
                <select
                    className="form-control"
                    name="pickup_delivery_no" value={pickUpDeliveryNo} onChange={(evt) => {
                    setPickUpDeliveryNo(evt.target.value)
                }}>
                    <option> --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div className="form-group col-md-2">
                <label>Waiting hours:</label>
                <select
                    className="form-control"
                    name="waiting_hours" value={waitingHours} onChange={(evt) => {
                    setWaitingHours(evt.target.value)
                }}>
                    <option> --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
        </div>
        <div className=" form-group">
            <UploadFiles onFileChange={onFileChange} documents={uploads} tripId={tripId}/>
        </div>
        <div>
            <input className={"btn btn-primary btn-lg"} type='button' name='save' value={'Save Trip'} onClick={saveTrip}/>
        </div>
    </form>
};

export default TripForm;

