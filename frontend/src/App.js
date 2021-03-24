import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import TripForm from "./tripForm";
import Trips from "./trips";
import {domain} from './common/constants';
import Salary from "./pages/salary";
import Drivers from "./pages/drivers";
import DriverForm from "./pages/driver/driverForm";
import NavBar from "./navBar";
import Dashboard from "./dashboard";
import Footer from "./footer";
import Header from "./header";
import AllTrips from "./allTrips";
// const NavBar = () => {
//   return <div>
//       <div className={'navItem'}> <a href={`${domain}/trips`}>Trips</a> </div>
//       <div className={'navItem'}> <a href={`${domain}/new-trip`}>New Trip </a></div>
//       <div className={'navItem'}> <a href={`${domain}/driver`}>Driver </a></div>
//   </div>
// };
const Page = () => {
    return <BrowserRouter>
        <Route exact={true} path={'/new-trip'} component={TripForm}></Route>
        <Route exact={true} path={'/trip/:id'} component={TripForm}></Route>
        <Route exact={true} path={'/trips'} component={AllTrips}></Route>
        <Route exact={true} path={'/salary'} component={Salary}></Route>
        <Route exact={true} path={'/home'} component={Dashboard}></Route>
        <Route exact={true} path={'/drivers'} component={Drivers}></Route>
        <Route exact={true} path={'/new-driver'} component={DriverForm}></Route>
        <Route exact={true} path={'/driver/:id'} component={DriverForm}></Route>
    </BrowserRouter>;
};

const App = () => {
    return <React.Fragment>
        <NavBar/>
        <div className="main">
            <Header />
            <Page />
            <Footer />
        </div>
    </React.Fragment>

    // return //<div className="wrapper">
    //     {/*<Header/>*/}
    //     {/*<div className={'frame'}>*/}
    //     {/*    <div className={'navBar'}>*/}
    //     <NavBar/>
    //         {/*</div>*/}
    //         {/*<div className={'page'}>*/}
    //         {/*    <Page/>*/}
    //         {/*</div>*/}
    //     {/*</div>*/}
    // // </div>
}

export default App;
