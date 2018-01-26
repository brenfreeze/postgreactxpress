import React from 'react';
import {TextEditable} from './Editables';

export class UserProfile extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            toInput: "false",
            toggler: 0
        };

        this.changeToInput = this.changeToInput.bind(this);
    }

    changeToInput(){
        if(this.state.toggler % 2 === 0){
            this.setState({
                toInput: "true"
            });
        } else {
            this.setState({
                toInput: "false"
            });
        }

        this.setState(prev => {
            return { toggler: prev.toggler + 1 }
        });
    }

	render() {
		return (
			<div className="user-profile">
                <div className="user-img">
                </div>
                <TextEditable toInput={this.state.toInput} controlName="user_name" edClass="h1-editable" textType="heading" hClass="user-name" value={this.props.user.user_name} handleChange={this.props.userEdit} />
                <TextEditable toInput={this.state.toInput} controlName="user_age" edClass="p-editable" textType="text" pClass="user-age" value={(this.props.user.user_age) + " years old"} handleChange={this.props.userEdit} />
                <div className="user-actions-container">
                    <button className="user-action" onClick={this.changeToInput}>Edit</button>
                    <button className="user-action">Delete</button>
                </div>
            </div>
		)
	}
}