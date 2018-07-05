import React from 'react';
import './search-bar.less';
import {Route} from 'react-router-dom';

// handleOnChange()

const SearchBar = (props) => {
	return (
		<header className="app-header">
			<div className="search-bar">
			 <input
			 type="text"
			 value={props.search}
			 placeholder="Search .."
			 onChange={props.handleOnChange}
			 onKeyPress={props.handleOnKeyPress}
			 />
			</div>
			<div className="button-holder">
			 <button type="button" onClick={props.handleOnSearchSubmit}>Search</button>
			</div>
		</header>
	)
};


export default SearchBar;