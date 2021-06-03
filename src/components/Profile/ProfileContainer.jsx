import React from 'react';
import Profile from "./Profile";
import {getStatus, gettingProfileId, savePhoto, updateStatus} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserID;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.gettingProfileId(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}


let mapStateToProps = (state) => ({

    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserID: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {gettingProfileId, getStatus, updateStatus, savePhoto}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);
