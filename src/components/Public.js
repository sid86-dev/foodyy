import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Results from "./search/Results";
import {
    Route,
    Routes,
    useSearchParams,
} from "react-router-dom";
import Details from "./search/Details";

function Public(props) {
    // get url params
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query")

    const data = {
        "SPOONACULAR_API_KEY": "4657697774ac42dcbe50bf95b6c4fa02",
        "EDANAM_APIKEY":'f8690f05adb5358ce22d3f987d2129cb',
        "EDANAM_APIID":'6a5c6662',

    }
    const homeComponent = <Home banner={props.banner} bg1={props.bg1}/>;
    const ResultComponent = <Results query={query} data={data}/>;

    return (
        <div className="publicContent">
            <Header Appname="Foodyy" logo={props.logo} query={query} signInMethods={props.signInMethods}/>
            <Routes>
                <Route path="/item-details/:id" element={<Details/>}/>
                <Route/>
                <Route path="/" element={homeComponent}></Route>
                <Route path="/search" element={ResultComponent}>
                </Route>
            </Routes>
            <Footer Appname="Foodyy" logo={props.logo}/>
        </div>
    );
}

export default Public;
