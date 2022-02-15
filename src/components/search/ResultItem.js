import React from 'react';

function ResultItem(props) {
    const  item = props.item;
    return (
        <div className="card my-4 shadow-sm">
            <div className="card-img-body">
                <img className="card-img" src={item.image} alt="Card image cap" />
            </div>
            <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer. This is a wider card with supporting text
                    below as a natural lead-in to additional content. This content is a little
                    bit longer.</p>
                <button type="button" id="animatebutton" className="custom-btn btn-warning btn-icon-text animatebutton">
                     More <span className="fs-5 mx-1"><i className="bi bi-arrow-right-circle"></i></span>
                </button>
            </div>
        </div>
    );
}

export default ResultItem;