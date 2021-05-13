import React from 'react';
import Profile from "./Profile";
import {gettingProfileId} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import withRouter from "react-router-dom/es/withRouter";
import Redirect from "react-router-dom/es/Redirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.gettingProfileId(userId);

    }

    render() {

        if (!this.props.isAuth ) return <Redirect to = {"/login"}/>

        return (
            <Profile {...this.props}  />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {gettingProfileId})(withRouter(ProfileContainer));
