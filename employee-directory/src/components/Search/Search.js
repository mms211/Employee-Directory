import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
    constructor(props) {
        super (props)
        this.state = {
            search: ""
        }
    };

    updateSearch = (event) => {
        this.setState({search: event.target.value});
    }

    render = () => {
        return (
            <nav className="navbar navbar-light bg-light justify-content-between container-fluid">
                <form className="form-inline mx-auto">
                    <input className="form-control mr-sm-2" 
                        value={this.state.search} 
                        onChange={this.updateSearch}
                        type="text" 
                        placeholder="Search" 
                        aria-label="Search" />
                </form>
            </nav>
        )
    } 
};

export default Search;