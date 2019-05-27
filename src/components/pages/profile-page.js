import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import { warningMessage } from '../../actions'

class ProfilePage extends Component {

    renderContent() {
        return (
            <div className="container">
                <h3>Profile page </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        )
    };

    redirectToLogin(){
        this.props.warningMessage(true);
        return <Redirect to="/login"/>
    }

    render() {
        const { isLogged } = this.props;

        return isLogged ? this.renderContent() : this.redirectToLogin();


    }
}

const mapStateToProps = ({isLogged}) => {
    return {isLogged}
};

const mapDispatchToProps = {
    warningMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);