import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NewsList from './NewsList';

class NavBar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
		    		<div className="navbar-brand">Not HackerNews</div>
		    		<Link to="/" >new</Link> |
		    		<Link to="/comments" >comments</Link> |
		    		show |
		    		ask |
		    		jobs
		    	</nav>
		    	<NewsList/ >
		    </div>
		);
	}
}

export default NavBar;
