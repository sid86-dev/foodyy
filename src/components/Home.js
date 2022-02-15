import React,{useState} from 'react';
import {
    Link
} from "react-router-dom";

function Home(props) {
    const BreakfastUrl = "https://images.unsplash.com/photo-1554795808-3231c32711cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    const LunchUrl = "https://images.unsplash.com/photo-1551326844-58f5b65b33f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    const DinnerUrl = "https://images.unsplash.com/photo-1560487765-67095b892dd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"

    const [input, setInput] = useState(''); // '' is the initial state value

    return (
        <>
            <div className="container-fluid" id="index-banner" style={{backgroundImage: `url(${props.banner})`}}>
                <div className="container">
                    <div className="row height d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div className="form"><i className="fa fa-microphone"></i>
                                <input value={input} type="text" onInput={e => setInput(e.target.value)} className="form-control form-input"
                                       placeholder="Search food, recipe ..."/>
                                <Link to={`/search?query=${input}`}><span className="left-pan"><i
                                    className="fa fa-search"></i></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="album py-5" style={{backgroundImage: `url('${props.bg1}')`}}>
                <div className="container">
                    <h6>the process of our service</h6>
                    <h1 className="mb-4">Search by food category</h1>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        <div className="col">
                            <div className="card shadow-sm" style={{width: '100%', height: '23rem'}}>
                                <div className="card-body category-card d-flex justify-content-center"
                                     style={{backgroundImage: `url(${BreakfastUrl})`, verticalAlign: 'middle'}}>
                                    <div className="align-self-center"><h1 className="cardText"> Breakfast Recipe </h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm" style={{width: '100%', height: '23rem'}}>
                                <div className="card-body category-card d-flex justify-content-center"
                                     style={{backgroundImage: `url(${LunchUrl})`, verticalAlign: 'middle'}}>
                                    <div className="align-self-center"><h1 className="cardText"> Lunch Recipe </h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm" style={{width: '100%', height: '23rem'}}>
                                <div className="card-body category-card d-flex justify-content-center"
                                     style={{backgroundImage: `url(${DinnerUrl})`, verticalAlign: 'middle'}}>
                                    <div className="align-self-center"><h1 className="cardText"> Dinner Recipe </h1>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;