import React from 'react';

import './App.css';
import {Route} from 'react-router-dom';
import Login from "./components/Login";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Register from "./components/Register";
import Menu from "./components/Menu";

function App() {
    return (
        <div className="App">
            <Menu/>
            <Route path={'/login'}><Login/></Route>
            <Route path={'/profile'}><Profile/></Route>
            <Route path={'/recovery'}><Recovery/></Route>
            <Route path={'/register'}><Register/></Route>
        </div>
    );
}

export default App;
