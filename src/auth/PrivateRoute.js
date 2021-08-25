import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Login from "./Login";

const PrivateRoute = ({ component: RouteComponent, ...options }) => {
  const { currentUser } = useContext(AuthContext);
  const Component = currentUser ? RouteComponent : Login;
  console.log(currentUser);
  console.log(options);

  return <Route {...options} component={Component} />;
};

export default PrivateRoute;