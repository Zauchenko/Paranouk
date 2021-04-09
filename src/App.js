import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import FriendsBar from "./components/Navbar/FiensdSiteBar/FriendsSiteBar";




const App = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state = {props.state.dialogPage} />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render ={() => <Dialogs state = {props.state.dialogPage} />}/>
                    <Route path='/profile' render ={() => <Profile state = {props.state.profilePage} />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' render={() => <FriendsBar  />}/>


                </div>
            </div>
        </BrowserRouter>

    )
}

export default App;
