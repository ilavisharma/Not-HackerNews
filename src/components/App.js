import React from 'react';
import NavBar from './Navbar';
import { Router, Route, Switch } from 'react-router-dom';
import NewsList from './NewsList';
import history from '../history';
import CommentsList from './CommentsList';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Router history={history}>
                    <div>
                        <Switch>
                            <NavBar />
                            <Route path="/" exact component={NewsList} />
                            <Route path="/comments" exact component={CommentsList} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
