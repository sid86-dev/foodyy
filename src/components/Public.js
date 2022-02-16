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

function Public(props) {
    // get url params
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query")

    const data = {
        "SPOONACULAR_API_KEY": "8caf40bd938d42a3a4a4042be2b8d397",
    }
    const homeComponent = <Home banner={props.banner} bg1={props.bg1}/>;
    const ResultComponent = <Results query={query} data={data}/>;



    return (
        <div className="publicContent">
            <Header Appname="Foodyy" logo={props.logo} signInMethods={props.signInMethods}/>
            <Routes>
                <Route path="/" element={homeComponent}></Route>
                <Route path="/search" element={ResultComponent}>
                </Route>
            </Routes>
            <Footer Appname="Foodyy" logo={props.logo}/>
        </div>
    );
}

export default Public;
