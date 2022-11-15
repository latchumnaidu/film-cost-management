
import React, { useContext } from "react";
import {  Route,Navigate, RouteProps } from "react-router-dom"; 
import { AuthContext } from "../Contexts/AuthContext";

const PrivateRoute = ({component:Component, ...rest}:{component: React.ComponentType<RouteProps>;}) => {
  const { isLoggedIn } = useContext(AuthContext);
 
  // return <Route {...rest} render={(props: JSX.IntrinsicAttributes & RouteProps) =>
  //   isLoggedIn
  //     ? <Component {...props} /> 
  //     : <Redirect to="/login" />
  // }/>;
};

export default PrivateRoute
 