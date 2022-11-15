import React from "react";
import { Routes, Route} from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login/Login";
import PageNotFound from "../Pages/PageNotFound";
// import PrivateRoute from "./PrivateRoute";

const Routing: React.FC = () => {
 
    return (
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
       </Routes>
    );
  };
  export default Routing;