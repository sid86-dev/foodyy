import React, {useState, useEffect} from 'react';
import {
    Link
} from "react-router-dom";
import Axios from "axios";


function Header(props) {
    const [error, setError] = useState('');
    const defaultUser = "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
    const [profile, setProfile] = useState({'logged':false,'link':'/','picUrl': defaultUser})
    const [emailInput, setEmailInput] = useState('')
    const [passInput, setPassInput] = useState('')
    const [userData, setUserData] = useState(null);
    const [input, setInput] = useState(''); // '' is the initial state value
    const searchIcon = <svg style={{color: 'black'}}
                            xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            className="bi bi-search" viewBox="0 0 16 16">
        <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>

    useEffect(()=>{
        let token = localStorage.getItem('token');

        const dataUrl = `https://food-yy.herokuapp.com/user/me/${token}`
        // const dataUrl = `http://127.0.0.1:5000/user/me/${token}`


        if (token !== null){
            Axios.get(dataUrl).then(res=>{
                setUserData(res.data);
                setProfile({'logged':true,'link':'/profile','picUrl':res.data.profilePic});
            })
        }
    },[]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUserData(null);
        setProfile({'logged':false,'link':'/','picUrl':defaultUser})
        window.location.replace('/');
    }

    const loginUrl = 'https://food-yy.herokuapp.com/auth/v1/login'
    // const loginUrl = 'http://127.0.0.1:5000/auth/v1/login';

    const handleLogin = ()=>{
        setError('')
        const data = {'email':emailInput, 'password':passInput}
        fetch(loginUrl, {
            method: "POST",
            body: JSON.stringify(data),
            cache: "no-cache",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                if (response.status !== 200) {
                    console.log("Response Status was not 200");
                    return;
                }

                response.json().then(function (data) {
                    if (data.status === 'success') {
                        localStorage.removeItem('token');
                        localStorage.setItem('token', data.token);
                        window.location.replace('/');
                    }
                    else if(data.status === 'User not found'){
                        setError(data.status);
                    }
                    else if(data.status === 'Email or Password does not match'){
                        setError(data.status);
                    }
                    else{
                        setError('Something went wrong');
                    }
                }).catch(()=>{
                    setError('Cannot connect');
                })
            })
    };

    const signInWithGoogle = props.signInMethods.google;
    const signInWithFacebook = props.signInMethods.facebook;

    return (
        <>
            <header className="section-header fixed-top">

                <section className="header-main border-bottom bg-white">
                    <div className="container-fluid">
                        <div className="row p-2 pt-3 pb-3 d-flex align-items-center">

                            <div className="col-md-2"><Link to="/">
                                <img className="d-none d-md-flex"
                                     src={props.logo} width="130"/> </Link>
                            </div>

                            <form className="col-md-6 mx-auto">
                                <div className="d-flex form-inputs">
                                    <div className="input-group">

                                        <input className="form-control" id="searchQuery" value={input} type="text"
                                               onInput={e => setInput(e.target.value)} type="text"
                                               placeholder={'Search'}/>
                                        <div className="input-group-text" id="navSearch" area-hidden='true'>


                                            <Link to={`/search?query=${input}&from=0&to=10`} state={{from:input}}>
                                            <span>{searchIcon}</span>
                                            </Link>
                                    </div>
                                    </div>

                                </div>
                            </form>

                            <div className="col-md-2">
                                <div className="d-flex d-none d-md-flex flex-row justify-content-end">
                                    {profile.logged === false? <a data-bs-toggle='modal'
                                                              data-bs-target='#staticBackdrop' style={{cursor:'pointer'}}>
                                        <img
                                            src={profile.picUrl}
                                            id="profile-pic"/>
                                    </a> : <Link to={profile.link} state={{from:userData}}>
                                        <img
                                            src={profile.picUrl}
                                            id="profile-pic"/>
                                    </Link> }

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid"><Link className="navbar-brand d-md-none d-md-flex" to="/"><img
                        className="img-fluid"
                        src={props.logo} width="130"/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                aria-expanded="false"
                                aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a className="nav-link active" aria-current="page"
                                                            href="#">Recipes</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Health</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Daily Feed</a></li>
                                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#"
                                                                     id="navbarDropdownMenuLink" role="button"
                                                                     data-bs-toggle="dropdown"
                                                                     aria-expanded="false"> Account </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item"state={{from:userData}} to={'/profile'}>Settings</Link></li>
                                        <li><Link className="dropdown-item" state={{from:userData}} to={'/profile'}>Profile</Link></li>
                                        <li><a className="dropdown-item" href="#">Refer</a></li>
                                        <li>
                                            {profile.logged === false?
                                            <a className="dropdown-item" style={{cursor:'pointer'}} data-bs-toggle="modal"
                                               data-bs-target="#staticBackdrop">Login</a>:
                                                <a className="dropdown-item" style={{cursor:'pointer'}} onClick={handleLogout}>Logout</a>
                                            }</li>

                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

            </header>
            {/*signin form*/}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1"
                 aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <div className="card border-0 shadow rounded-3 ">
                                <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal"
                                        aria-label="Close" id="loginclose"/>
                                <div className="card-body p-2 p-sm-5">

                                    <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                                    <p className="d-block text-center mt-2 small text-danger" >{props.error}</p>
                                    <p className="d-block text-center mt-2 small text-danger" >{error}</p>
                                    <div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" value={emailInput} id="floatingInput"
                                                   placeholder="name@example.com" onInput={e => setEmailInput(e.target.value)} />
                                            <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword"
                                                   placeholder="Password" value={passInput} onInput={e => setPassInput(e.target.value)} />
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>


                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-login text-uppercase fw-bold mt-2"
                                                    type="submit" disabled={props.isDisabled} onClick={handleLogin}>Sign
                                                in
                                            </button>
                                            <a className="d-block text-center mt-2 small text-dark" href="/signup">Don't have account? Sign Up</a>

                                        </div>
                                        <hr className="my-4"/>
                                        <div className="d-grid mb-2">
                                            <button className="btn btn-google btn-login text-uppercase fw-bold"
                                                     onClick={signInWithGoogle} disabled={props.isDisabled}>
                                                <i className="fab fa-google me-2"></i> Sign in with Google
                                            </button>
                                        </div>
                                        <div className="d-grid">
                                            <button
                                                className="btn btn-facebook btn-login text-uppercase fw-bold"
                                                onClick={signInWithFacebook} disabled={props.isDisabled}>
                                                <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/*signin form*/}

        </>

    );
}

export default Header;