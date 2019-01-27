import React from 'react';
import { connect } from 'react-redux';
import { fetchNewsAndId } from '../actions';
import 'bootstrap/dist/css/bootstrap.css';
import News from './News';

class NewsList extends React.Component {
    componentDidMount() {
        this.props.fetchNewsAndId();
    }

    renderAllNews() {
        return this.props.news.map(news => {
            return (
                <News key={news.id} news={news} />
            );
        });
    }

    render() {
        if (this.props.news.length === 0) {
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
                    {this.renderAllNews()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.news
    };
};

export default connect(mapStateToProps, { fetchNewsAndId: fetchNewsAndId })(NewsList);
