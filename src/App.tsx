import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "@components/Header";
import useAuth from "@src/hooks/useAuth";
import GlobalStyle from "@src/style/global.style";

// Pages/route components
import GamePage from "@src/pages/GamePage";
import LoginPage from "@src/pages/LoginPage";
import RegisterPage from "@src/pages/RegisterPage";

function App() {
    const { isAuthenticated, loadUserFromStorage, fetchAuthSuccess } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isAuthenticated) {
            loadUserFromStorage(dispatch);
        }
    }, [isAuthenticated]);

    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    {!isAuthenticated ? <Redirect to="/login" /> : <GamePage />}
                </Route>
                <Route path="/login" component={LoginPage} exact />
                <Route path="/register" component={RegisterPage} exact />
            </Switch>
            <GlobalStyle />
        </>
    );
}

export default App;
