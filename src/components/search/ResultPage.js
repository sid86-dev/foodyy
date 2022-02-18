import React, {useEffect, useState} from "react";
import ResultItem from "./ResultItem";
import {useSearchParams} from "react-router-dom";
import useRecipes from "./useRecipes";

function Results(props) {

    // get url params
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    const res = useRecipes(query!=''?query:'');
    console.log(res);

    if (res.isLoading) {
        return (<div className="d-flex justify-content-center " style={{height: "80vh"}}>
                <div className="loader my-auto">
                    <div className="loader-wheel"></div>
                    <div className="loader-text"></div>
                </div>
            </div>
        );
    } else if (res.isSuccess) {
        const recipes = res.data.data;
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
                                    <label htmlFor="diet" className="form-label">Diet</label>
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
                                    <label htmlFor="cuisine" className="form-label">Cuisine</label>
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
                                    <label htmlFor="Intolerence" className="form-label">Intolerances</label>
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
                                    <label htmlFor="type" className="form-label">Type</label>
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
                                    <label htmlFor="diet" className="form-label">Diet</label>
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
                            <p className="search-results-count">Showing {recipes.to} results</p>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-dark " style={{float: 'right'}} type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                Advance Search <i className="bi bi-funnel"></i>
                            </button>
                        </div>
                    </div>
                    <div className="container p-4 rounded" style={{backgroundColor:'rgb(249,249,249)'}}>
                        <div className="card-group vgr-cards">
                            {
                                recipes.q !== '' ?
                                    recipes.hits.map((item) => (
                                        <ResultItem key={item.recipe.uri} item={item}/>
                                    )) :

                                    <h1 className="my-5 mx-auto" style={{height: '36vh'}}>No result found</h1>
                            }

                        </div>
                    </div>
                </div>
            </div>

        );
    } else {
        return (<h1 className="my-5 mx-auto" style={{height: '36vh'}}>No result found</h1>);
    }
};

export default Results;