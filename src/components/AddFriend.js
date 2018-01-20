import React from 'react';

export class AddFriend extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="modal-container">
                <h1 className="modal-title">Add Friend</h1>
                <div className="modal-body">
                    <p>Name</p>
                    <input type="text" />
                    <p>Age</p>
                    <input type="number" />
                </div>
                <div className="modal-footer">
                    <button>Cancel</button>
                    <button onClick={e => this.close(e)}>Save</button>
                </div>
            </div>
        )
    }
}