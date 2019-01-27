import React from 'react';
import NavBar from './Navbar';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import NewsList from './News/NewsList';
import AskList from './Ask/AskList';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Router history={history}>
                    <div>
                        <NavBar />
                        <Route path="/" exact component={NewsList} />
                        <Route path="/ask" exact component={AskList} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
