import React from 'react';
import './Search.css'

function Search() {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between container-fluid">
            <form className="form-inline mx-auto">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
        </nav>
    )
};

export default Search;