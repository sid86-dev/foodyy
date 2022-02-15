import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Results from "./Results";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useSearchParams,
} from "react-router-dom";

function Public(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query")
    const homeComponent = <Home banner={props.banner} bg1={props.bg1}/>;
    const ResultComponent = <Results query={query}/>;
    return (
        <>
            <Header Appname="Foodyy" logo={props.logo}/>
            <Routes>
                <Route path="/" element={homeComponent}></Route>
                <Route path="/search" element={ResultComponent}>
                </Route>
            </Routes>
            <Footer Appname="Foodyy" logo={props.logo}/>
        </>
    );
}

export default Public;