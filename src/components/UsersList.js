import React from 'react';

export class UsersList extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			users: []
		};

		this.usersListItem = this.usersListItem.bind(this)
	}

	usersListItem(){
		const users = this.props.users;
		return users.map((users, index)=>{
			return(
				<li key={users.user_id} onClick={this.props.handle.bind(this, users)}>
                    <a href="#">
                        <div className="user-img-small"></div>
                        {users.user_name}
                    </a>
                </li>
			)
		})
	}

	render() {
		return (
			<ul className="users-list">
                {this.usersListItem()}
            </ul>
		)
	}
}