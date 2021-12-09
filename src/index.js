import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LifeCycleClock from "./components/LifeCycleClock";
import HandlingEvents from "./components/HandlingEvents";
import RandoComponents from "./components/RandoComponents";

ReactDOM.render(
    <React.StrictMode>
        <App/>
        <LifeCycleClock/>
        <HandlingEvents/>
        <RandoComponents/>
    </React.StrictMode>,
    document.getElementById('root')
);
