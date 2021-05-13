import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import FriendsBar from "./components/Navbar/FiensdSiteBar/FriendsSiteBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Userscontainer from "./components/Users/Userscontainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";



const App = (props) => {


    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/users' render={() => <Userscontainer />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends' render={() => <FriendsBar/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>


    )
}

export default App;
