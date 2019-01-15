import React from 'react';
import { connect } from 'react-redux';
import { fetchNewsAndId } from '../actions';

class NewsList extends React.Component {
    componentDidMount() {
        this.props.fetchNewsAndId();
        console.log(this.props.news);
    }

    render() {
        return (
            <div>
                NewsList
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        newsList: state.news
    };
};

export default connect(mapStateToProps, { fetchNewsAndId: fetchNewsAndId })(NewsList);
