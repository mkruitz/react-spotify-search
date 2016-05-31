import React from 'react';

import Search from './Search.jsx';
import SearchResult from './SearchResult.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };

        this.changeQuery = this.changeQuery.bind(this);

        this.search = this.search.bind(this);
    }

    changeQuery(event) {
        this.setState({
            query: event.target.value
        });
    }

    search() {
        this.props.store.dispatch({
            action: 'SEARCH',
            query: this.state.query
        })
    }

    render() {
        const { store } = this.props;
        const { albums } = store.getState();
        console.log('store', store.getState());

        return (
            <div>
                <Search store={store} />
                { albums.map((a, n) => <SearchResult key={n} album={a} /> ) }
            </div>
        );
    }
}