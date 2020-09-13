import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const PrivateRoute = ({component: Component, ...props}: any) => {
    const { isAuthenticated } = useAuth();

    return (
        <Route {...props}>
            {!isAuthenticated ?
                <Redirect to={{
                    pathname: "/login",
                    state: {referrer: props.path}
                }}
                /> :
                <Component />
            }
        </Route>
    );
};

export default PrivateRoute;
