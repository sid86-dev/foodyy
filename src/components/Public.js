import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import ResultPage from "./search/ResultPage";
import {
    Route,
    Routes,

} from "react-router-dom";
import Details from "./search/Details";
import {QueryClientProvider, QueryClient} from "react-query"

function Public(props) {

    const queryClient = new QueryClient();

    const homeComponent = <Home banner={props.banner} bg1={props.bg1}/>;
    const ResultComponent = <ResultPage/>;

    return (
        <QueryClientProvider client={queryClient}>
        <div className="publicContent">
            <Header Appname="Foodyy" logo={props.logo}  signInMethods={props.signInMethods}/>
            <Routes>
                <Route path="/item-details/:id" element={<Details/>}/>
                <Route/>
                <Route path="/" element={homeComponent}></Route>
                <Route path="/search" element={<ResultPage/>}>
                </Route>
            </Routes>
            <Footer Appname="Foodyy" logo={props.logo}/>
        </div>
        </QueryClientProvider>
    );
}

export default Public;
