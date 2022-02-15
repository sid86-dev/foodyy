import React from "react";
import {Component} from "react";
import ResultItem from "./ResultItem";

class App extends Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }


    // ComponentDidMount is used to
    // execute the code

    componentDidMount() {
        const data = {
            "SPOONACULAR_API_KEY": "4657697774ac42dcbe50bf95b6c4fa02",
        }
        let query = 'chicken';
        const queryNumber = 10;
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${data.SPOONACULAR_API_KEY}&query=${query}&number=${queryNumber}`;
        fetch(
            url)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json['results'],
                    DataisLoaded: true
                });
            })
    }

    render() {

        const {DataisLoaded, items} = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1></div>;

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
                            <p className="search-results-count">About 94 700 000 (0.39 sec.) results</p></div>
                        <div className="col-md-6">
                            <button className="btn btn-primary " style={{float: 'right'}} type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                Advance Search
                            </button>
                        </div>
                    </div>
                    <div className="col-md-12 col-md-pull-3">
                        <div className="App">
                            {
                                items.map((item) => (
                                    <ol key={item.id}>
                                        <ResultItem items={items}/>


                                    </ol>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;