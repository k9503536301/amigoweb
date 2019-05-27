import React from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import { loggedAdmin, warningMessage } from "../../actions";
import './login-page.css';

class LoginPage extends React.Component {
    state = {
        status: "idle",
        login : "",
        password : "",
        loginData: { login : "Admin", password : "12345"}
    };

    onChange = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    };

    onSave = (event) => {
        event.preventDefault();
        const { login, password, loginData } = this.state;

        if (login === loginData.login && password === loginData.password) {
            this.props.loggedAdmin(true);
            this.props.warningMessage(false);
        }

        else this.setState({status:"error"});
    };

    renderForm = () =>{
        return (<form className="form-group">

            <input name="login"
                   className="form-control"
                   value={this.state.login}
                   placeholder="введите логин"
                   onChange={this.onChange} />

            <input name="password"
                   type="password"
                   value={this.state.password}
                   placeholder="введите пароль"
                   className="form-control"
                   onChange={ this.onChange.bind(this) } />

            <button className="btn btn-info"
                    onClick={ this.onSave }>Войти</button>
        </form>)
    };

    renderStatus = () =>{
        if (this.props.isLogged) {
            return (<Redirect to="/profile"/>)
        };

        if (this.state.status === "error"){
            return (<div className="alert alert-warning rounded" role="alert">
                Введен неверный e-mail или пароль
            </div>)
        };
    };

    render() {
        const {isWarning, isLogged} = this.props;
        return (<div className="col">
            {isWarning ?
                (<div className="alert alert-danger rounded" role="alert">
                    У вас нет права на просмотр страницы, пожалуйста, авторизуйтесь
                </div>)
                : null}

            {!isLogged && this.renderForm()}
            {this.renderStatus()}
        </div>)
    };
}

const mapStateToProps = ({ isWarning, isLogged }) => {
    return { isWarning, isLogged }
};

const mapDispatchToProps = {
    loggedAdmin,
    warningMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);