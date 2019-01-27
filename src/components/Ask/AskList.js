import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { fetchAskAndId } from '../../actions';
import Ask from './Ask';

class AskList extends React.Component {
    componentDidMount() {
        this.props.fetchAskAndId();
    }

    renderAllComments() {
        return this.props.asks.map(ask => {
            return (
                <Ask key={ask.id} ask={ask} />
            );
        });
    }

    render() {
        if (this.props.asks.length === 0) {
            return (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
            );
        }
        return (
            <div>
                <ul className="list-group">
                    {this.renderAllComments()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        asks: state.ask
    };
};

export default connect(mapStateToProps, { fetchAskAndId })(AskList);
