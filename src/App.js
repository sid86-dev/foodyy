import banner from './assets/bg/bg3.jpg';
import bg1 from './assets/bg/bg4.jpg';
import logo from "./assets/foodyy-logo.png"
import {useState} from "react";
import Public from './components/Public.js'
import {useLocation} from 'react-router-dom'
import Signup from "./components/auth/Signup";
import authentication from "./config/forebase-config";
import {signInWithPopup, GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth";
// css
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
// js
import 'bootstrap/dist/js/bootstrap'

function App() {
    const [error, setError] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    const loginUrl = "https://food-yy.herokuapp.com/auth/v1/socialLogin"
    // const loginUrl = "http://127.0.0.1:5000/auth/v1/socialLogin"

    let handleLogin = (loginData) => {
        setError('')
        const data = loginData._tokenResponse
        setIsDisabled(true);
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
                        setIsDisabled(false);
                    }
                    else{
                        setError('Something went wrong');
                        setIsDisabled(false);
                    }

                })
            })
    };

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider).then((re) => {
            handleLogin(re);
        }).catch((err) => {
            handleLogin(err);
        })
    };

    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(authentication, provider).then((re) => {
            handleLogin(re);
        }).catch((err) => {
            handleLogin(err);
        })
    };

    const signInMethods = {'google': signInWithGoogle, 'facebook': signInWithFacebook}

    let location = useLocation();
    if (location.pathname.match(/signup/)) {
        return (
            <Signup logo={logo}/>
        );
    }
    return (
        <div className="App">
            <Public banner={banner} bg1={bg1} logo={logo} isDisabled={isDisabled} error={error} signInMethods={signInMethods}/>
        </div>
    );
}

export default App;
