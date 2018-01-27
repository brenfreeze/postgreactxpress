import React from 'react';
import {TextEditable} from './Editables';
import axios from 'axios';

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
        this.setState(prev => {
            return {
                toInput: this.state.toggler % 2 === 0 ? "true" : "false",
                toggler: prev.toggler + 1
            }
        });

        if(this.state.toInput === "true"){
            axios.put('/users', this.props.user)
                .then(res => {
                    this.props.users();
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    render() {
        return (
            <div className="user-profile">
                <div className="user-img">
                </div>
                <TextEditable toInput={this.state.toInput} controlName="user_name" edClass="h1-editable" textType="heading" hClass="user-name" value={this.props.user.user_name} handleChange={this.props.userEdit} />
                <span className="inline"><TextEditable toInput={this.state.toInput} controlName="user_age" edClass="p-editable" textType="text" pClass="user-age" value={this.props.user.user_age} handleChange={this.props.userEdit} /><p className="user-age ml"> years old</p></span>

                <div className="user-actions-container">
                    <button className="user-action" onClick={this.changeToInput}>{this.state.toInput === "true" ? "Save" : "Edit"}</button>
                    <button className="user-action">Delete</button>
                </div>
            </div>
        )
    }
}
