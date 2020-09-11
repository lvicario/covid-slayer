import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Players from "./components/Players";
import GameScreen from "./components/GameScreen";
import GlobalStyle from "./style/global.style";
import { fetchAuth } from "./store/auth/actions";

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
            <main>
                <Players />
                <GameScreen />
            </main>
            <Footer />
            <GlobalStyle />
        </>
    );
}

export default App;
