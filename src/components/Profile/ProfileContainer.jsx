import React from 'react';
import Profile from "./Profile";
import {gettingProfileId} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import withRouter from "react-router-dom/es/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.gettingProfileId(userId);

    }

    render() {

        return (
            <Profile {...this.props}  />
        )
    }
}

let AuthRedirectComponent =  withAuthRedirect(ProfileContainer);



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,

})


export default connect(mapStateToProps, {gettingProfileId})(withRouter(AuthRedirectComponent));
