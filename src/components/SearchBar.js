import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        searchTerm:''
    }

    onInputChange = (e) =>{
        this.setState({
            searchTerm: e.target.value
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.searchTerm)
        
    };
    
    render() {
        return (
            <div className = "ui segment">
                <form 
                    onSubmit={this.onFormSubmit}
                    className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            name="vide0-search" 
                            placeholder="Search Video"
                            value={this.state.searchTerm}
                            onChange = {this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
