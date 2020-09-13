import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "@components/Header";
import useAuth from "@src/hooks/useAuth";
import authService from "@services/authService";
import PrivateRoute from "@utils/PrivateRoute";
import GlobalStyle from "@src/style/global.style";

// Pages/route components
import GamePage from "@src/pages/GamePage";
import LoginPage from "@src/pages/LoginPage";
import RegisterPage from "@src/pages/RegisterPage";

function App() {
    const { isAuthenticated, fetchAuthSuccess } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isAuthenticated) {
            const user = authService.getUserFromStorage();
            if (user) {
                dispatch(fetchAuthSuccess(user));
            }
        }
    }, [isAuthenticated]);

    return (
        <>
            <Header />
            <main>
                <Switch>
                    <PrivateRoute exact path="/" component={GamePage} />
                    <Route path="/login" component={LoginPage} exact />
                    <Route path="/register" component={RegisterPage} exact />
                </Switch>
            </main>
            <GlobalStyle />
        </>
    );
}

export default App;
