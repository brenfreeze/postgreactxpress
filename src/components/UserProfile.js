import React from 'react';
import {TextEditable} from './Editables';

export class UserProfile extends React.Component{
    constructor(props){
        super(props);
    }

	render() {
		return (
			<div className="user-profile">
                <div className="user-img">
                </div>
                <TextEditable toInput="true" controlName="user_name" edClass="h1-editable" textType="heading" hClass="user-name" value={this.props.user.user_name} handleChange={this.props.userEdit} />
                <TextEditable toInput="false" controlName="user_age" textType="text" pClass="user-age" value={(this.props.user.user_age) + " years old"} />
                <div className="user-actions-container">
                    <button className="user-action">Edit</button>
                    <button className="user-action">Delete</button>
                </div>
            </div>
		)
	}
}