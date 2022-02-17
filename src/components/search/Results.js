import React,{useEffect, useState} from "react";
import ResultItem from "./ResultItem";
import Axios from 'axios';

function Results(props) {

        const [recipes, setRecipes ] = useState([]);
        const [dataisLoaded, setDataisLoaded ] = useState(false);

        let api_key = props.data.EDANAM_APIKEY;
        let api_id = props.data.EDANAM_APIID;

        const url = `https://api.edamam.com/search?q=${props.query}&app_id=${api_id}&app_key=${api_key}`

        useEffect(()=>{
            const getData = async ()=>{
                const res =  await Axios.get(url);
                setRecipes(res.data.hits);
                setDataisLoaded(true);
            };
            getData();
        },[]);

        if (!dataisLoaded) return <div className="d-flex justify-content-center " style={{height:"80vh"}}>
            <div className="loader my-auto">
                <div className="loader-wheel"></div>
                <div className="loader-text"></div>
            </div></div>;

        return (

            <div className="container">
                <div className="row ng-scope">
                    {/*filter bar*/}
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample"
                         aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Advance Search</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"/>
                        </div>
                        <div className="offcanvas-body">
                            <form className="row">
                                <div className="col-md-12">
                                    <label htmlFor="inputState" className="form-label">Diet</label>
                                    <select id="inputState" className="form-select">
                                        <option defaultValue>Choose...</option>
                                        <option value="Vegetarian">Vegetarian</option>
                                        <option value="Paleo">Paleo</option>
                                        <option value="Gluten Free">Gluten Free</option>
                                        <option value="Ketogenic">Ketogenic</option>
                                        <option value="Vegan">Vegan</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputState" className="form-label">Cuisine</label>
                                    <select id="inputState" className="form-select">
                                        <option defaultValue>Choose...</option>
                                        <option value="Vegetarian">Vegetarian</option>
                                        <option value="Paleo">Paleo</option>
                                        <option value="Gluten Free">Gluten Free</option>
                                        <option value="Ketogenic">Ketogenic</option>
                                        <option value="Vegan">Vegan</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputState" className="form-label">Intolerances</label>
                                    <select id="inputState" className="form-select">
                                        <option defaultValue>Choose...</option>
                                        <option value="Vegetarian">Vegetarian</option>
                                        <option value="Paleo">Paleo</option>
                                        <option value="Gluten Free">Gluten Free</option>
                                        <option value="Ketogenic">Ketogenic</option>
                                        <option value="Vegan">Vegan</option>
                                    </select>
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="inputState" className="form-label">Type</label>
                                    <select id="inputState" className="form-select">
                                        <option defaultValue>Choose...</option>
                                        <option value="Vegetarian">Vegetarian</option>
                                        <option value="Paleo">Paleo</option>
                                        <option value="Gluten Free">Gluten Free</option>
                                        <option value="Ketogenic">Ketogenic</option>
                                        <option value="Vegan">Vegan</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputState" className="form-label">Diet</label>
                                    <select id="inputState" className="form-select">
                                        <option defaultValue>Choose...</option>
                                        <option value="Vegetarian">Vegetarian</option>
                                        <option value="Paleo">Paleo</option>
                                        <option value="Gluten Free">Gluten Free</option>
                                        <option value="Ketogenic">Ketogenic</option>
                                        <option value="Vegan">Vegan</option>
                                    </select>
                                </div>
                                <div className="col-md-12 align-self-center justify-content-center">
                                    <button className="btn btn-secondary my-4 " type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseExample" aria-expanded="false"
                                            aria-controls="collapseExample">
                                        Nutrients
                                    </button>
                                </div>
                                <div className="col-12">
                                    <div className="collapse" id="collapseExample">
                                        <div className="card card-body">
                                            Some placeholder content for the collapse component. This panel is hidden by
                                            default but
                                            revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-dark my-3">Save Filter</button>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="row my-3 ">
                        <div className="col-md-6">
                            {/*<p className="search-results-count">About {items.totalResults} results</p>*/}
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-dark " style={{float: 'right'}} type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                Advance Search <i className="bi bi-funnel"></i>
                            </button>
                        </div>
                    </div>
                    <div className="container">
                        <div className="card-group vgr-cards">
                            {
                                recipes.results !== [] ?
                                    recipes.map((item) => (
                                    <ResultItem key={item.recipe.uri} item={item}/>
                                )):

                                    <h1 className="my-5 mx-auto" style={{height:'36vh'}}>No result found</h1>
                            }

                        </div>
                    </div>
                </div>
            </div>

        );

};

export default Results;