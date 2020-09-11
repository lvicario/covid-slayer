import React from "react";
import Footer from "./../components/Footer";
import Players from "./../components/Players";
import GameScreen from "./../components/GameScreen";

const GamePage = () => {
    return (
        <>            
            <main>
                <Players />
                <GameScreen />
            </main>
            <Footer />
        </>
    );
};

export default GamePage;
