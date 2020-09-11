import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Players from "./components/Players";
import GameScreen from "./components/GameScreen";
import GlobalStyle from "./style/global.style";

function App() {
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
