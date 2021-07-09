import React from 'react';
import './App.css';
// import Navbar from "./components/Navbar/Navbar";
import {withRouter, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import Userscontainer from "./components/Users/Userscontainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }


    render() {
        if (!this.props.initialized)
            return <Preloader/>

        return (

            <Layout>
                <Header  className="header">
                    <div className="logo"/>
                    <HeaderContainer/>
                </Header>
                <Content style={{padding: '0 50px'}}>

                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                style={{height: '100%'}}
                            >
                                <Menu key="sub1" icon={<UserOutlined/>} title="subnav 1">
                                    <Menu.Item key="1"><NavLink to='/profile'>Profile</NavLink></Menu.Item>
                                    <Menu.Item key="2"><NavLink to='/dialogs'>Messages</NavLink></Menu.Item>
                                    <Menu.Item key="3"><NavLink to='/users'>Users</NavLink></Menu.Item>
                                    <Menu.Item key="4"><NavLink to='/news'>News</NavLink></Menu.Item>
                                    <Menu.Item key="5"><NavLink to='/music'>Music</NavLink></Menu.Item>
                                    <Menu.Item key="6"><NavLink to='/settings'>Settings</NavLink></Menu.Item>
                                </Menu>

                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Switch>
                                <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                                <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                                <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                                <Route path='/users' render={() => <Userscontainer/>}/>
                                <Route path='/news' component={News}/>
                                <Route path='/music' component={Music}/>
                                <Route path='/settings' component={Settings}/>
                                <Route path='/login' render={() => <Login/>}/>
                                <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}> 2021 Created by Zaichenko</Footer>
            </Layout>



            // <div className='app-wrapper'>
            //     <HeaderContainer/>
            //     <Navbar/>
            //     <div className='app-wrapper-content'>
            //         <Switch>
            //             <Route exact path='/' render={ () => <Redirect to={'/profile'}/>}/>
            //             <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
            //             <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
            //             <Route path='/users' render={() => <Userscontainer/>}/>
            //             <Route path='/news' component={News}/>
            //             <Route path='/music' component={Music}/>
            //             <Route path='/settings' component={Settings}/>
            //             <Route path='/login' render={() => <Login/>}/>
            //             <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
            //         </Switch>
            //     </div>
            // </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);


