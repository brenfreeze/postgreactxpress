import React from 'react';
import {TextEditable} from './Editables';

export class UserProfile extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            toInput: "false",
            ct: 0
        }

        this.makeEditable = this.makeEditable.bind(this);
    }

    makeEditable(){
        if(this.state.ct % 2 === 0){
            this.setState({
                toInput: "true"
            })   
        } else {
            this.setState({
                toInput: "false"
            })
        }

        this.setState(prev => {
            return {ct: prev.ct + 1}
        })
    }

	render() {
		return (
			<div className="user-profile">
                <div className="user-img">
                </div>
                <TextEditable toInput={this.state.toInput} controlName="user_name" edClass="h1-editable" textType="heading" hClass="user-name" value={this.props.user.user_name} handleChange={this.props.userEdit} />
                <TextEditable toInput="false" controlName="user_age" textType="text" pClass="user-age" value={(this.props.user.user_age) + " years old"} />
                <div className="user-actions-container">
                    <button className="user-action" onClick={this.makeEditable}>Edit</button>
                    <button className="user-action">Delete</button>
                </div>
            </div>
		)
	}
}