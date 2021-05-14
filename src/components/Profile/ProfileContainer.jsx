import React from 'react';
import Profile from "./Profile";
import {getStatus, gettingProfileId, updateStatus} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.gettingProfileId(userId);
        this.props.getStatus(userId);

    }

    render() {

        return (
            <Profile {...this.props}  />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {gettingProfileId,getStatus,updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);
