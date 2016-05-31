import React from 'react';

export default class Search extends React.Component {
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
        const store = this.props.store;
        store.dispatch({
            action: 'SEARCH',
            query: this.state.query,
            callback: function(results) {
                console.log('results', results);
                store.dispatch({
                    action: 'SET_RESULTS',
                    albums: JSON.parse(results).albums.items
                });
            }
        });
    }

    render() {
        const { query } = this.state;
        return (
            <form>
                <input type="text" id="query" value={query} class="form-control" onChange={this.changeQuery} />
                <input type="button" id="search" class="btn btn-primary" value="Search" onClick={this.search} />
            </form>
        );
    }
}