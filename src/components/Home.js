import React, {useState, useEffect} from 'react';
import {
    Link
} from "react-router-dom";
import Axios from "axios";

function Home(props) {


    const [input, setInput] = useState(''); // '' is the initial state value
    const [items, setItems] = useState([]);

    useEffect(() => {
        const data = {
            "SPOONACULAR_API_KEY": "4657697774ac42dcbe50bf95b6c4fa02",
            "EDAMAM_APIKEY": '1c4d9352f4588bdeec1aca6f87033fc6',
            "EDAMAM_APIID": '166e00e1',
        }
        const queries = ['chicken', 'beef', 'salad', 'lamb','cake','salad','salmon','fish']
        const fetchData = async (query) => {
            const fromarr = [1,2,3,4,5]
            const from = fromarr[Math.floor(Math.random() * fromarr.length)]
            const url = `https://api.edamam.com/search?q=${query}&app_id=${data.EDAMAM_APIID}&app_key=${data.EDAMAM_APIKEY}&from=${from}&to=${from+12}`
            const res = await Axios.get(url);
            await setItems(res.data.hits);
        };

        fetchData(queries[Math.floor(Math.random() * queries.length)]);


    }, []);

    return (
        <>
            <div className="container-fluid" id="index-banner" style={{backgroundImage: `url(${props.banner})`}}>
                <div className="container">
                    <div className="row height d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div className="form"><i className="fa fa-microphone"></i>
                                <input value={input} type="text" onInput={e => setInput(e.target.value)}
                                       className="form-control form-input"
                                       placeholder="Search by food item..."/>
                                <Link state={{from: input}}
                                      to={input !== '' ? `/search?query=${input}&from=0&to=10` : '/'}><span
                                    className="left-pan"><i
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
                    <h1 className="mb-4">Daily food dose</h1>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {items !== [] && items.map((item) => (
                            <Link to={`/item-details/${item.recipe.label}`} state={{from:item.recipe}}>
                        <div className="col">
                            <div className="card shadow-sm" style={{width: '100%', height: '23rem'}}>
                                <div className="card-body category-card d-flex justify-content-center"
                                     style={{backgroundImage: `url(${item.recipe.image})`, verticalAlign: 'middle'}}>
                                    <div className="align-self-center"><h1 className="cardText"> {item.recipe.label} </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </Link>
                            ))}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;