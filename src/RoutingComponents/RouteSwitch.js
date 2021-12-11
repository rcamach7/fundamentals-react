import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppMain from "./AppMain";
import Profile from "./Profile";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppMain />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
};
export default RouteSwitch;