import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import FriendsBar from "./components/Navbar/FiensdSiteBar/FriendsSiteBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {


    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.dialogPage}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/profile'
                       render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends' render={() => <FriendsBar/>}/>
            </div>
        </div>


    )
}

export default App;
