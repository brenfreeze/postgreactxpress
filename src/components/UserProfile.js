import React from 'react';

export class UserProfile extends React.Component{
    constructor(props){
        super(props);
    }

	render() {
		return (
			<div className="user-profile">
                <div className="user-img">
                </div>
                <h1 className="user-name">
                    {this.props.user.user_name}
                </h1>
                <p className="user-age">{this.props.user.user_age} years old</p>
                <div className="user-actions-container">
                    <button className="user-action">Edit</button>
                    <button className="user-action">Delete</button>
                </div>
            </div>
		)
	}
}