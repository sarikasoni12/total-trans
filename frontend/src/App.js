import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import TripForm from "./tripForm";
import Trips from "./trips";
import {domain} from './common/constants';

const Header = () => {
    return <div>
        <h1>Total Trans Fedelity</h1>
    </div>
};

const NavBar = () => {
  return <div>
      <div className={'navItem'}> <a href={`${domain}/trips`}>Trips</a> </div>
      <div className={'navItem'}> <a href={`${domain}/trip`}>New Trip </a></div>
  </div>
};
const Page = () => {
    return <BrowserRouter>
        <Route exact path={'/trip/:id'} component={TripForm}></Route>
        <Route exact path={'/trip'} component={TripForm}></Route>
        <Route exact path={'/trips'} component={Trips}></Route>
    </BrowserRouter>;
};

const App = () => {
    return <div>
        <Header/>
        <div>
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
