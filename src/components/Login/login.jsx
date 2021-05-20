import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../Common/Form/FormsControl";
import {required} from "../../utils/validators/validator";
import {login} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "./../Common/Form/FormControl.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

                {createField("email", "email", Input, [required])}
                {createField("Password", "password", Input, [required], {type: "password"})}
                {createField(null, "rememberMe", Input, [], {type: "checkbox"}, "remember me")}

                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }


    return (
        <div>

            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login,})(Login);