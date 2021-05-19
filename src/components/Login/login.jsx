import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/Form/FormsControl";
import {required} from "../../utils/validators/validator";
import {login} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "./../Common/Form/FormControl.module.css"

const LoginForm = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"email"} name={"email"} component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input} type={"password"}
                           validate={[required]}/>
                </div>
                <div>
                    <Field component={Input} type={"checkbox"} name={"rememberMe"}/> remember me
                </div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
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
    const  onSubmit = (formData) => {
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


export default connect (mapStateToProps, {login,}) (Login);