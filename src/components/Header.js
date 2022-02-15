import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import {
    Link
} from "react-router-dom";


function Header(props) {
    const [input, setInput] = useState(''); // '' is the initial state value
    const moonIcon = <i className="fa-solid fa-moon"></i>
    const searchIcon = <svg style={{color:'black'}}
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
        className="bi bi-search" viewBox="0 0 16 16">
        <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>

    return (
        <header className="section-header fixed-top">

            <section className="header-main border-bottom bg-white">
                <div className="container-fluid">
                    <div className="row p-2 pt-3 pb-3 d-flex align-items-center">

                        <div className="col-md-2"><Link to="/">
                            <img className="d-none d-md-flex"
                                 src={props.logo} width="130"/> </Link>
                        </div>

                        <div className="col-md-6 mx-auto">
                            <div className="d-flex form-inputs">
                                <div className="input-group">

                                    <input className="form-control" value={input} type="text" onInput={e => setInput(e.target.value)} type="text"
                                                                    placeholder="Search "/>
                                    <div className="input-group-text" id="navSearch" area-hidden='true'>

                                        <Link to={`/search?query=${input}`}>
                                        <span>{searchIcon}</span>
                                        </Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="d-flex d-none d-md-flex flex-row justify-content-end">
                                <img
                                    src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
                                    id="profile-pic"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid"><Link className="navbar-brand d-md-none d-md-flex" to="/"><img
                    className="img-fluid"
                    src={props.logo} width="130"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link active" aria-current="page"
                                                        href="#">Recipes</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Health</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Daily Feed</a></li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#"
                                                                 id="navbarDropdownMenuLink" role="button"
                                                                 data-bs-toggle="dropdown"
                                                                 aria-expanded="false"> Account </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Refer</a></li>
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Header;