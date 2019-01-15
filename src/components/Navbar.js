import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NewsList from './NewsList';

const NavBar = props => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
	    		<div className="navbar-brand">Not HackerNews</div>
	    	</nav>
	    	<NewsList/ >
	    </div>
	);
};

export default NavBar;
