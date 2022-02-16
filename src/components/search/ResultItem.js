import React,{useState, useEffect} from 'react';
import {
    Route,
    Routes,
    Link
} from "react-router-dom";
import Details from "./Details";

function ResultItem(props) {
    const  item = props.item;
    const [itemDetails, setItemDetails] = useState('');

    let fn = (text, count)=>{
        return text.slice(0, count) + (text.length > count ? " . . ." : "");
    }

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.idMeal}`;
    fetch(
        url)
        .then((res) => res.json())
        .then((json) => {
            setItemDetails(json);
            const itemTitle = json.meals[0].strInstructions;
            let title = fn(itemTitle,300)
            const cardText = document.getElementById(item.idMeal);
            cardText.innerText = title;
        }).catch(err => {
        console.error(err)});



    return (

        <div className="card my-4 shadow-sm">
            <div className="card-img-body">
                <img className="card-img" src={item.strMealThumb} alt="Card image cap" />
            </div>
            <div className="card-body">
                <h4 className="card-title">{item.strMeal}</h4>
                <p className="card-text" id={item.idMeal}></p>

               <Link to={`/item-details/${item.idMeal}`}>
                <button type="button" id="animatebutton" className="custom-btn btn-warning btn-icon-text animatebutton">
                     More <span className="fs-5 mx-1"><i className="bi bi-arrow-right-circle"></i></span>
                </button></Link>
            </div>

        </div>

    );
}

export default ResultItem;