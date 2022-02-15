import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDg2E6zNLyzZfUxcCmzo-oSl9eVm3Ebez4",
    authDomain: "linklerz.firebaseapp.com",
    databaseURL: "https://linklerz-default-rtdb.firebaseio.com",
    projectId: "linklerz",
    storageBucket: "linklerz.appspot.com",
    messagingSenderId: "444031956121",
    appId: "1:444031956121:web:b790a972274682b817f408",
    measurementId: "G-30ECND09EV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const authentication = getAuth(app);
export default authentication;