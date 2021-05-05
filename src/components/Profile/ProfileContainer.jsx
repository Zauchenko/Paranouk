import React from 'react';

import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";


class ProfileContainer extends React.Component  {

    componentDidMount() {


        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {

                this.props.setUserProfile(response.data);

    });
    }

    render()
    {
        return (

            <Profile {...this.props}  />


        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})



export default connect (mapStateToProps,{setUserProfile}) (ProfileContainer);
// profile={this.props.profile}