import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import TripForm from "./tripForm";
import Trips from "./trips";
import {domain} from './common/constants';
import Driver from "./pages/driver";

const Header = () => {
    return <div>
        <h1>Total Trans Fedelity</h1>
    </div>
};

const NavBar = () => {
  return <div>
      <div className={'navItem'}> <a href={`${domain}/trips`}>Trips</a> </div>
      <div className={'navItem'}> <a href={`${domain}/new-trip`}>New Trip </a></div>
      <div className={'navItem'}> <a href={`${domain}/driver`}>Driver </a></div>
  </div>
};
const Page = () => {
    return <BrowserRouter>
        <Route exact={true} path={'/new-trip'} component={TripForm}></Route>
        <Route exact={true} path={'/trip/:id'} component={TripForm}></Route>
        <Route exact={true} path={'/trips'} component={Trips}></Route>
        <Route exact={true} path={'/driver'} component={Driver}></Route>
    </BrowserRouter>;
};

const App = () => {
    return <div>
        <Header/>
        <div className={'frame'}>
            <div className={'navBar'}>
                <NavBar/>
            </div>
            <div className={'page'}>
                <Page/>
            </div>
        </div>
    </div>
}

export default App;
