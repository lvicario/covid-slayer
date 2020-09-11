import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import GlobalStyle from "./style/global.style";
import { fetchAuth } from "./store/auth/actions";

// Pages/route components
import GamePage from "./pages/GamePage";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAuth({
            email: "testing@test.com",
            password: "testing"
        }));
    });

    return (
        <>
            <Header />
            <Switch>
                <Route path="/" component={GamePage} exact />
            </Switch>
            <GlobalStyle />
        </>
    );
}

export default App;
