import React, {useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import {get, post} from './common/api';
import "react-datepicker/dist/react-datepicker.css";
import {defaultConversionRate, domain} from './common/constants';
import {formatDate} from './common/formatting';
import UploadFiles from "./components/UploadFiles";
import axios from "axios";

const TripForm = () => {
  let [startDate, setStartDate] = useState('');
  let [expectEndDate, setExpectedEndDate] = useState('');
  let [endDate, setEndDate] = useState('');
  let [truck, setTruck] = useState('');
  let [trailer, setTrailer] = useState('');
  let [pickUpLocation, setPickUpLocation] = useState('');
  let [deliveryLocation, setDeliveryLocation] = useState('');
  let [broker, setBroker] = useState('');
  let [price, setPrice] = useState('');
  let [currency, setCurrency] = useState('CAD');
  let [team, setTeam] = useState('');
  let [miles, setMiles] = useState('');
  let [conversionRate, setConversionRate] = useState(1);
  let [driver1, setDriver1] = useState('');
  let [driver2, setDriver2] = useState('');
  let [uploads, setUploads] = useState([]);
  let [borderCrossingNo, setBorderCrossingNo] = useState(0);
  let [layover, setLayover] = useState(0);
  let [pickUpDeliveryNo, setPickUpDeliveryNo] = useState(0);
  let [waitingHours, setWaitingHours] = useState(0);

  let [trucks, setTrucks] = useState([]);
  let [trailers, setTrailers] = useState([]);
  let [brokers, setBrokers] = useState([]);
  let [teams, setTeams] = useState([]);

  const validateFields = () => {
      if(startDate === ''
          || expectEndDate === ''
          || endDate === ''
          || truck <= 0
          || trailer <= ''
          || pickUpLocation === ''
          || deliveryLocation === ''
          || broker <= 0
          || price <= 0
          || team === ''
          || miles <= 0
      ) {
          return false;
      }
    return true;
  };
  const saveTrip = () => {
      if(!validateFields()){
          return false;
      }
        let data = {
            pickup_date: formatDate(startDate),
            expected_delivery_date: formatDate(expectEndDate),
            delivery_date: formatDate(endDate),
            truck_unit: truck,
            trailer_unit: trailer,
            pickup_location: pickUpLocation,
            delivery_location: deliveryLocation,
            miles: miles,
            broker: broker,
            price: price,
            currency: currency,
            conversion_rate: conversionRate,
            driver1: driver1,
            driver2: driver2,
            uploads: uploads,
            border_crossing_no: borderCrossingNo,
            layover: layover,
            pickup_delivery_no: pickUpDeliveryNo,
            waiting_hours: waitingHours
        };
       post(`/trip`, data)
           .then(res => {uploadDocuments(res.id)});
  };

  const uploadDocuments = (tripId) => {
      const formData = new FormData();
      uploads.forEach((upload, index) => {
          formData.append(`uploads${index}`, upload);
      });
      axios.post(`${domain}/api/trip/${tripId}/upload-documents`, formData)
          .then((res) => {
          });
  }

  const changeCurrency = (currency) => {
      let rate = currency === 'USD'? defaultConversionRate: 1;
      setConversionRate(rate);
      setCurrency(currency);
  }

  const onFileChange = (event, index) => {
      let files = uploads;
      files[index] = event.target.files[0];
      setUploads(files);
  }

  useEffect(() => {
      console.log(trucks.length);
      if(trucks.length > 0){
          return;
      }
      get('/trucks')
          .then((res) => {
              setTrucks(res);
          });

      get('/trailers')
          .then((res) => {
              setTrailers(res);
          });

      get('/brokers')
          .then((res) => {
              setBrokers(res);
          });

      get('/teams')
          .then((res) => {
              setTeams(res);
          });
  }, []);
  return <div className="divForm newTrip">
      <div className="divField cards">
          <div className={'card'}><label>Pick-up Date:</label>
                 <div> <DatePicker
                      name="start_date"
                      selected={startDate}
                      onChange={date => setStartDate(date)}
                      dateFormat="dd-MM-yyyy"
                  />
                 </div>
              {startDate === '' && <small className="text-danger">*Enter valid Pick-up Date</small>}
          </div>
          <div className={'card'}><label>Expected Delivery Date: </label>
              <div>
                  <DatePicker
                      name="expected_end_date"
                      selected={expectEndDate}
                      onChange={date => setExpectedEndDate(date)}
                      dateFormat="dd-MM-yyyy"
                  />
              </div>
              {expectEndDate === '' && <small className="text-danger">*Enter valid delivery Date</small>}
          </div>
          <div className="card"><label>Delivery Date:</label>
              <div>
                  <DatePicker
                      name="end_date"
                      selected={endDate}
                      onChange={date => setEndDate(date)}
                      dateFormat="dd-MM-yyyy"
                  />
              </div>
              {endDate === '' && <small className="text-danger">*Enter valid delivery Date</small>}
          </div>
      </div>
          <div className="divField cards">
              <div className={'card'}>
                  <label>Truck:</label>
                  <select name='truck_unit' onChange={(evt) => setTruck(evt.target.value)}>
                      <option> -- </option>
                      {trucks.map((truck, index) => {
                           return <option value={truck.id} key={`truck_unit_${index}`}>{truck.name}</option>;
                      })}
                  </select>
                  {truck === '' && <small className="text-danger">*Enter valid truck</small>}
              </div>
              <div className={'card'}>
                  <label>Trailer:</label>
                  <select name='trailer_unit' onChange={(evt) => setTrailer(evt.target.value)}>
                      <option> -- </option>
                      {trailers.map((trailer, index) => {
                          return <option value={trailer.id} key={`truck_unit_${index}`}>{trailer.name}</option>;
                      })}
                  </select>
                  {trailer === '' && <small className="text-danger">*Enter valid trailer</small>}
              </div>
          </div>
          <div className="divField"><label>Pick-up location:</label>
              <input type="text" name="pickup_location" onChange={(evt) => setPickUpLocation(evt.target.value)}/>
              {pickUpLocation === '' && <small className="text-danger">*Enter valid pick-up location</small>}
          </div>
          <div className="divField"><label>Delivery location:</label>
              <input type="text" name="dest_location" onChange={(evt) => setDeliveryLocation(evt.target.value)}/>
              {deliveryLocation === '' && <small className="text-danger">*Enter valid delivery location</small>}
          </div>
          <div className="divField"><label>Miles :</label>
              <input type="text" name="miles" onChange={(evt) => setMiles(evt.target.value)}/>
              {miles === '' && <small className="text-danger">*Enter valid miles</small>}
          </div>
          <div className="divField"><label>Brokers:</label>
              <select onChange={(evt) => setBroker(evt.target.value)}>
                  <option> -- </option>
                  {brokers.map((broker, index) => {
                      return <option value={broker.id} key={`truck_unit_${index}`}>{broker.name}</option>;
                  })}
              </select>
              {broker === '' && <small className="text-danger">*Enter valid broker</small>}
          </div>
          <div className="divField"><label>Load Price:</label>
              <div>
                  <input type="text" name="price" className={'price'} onChange={(evt) => setPrice(evt.target.value)}/>
                  <div className={'currency'}>
                      <select onChange={(evt) => {changeCurrency(evt.target.value);}}>
                          <option value="CAD">CAD</option>
                          <option value="USD">USD</option>
                      </select>
                  </div>
                  <input type="text" name="conversion_rate" value={conversionRate} className={'conversion-rate'} onChange={(evt) => setConversionRate(evt.target.value)}/>
              </div>
              {price === '' && <small className="text-danger">*Enter valid price</small>}
          </div>
          <div className="divField"><label>Team:</label>
              <select onChange={(evt) => setTeam(evt.target.value)}>
                  <option> -- </option>
                  {teams.map((tmp, index) => {
                      return <option value={tmp.id} key={`truck_unit_${index}`}>{tmp.name}</option>;
                  })}
              </select>
              {
                  team > 0
                  && <div>
                      {teams.map((tmp, index) => {
                          if(parseInt(tmp.id) === parseInt(team)){
                              return teams[index]['drivers'].map((driver) => {
                                  return <React.Fragment>
                                      <input type="checkbox" value={driver.id} checked/>{driver.name}
                                  </React.Fragment>
                              });
                          }
                      })}
                  </div>
              }
          </div>

      <div className="divField cards">
          <div className={'card'}><label>Border crossings</label>
              <div> <select name="border_crossing_no" onChange={(evt)=>{setBorderCrossingNo(evt.target.value)}}>
                  <option> -- </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
              </select>
              </div>
          </div>
          <div className={'card'}><label>Layovers: </label>
              <div> <select name="layover" onChange={(evt)=>{setLayover(evt.target.value)}}>
                  <option> -- </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
              </select>
              </div>
          </div>
          <div className="card"><label>Pick-up deliveries:</label>
              <div> <select name="pickup_delivery_no" onChange={(evt)=>{setPickUpDeliveryNo(evt.target.value)}}>
                  <option> -- </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
              </select>
              </div>
          </div>
          <div className="card"><label>Waiting hours:</label>
              <div> <select name="waiting_hours" onChange={(evt)=>{setWaitingHours(evt.target.value)}}>
                  <option> -- </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
              </select>
              </div>
          </div>
      </div>
          <div className="divField">
              <UploadFiles onFileChange={onFileChange}/>
          </div>
        <div>
            <input type='button' name='save' value={'Save'} onClick={saveTrip}/>
        </div>
      </div>
};

export default TripForm;

