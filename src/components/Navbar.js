import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class NavBar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
		    		<div className="navbar-brand">Not HackerNews</div>
		    		<Link to="/" >
		    			new
		    		</Link> |
		    		comments|
		    		show |
		    		<Link to="/ask" >ask</Link> |
		    		jobs
		    	</nav>
		    </div>
		);
	}
}

export default NavBar;
