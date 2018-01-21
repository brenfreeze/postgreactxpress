import React from 'react'

export class TextEditable extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		if(this.props.toInput === "true"){
			return <input type="text" className={this.props.edClass} name={this.props.controlName} value={this.props.value} onChange={this.props.handleChange}/>
		} else {
			if(this.props.textType === "heading"){
				return <h1 className={this.props.hClass}>{this.props.value}</h1>
			} else if(this.props.textType === "text"){
				return <p className={this.props.pClass}>{this.props.value}</p>
			}
		}
	}
}