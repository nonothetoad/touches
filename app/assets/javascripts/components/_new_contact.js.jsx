var NewContact = React.createClass({
	handleClick() {
		var name = this.refs.name.value;
		var email = this.refs.email.value;
		var address = this.refs.address.value;
		var phone = this.refs.number.value;
		$.ajax({
			url: '/api/v1/contacts',
			type: 'POST',
			data: { contact: {name: name, email: email, address: address, phone: phone }},
			success: (response) => {
				this.props.handleSubmit(response);
			}
		});
	},
	render() {
		return (
			<div> 
				<input ref='name' placeholder='Enter the persons name'/>
				<input ref='email' placeholder='Enter their email address'/>
				<input ref='address' placeholder='Enter their street address'/>
				<input ref='number' placeholder='Enter their phone number'/>
				<button onClick={this.handleClick}>Add new contact</button>
			</div>
		)
	}
})