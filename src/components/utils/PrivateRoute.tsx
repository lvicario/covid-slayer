import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import useAuth from "@src/hooks/useAuth";

const PrivateRoute = ({component: Component, ...props}) => {
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
