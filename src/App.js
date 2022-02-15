import banner from './assets/bg/bg3.jpg';
import bg1 from './assets/bg/bg4.jpg';
import logo from "./assets/foodyy-logo.png"
import './App.css';
import {useState} from "react";
import Public from './components/Public.js'
import {useLocation} from 'react-router-dom'
import Login from "./components/auth/Login";
import authentication from "./config/forebase-config";
import {signInWithPopup, GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth";
import axios from 'axios-react'

function App() {
    const [userData, setUserdata] = useState('')

    const loginUrl = "https://food-yy.herokuapp.com/auth/v1/login"

    let handleLogin = (loginData) => {
        const data = loginData._tokenResponse
        fetch(loginUrl, {
            method: "POST",
            body: JSON.stringify(data),
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
                    console.log(data);
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
    if (location.pathname.match(/login/)) {
        return (
            <Login/>
        );
    }
    return (
        <div className="App">
            <Public banner={banner} bg1={bg1} logo={logo} signInMethods={signInMethods}/>
        </div>
    );
}

export default App;
