import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyle from "./style/global.style";
import useAuth from "./hooks/useAuth";

// Pages/route components
import GamePage from "./pages/GamePage";
import LoginPage from "./pages/LoginPage";

function App() {
    const { isAuthenticated } = useAuth();

    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    {!isAuthenticated ? <Redirect to="/login" /> : <GamePage />}
                </Route>

                <Route path="/login" component={LoginPage} exact />
            </Switch>
            <GlobalStyle />
        </>
    );
}

export default App;
