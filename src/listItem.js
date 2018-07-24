import React, { Component } from 'react';

class ListItem extends Component {
	constructor (props) {
		super(props);
	} 

	handle = () =>{
		var status = this.props.item.status;

		status = (status === 0 ? 1 : 0);

		var obj = {
			id: this.props.item.id,
			name: this.props.item.name,
			status: status
		}

		this.props.finishedChange(obj);
	}

    makeEditable = (e) =>{
		console.log("input-------------", e.target);
		// e.target.disabled = "undisabled"
	}



	render () {
		const item = this.props.item;

		const unfinish = {
			backgroundColor: '#DFFCB5',
			color: '#2EB872',
		};

		const finish = {
			backgroundColor: '#FFFA9D',
			color: '#FF9A3C',
			textDecoration: 'line-through'
		}

		var itemStyle = item.status === 0 ? unfinish : finish;
		
		return (
			<li key={item.id} style={itemStyle}>
				<input
					type="checkbox"
					onClick={this.handle}
					id={item.id}
					className="check-btn"
                    checked={item.status === 1}
				/>
				<input value = {item.name} disabled="disabled" />
			</li>
		);
	}
}

export default ListItem;