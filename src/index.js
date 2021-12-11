import React from 'react';
import ReactDOM from 'react-dom';
import RouteSwitch from "./RoutingComponents/RouteSwitch";
// import LifeCycleClock from "./components/LifeCycleClock";
// import HandlingEvents from "./components/HandlingEvents";
// import RandoComponents from "./components/RandoComponents";
// import FetchFromAPI from "./components/FetchFromAPI";

ReactDOM.render(
    <React.StrictMode>
        {/*<App/>*/}
        {/*<LifeCycleClock/>*/}
        {/*<HandlingEvents/>*/}
        {/*<RandoComponents/>*/}
        {/*<FetchFromAPI/>*/}
        <RouteSwitch/>
    </React.StrictMode>,
    document.getElementById('root')
);
