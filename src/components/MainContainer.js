import React from 'react';
import {TopBar} from './TopBar';
import {UserProfile} from './UserProfile';
import {UsersList} from './UsersList';
import {Modal} from './Modal';
import axios from 'axios';

export class MainContainer extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			users: [],
			user: [],
			isModalOpen: false,
			newName: "",
			newAge: 0
		};

		this.handleClick = this.handleClick.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.save = this.save.bind(this);
	}

	componentDidMount(){
		this.getUsers();
	}

	getUsers(){
		axios.get('/users')
			.then((res)=>{
				this.setState({
					users: res.data,
					user: res.data[0]
				})
			})
			.catch((err)=>{
				console.log(err)
			})
	}

	handleClick(e){
		this.setState({
			user: e
		})
	}

    openModal() {
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }

	handleChange(e){
		this.setState({
			[e.target.name]: this.tryParse(e.target.value)
		})
	}

	tryParse(str){
		if(str !== null) {
			if(str.length > 0) {
				if (!isNaN(str)) {
					str = parseInt(str);
				}
 			}
 		}

 		return str;
	}

	save(){
		let newUser = {
			name: this.state.newName,
			age: this.state.newAge.toString()
		};

		axios.post('/users', newUser)
			.then(res => {
				console.log(res)
				this.getUsers;
				this.setState({
					isOpenModal: false
				});
			})
			.catch(err => {
				console.log(err)
			})
	}

	render(){
		return(
			<div className='container'>
				<TopBar openModal={this.openModal} closeModal={this.closeModal} />
				<div className='main'>
					<UserProfile user={this.state.user} />
					<div className="users">
						<h5 className="users-title">Friends</h5>
						<UsersList users={this.state.users} handle={this.handleClick} />
					</div>
				</div>

				<Modal width="500" height="400" isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <div className="modal-container">
                        <h1 className="modal-title">Add Friend</h1>
                        <div className="modal-body">
                            <p>Name</p>
                            <input type="text" name="newName" onChange={this.handleChange}/>
                            <p>Age</p>
                            <input type="number" name="newAge" onChange={this.handleChange}/>
                        </div>
                        <div className="modal-footer">
                            <button className="user-action" onClick={this.closeModal}>Cancel</button>
                            <button className="user-action" onClick={this.save}>Save</button>
                        </div>
                    </div>
				</Modal>
			</div>
		)
	}
}