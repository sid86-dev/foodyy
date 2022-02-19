import React,{useState} from 'react';
import {Formik, Form} from 'formik';
import {TextField} from "./TextField";
import {Link, Redirect,} from "react-router-dom";
import * as Yup from 'yup';

const Signup = ( {logo}) => {
    const[hide, setHide] = useState('hide')
    const [error, setError] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const postSignup = (values) => {
            const signupUrlProd = "https://food-yy.herokuapp.com/auth/v1/signup"
            const signupUrlLocal = "http://127.0.0.1:5000/auth/v1/signup"
            let submitBtn = document.getElementById('submitBtn');
            setIsDisabled(true);
            fetch(signupUrlProd, {
                method: "POST",
                body: JSON.stringify(values),
                cache: "no-cache",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }})
                .then(function (response){
                    if (response.status !== 200){
                        console.log("Response Status was not 200");
                        return ;
                    }
                    response.json().then(function (data) {
                        if(data.status === 'success'){
                            setHide('block');
                            localStorage.setItem('token', data.token)

                            window.setTimeout(function() {
                            window.location.replace('/');
                            }, 2000);
                        }
                        else if(data.status === 'failed'){
                            console.log(data);
                        }
                        else{
                            setError(data.status);
                            setIsDisabled(false);
                        }
                    })
                }).catch((err)=>{
                    setIsDisabled(false);
                    setError('Sorry something went wrong')
            })

    }
    const validate = Yup.object({

        name: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password do not match')
            .required('Confirm password is required'),
    })
    return (<div className="container-fluid mb-5" >
        <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
                <div className="card flex-row my-3 border-0  rounded-3 overflow-hidden">
                    <div className="card-img-left d-none d-md-flex">
                    </div>
                    <div className="card-body p-4 p-sm-5 shadow-sm rounded-3" style={{backgroundColor:'#f6f6f6'}}>
                        <h5 className="card-title text-center mb-4 fw-light fs-5"><img className="w-25" src={logo} alt="banner"/></h5>

                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                password: '',
                                confirmPassword: ''
                            }}
                            validationSchema={validate}
                            onSubmit={values => postSignup(values) }
                        >
                            {formik => (
                                <div>
                                    <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
                                    {/*success alert*/}
                                    <div className={hide}>
                                    <div className="alert alert-success d-flex align-items-center" role="alert">
                                        <div  >
                                           <span className="fs-4 mx-2"><i className="bi bi-check-circle-fill"/></span>
                                            Account Created
                                        </div>
                                    </div></div>

                                    <Form>
                                        <TextField label="Name" name="name" type="text"/>
                                        <TextField label="Email" name="email" type="email"/>
                                        <p className="d-block text-center mt-2 small text-danger" >{error}</p>

                                        <TextField label="password" name="password" type="password"/>
                                        <TextField label="Confirm Password" name="confirmPassword" type="password"/>
                                        <div className="d-grid mb-2">
                                            <button className="btn btn-lg btn-outline-light btn-login fw-bold text-uppercase"
                                                    type="submit" style={{backgroundColor:'#efa032'}} id="submitBtn" disabled={isDisabled}>Register
                                            </button >
                                        </div>
                                        <Link to="/">
                                        <p className="d-block text-center mt-2 small text-dark" >Have an account? Sign
                                            In</p>
                                        </Link>
                                    </Form>
                                </div>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Signup;