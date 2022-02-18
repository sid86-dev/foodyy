import React from 'react';
import {Formik, Form} from 'formik';
import {TextField} from "./TextField";
import * as Yup from 'yup';

const Signup = ( {logo}) => {
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
                        <h5 className="card-title text-center mb-4 fw-light fs-5"><img className="w-25" src={logo}/></h5>

                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                password: '',
                                confirmPassword: ''
                            }}
                            validationSchema={validate}
                            onSubmit={values => {
                                console.log(values)
                            }}
                        >
                            {formik => (
                                <div>
                                    <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
                                    <Form>
                                        <TextField label="Name" name="name" type="text"/>
                                        <TextField label="Email" name="email" type="email"/>
                                        <TextField label="password" name="password" type="password"/>
                                        <TextField label="Confirm Password" name="confirmPassword" type="password"/>
                                        <div className="d-grid mb-2">
                                            <button className="btn btn-lg btn-outline-light btn-login fw-bold text-uppercase"
                                                    type="submit" style={{backgroundColor:'#efa032'}}>Register
                                            </button>
                                        </div>

                                        <a className="d-block text-center mt-2 small text-dark" href="/">Have an account? Sign
                                            In</a>

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