import React, { Component } from 'react';

import { connect } from 'react-redux';
import {  getVideo, onSearchInput  } from '../actions'

class SearchBar extends Component {

    

    onInputChange = (e) =>{

        this.props.onSearchInput(e.target.value)

    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.getVideo(this.props.searchTerm)
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
                            value={this.props.searchTerm}
                            onChange = {this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       searchTerm:state.searchTerm
    }
}

export default connect( mapStateToProps, { getVideo, onSearchInput })(SearchBar);
