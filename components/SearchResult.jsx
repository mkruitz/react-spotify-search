import React from 'react';

export default class SearchResult extends React.Component {
    render() {
        const { name, images } = this.props.album;
        return (
            <div>
                <img src={images[0].url} />
                <span>{name}</span>
            </div>
        );
    }
}