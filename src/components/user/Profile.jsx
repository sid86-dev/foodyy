import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";


function Profile(props) {
    const [error, setError] = useState('');

    const location = useLocation()
    const {from} = location.state
    const userData = from;
    const deleteUrl = "https://food-yy.herokuapp.com/user/delete"
    // const deleteUrl = "http://127.0.0.1:5000/user/delete"
    const [input, setInput] = useState(''); // '' is the initial state value
    const [verify, setVerify] = useState(''); // '' is the initial state value

    const rnd = (() => {
        const gen = (min, max) => max++ && [...Array(max-min)].map((s, i) => String.fromCharCode(min+i));

        const sets = {
            num: gen(48,57),
            alphaLower: gen(97,122),
            alphaUpper: gen(65,90),
        };

        function* iter(len, set) {
            if (set.length < 1) set = Object.values(sets).flat();
            for (let i = 0; i < len; i++) yield set[Math.random() * set.length|0]
        }

        return Object.assign(((len, ...set) => [...iter(len, set.flat())].join('')), sets);
    })();

    useEffect(()=>{
        setVerify(rnd(6))
    },[]);

    let handleDelete = (loginData) => {
        if (verify !== input){
            setError('Code does not match');
        }
        else{
            const token = localStorage.getItem('token')
            setError('')
            fetch(deleteUrl, {
                method: "POST",
                body: JSON.stringify(token),
                cache: "no-cache",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                if (response.status !== 200) {
                    console.log("Response Status was not 200");
                    return;
                }

                response.json().then(function (data) {
                    if (data.status === 'success') {
                        localStorage.removeItem('token');
                        window.location.replace('/');
                    }
                    else if(data.status === 'failed'){
                        setError('Something went wrong');
                    }
                    else{
                        setError('Session expired,try login again');
                    }

                }).catch((err)=>{
                    setError('Session expired,try login again');
                })
            });
        }

    };

    return (
        <div className="container-fluid">
            <div className="container bootstrap snippets bootdey my-3 ">
                <div className="row">
                    <div className="profile-nav col-md-3">
                        <div className="panel">
                            <div className="user-heading round">
                                <a href="#">
                                    <img src={userData.profilePic} alt=""/>
                                </a>
                                <h1>{userData.name}</h1>
                                <p>{userData.email}</p>
                            </div>

                            <ul className="nav nav-pills nav-stacked">

                                <li><a href="#"> <i className="fa fa-edit"></i> Edit profile</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="profile-info col-md-9 my-5">

                        <div className="panel">

                            <div className="panel-body bio-graph-info">
                                <h1 className="text-decoration-underline">Hi {userData.name} !</h1>
                                <div className="row">
                                    <div className="col-md-6 my-2">
                                        <p><span>Name </span>: {userData.name}</p>
                                    </div>


                                    <div className="col-md-6 my-2">
                                        <p><span>Email </span>: {userData.email}</p>
                                    </div>
                                    <div className="col-md-6 my-2">
                                        <p><span>Plan </span>: {userData.plan}</p>
                                    </div>
                                    <div className="col-md-6 my-2">
                                        <p><span>Subscribe </span>: {userData.subscription === true ? <button className="btn btn-success">Yes</button> : <button className="btn btn-danger">NO</button>} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div>*/}
                        {/*    <div className="row">*/}

                        {/*        <div className="col-md-6">*/}
                        {/*            <div className="panel">*/}
                        {/*                <div className="panel-body">*/}
                        {/*                    <div className="bio-chart">*/}
                        {/*                        <div style={{display:'inline',width:'100px',height:'100px'}}>*/}
                        {/*                            <canvas width="100" height="100px"></canvas>*/}
                        {/*                            <input className="knob customInput" data-width="100" data-height="100"*/}
                        {/*                                   data-displayprevious="true" data-thickness=".2" value="75"*/}
                        {/*                                   data-fgcolor="#96be4b" data-bgcolor="#e8e8e8"*/}
                        {/*                                  />*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="bio-desk">*/}
                        {/*                        <h4 className="green">VectorLab Portfolio</h4>*/}
                        {/*                        <p>Started : 15 July</p>*/}
                        {/*                        <p>Deadline : 15 August</p>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="col-md-6">*/}
                        {/*            <div className="panel">*/}
                        {/*                <div className="panel-body">*/}
                        {/*                    <div className="bio-chart">*/}
                        {/*                        <div style={{display:'inline',width:'100px',height:'100px'}}>*/}
                        {/*                            <canvas width="100" height="100px"></canvas>*/}
                        {/*                            <input className="knob customInput" data-width="100" data-height="100"*/}
                        {/*                                   data-displayprevious="true" data-thickness=".2" value="50"*/}
                        {/*                                   data-fgcolor="#cba4db" data-bgcolor="#e8e8e8"*/}
                        {/*                              />*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="bio-desk">*/}
                        {/*                        <h4 className="purple">Adobe Muse Template</h4>*/}
                        {/*                        <p>Started : 15 July</p>*/}
                        {/*                        <p>Deadline : 15 August</p>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                </div>

            </div>
            <div className="col-md-6 d-flex container justify-content-center py-1 mt-5 rounded-3"
                 style={{border: '2px solid red'}}>

                <div className='row'>

                    <div className="col-md-12 d-flex justify-content-center">
                        <p className="text-center text-danger">{error}</p>

                    </div><div className="col-md-12 d-flex justify-content-center">

                        <p>Delete your account</p>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center">
                        <button className="btn btn-danger my-3" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Delete Account
                        </button>

                    </div>
                    <div className="collapse " id="collapseExample">
                        <div className="card card-body">
                            <p className="text-center font-monospace">Type
                                <span className="mx-2 px-3 py-1 bg-secondary rounded text-white ">{verify}</span>below</p>
                            <div className="input-group mb-3 ">
                                <input type="text" className="form-control font-monospace" placeholder={verify}
                                       aria-label="Recipient's username" aria-describedby="button-addon2" value={input} onInput={e => setInput(e.target.value)}/>
                                    <button className="btn btn-outline-danger" type="button"
                                            id="button-addon2" onClick={handleDelete}>Submit
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Profile;