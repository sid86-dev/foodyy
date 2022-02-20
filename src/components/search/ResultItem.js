import React,{useState, useEffect} from 'react';
import {
    Link
} from "react-router-dom";
import uuid from 'react-uuid'


function ResultItem(props) {
    const recipe = props.item.recipe;

    return (

        <div className="card my-4 shadow-sm bg-white rounded">
            <div className="card-img-body">
                <img className="card-img" src={recipe.image} alt="Card image cap" />
            </div>
            <div className="card-body">
                <h4 className="card-title mb-3">{recipe.label}</h4>
                <div className="card-text" >
                    {recipe.ingredientLines.map(line=>{
                        return recipe.ingredientLines.indexOf(line)<6 && <p className='lead fs-6 lh-1' key={uuid()}>{line}</p>
                    })}
                </div>

               <Link to={`/item-details/${recipe.label}`} state={{from:recipe}}>
                <button type="button" id="animatebutton" className="custom-btn btn-warning btn-icon-text animatebutton">
                     More <span className="fs-5 mx-1"><i className="bi bi-arrow-right-circle"></i></span>
                </button></Link>
            </div>

        </div>

    );
}

export default ResultItem;