import React,{useState, useEffect} from 'react';
import {
    Link
} from "react-router-dom";
// import{v4 as uuidv4} from "uuid";

function ResultItem(props) {
    var recipe = props.item.recipe;
    return (

        <div className="card my-4 shadow-sm">
            <div className="card-img-body">
                <img className="card-img" src={recipe.image} alt="Card image cap" />
            </div>
            <div className="card-body">
                <h4 className="card-title">{recipe.label}</h4>
                <p className="card-text" >
                   This is body  This is bodyThis is bodyThis is bodyThis is bodyThis is bodyThis is bodyThis is bodyThis is body
                    This is bodyThis is bodyThis is bodyThis is bodyThis is bodyThis is bodyThis is bodyThis is body
                    This is bodyThis is bodyThis is bodyThis is bodyThis is bodyThis is bodyThis is body
                    This is bodyThis is bodyThis is bodyThis is bodyThis is bodyThis is bodyThis is body
                </p>

               <Link to={`/item-details/${recipe.label}`}>
                <button type="button" id="animatebutton" className="custom-btn btn-warning btn-icon-text animatebutton">
                     More <span className="fs-5 mx-1"><i className="bi bi-arrow-right-circle"></i></span>
                </button></Link>
            </div>

        </div>

    );
}

export default ResultItem;