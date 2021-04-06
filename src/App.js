import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileModule from "./components/Profile/Profile";



const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <ProfileModule/>

        </div>

    )
}

export default App;
