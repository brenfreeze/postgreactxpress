import React from 'react';

export class TopBar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="top-bar">
                <div className="top-picture">
                </div>
                <div className="top-search-bar">
                    <input type="search" name="search" id="search" placeholder="Search" />
                </div>
                <div className="top-add-button">
                    <button className="user-action small" href="#" onClick={this.props.openModal}>+</button>
                </div>
            </div>
        )
    }
}