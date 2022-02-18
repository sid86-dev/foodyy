import React from 'react';
import {useLocation} from 'react-router-dom'
import uuid from 'react-uuid'


function Details(props) {
    window.scrollTo(0, 0)
    const location = useLocation()
    const {from} = location.state
    const recipe = from;

    let totalNutrients = recipe.totalNutrients;
    let arr = []
    for (const key in totalNutrients) {
        arr.push(key);
    }
    ;


    return (
        <main className="container ">
            <div className="p-3 p-md-5 mt-4 mb-4 text-white rounded bg-dark">
                <div className="row">
                    <div className="col-md-4 px-0 d-flex justify-content-center">
                        <img src={recipe.image} className="img-fluid w-70 rounded-3"/>
                    </div>
                    <div className="col-md-7 px-0 ">
                        <h3 className="display-4 mt-2 fst-italic text-center">{recipe.label}</h3>
                        {recipe.healthLabels.map(label => {
                            return <span key={uuid()} className="badge bg-danger mx-3 my-2 ">
                                 {label}
            </span>
                        })
                        }


                    </div>
                </div>
            </div>


            <div className="row g-5">
                <div className="col-md-8">

                    <article className="blog-post">
                        <h2 className="blog-post-title my-2">Ingredients</h2>
                        <ul>
                            {recipe.ingredientLines.map(line => {
                                return <li className="blog-post-meta lh-lg" key={uuid()}>{line}</li>;
                            })}
                        </ul>


                    </article>
                    <hr/>

                    <article className="blog-post">

                        <h3>Nutrients table</h3>
                        <p>(TotalNutrients)</p>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Label</th>
                                <th>Quantity</th>
                            </tr>
                            </thead>
                            <tbody>

                            {
                                arr.map(val => {
                                    return (<tr>
                                        <td>{totalNutrients[val].label}</td>
                                        <td>{`${totalNutrients[val].quantity} ${totalNutrients[val].unit}`}</td>
                                    </tr>);
                                })
                            }


                            </tbody>

                        </table>


                    </article>


                </div>

                <div className="col-md-4">
                    <div className="position-sticky" style={{top: '2rem'}}>
                        <div className="p-4 mb-3 bg-light rounded">
                            <h4 className="fst-italic">About</h4>
                            <p className="mb-0">Customize this section to tell your visitors a little bit about your
                                publication, writers, content, or something else entirely. Totally up to you.</p>
                        </div>

                        <div className="p-4">
                            <h4 className="fst-italic">Info</h4>
                            <ol className="list-unstyled mb-0">
                                <li>Cuisine - {recipe.cuisineType}</li>
                                <li>Meal - {recipe.mealType}</li>
                                <li>Calories - {recipe.calories}</li>
                                <li>Dish - {recipe.dishType}</li>
                                <li>Source - <a href={recipe.url}>{recipe.source}</a></li>

                            </ol>
                        </div>

                        <div className="p-4">
                            <h4 className="fst-italic">Share</h4>
                            <ol className="list-unstyled">
                                <li><a href="#">Whatsapp</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Facebook</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Details;