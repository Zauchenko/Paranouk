import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import FriendsBar from "./components/Navbar/FiensdSiteBar/FriendsSiteBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Userscontainer from "./components/Users/Userscontainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



const App = (props) => {


    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/profile' render={() => <ProfileContainer />}/>
                <Route path='/users' render={() => <Userscontainer />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends' render={() => <FriendsBar/>}/>
            </div>
        </div>


    )
}

export default App;
