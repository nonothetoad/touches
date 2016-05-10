



var AllContacts = React.createClass({
	handleDelete(id) {
		this.props.handleDelete(id);
	},
	render() {
		 var contacts = this.props.contacts.map((contact) => {
      
			return (
				<div className="contact-box" key={contact.id}>
					<h3> {contact.name} </h3>
					<p> {contact.email} </p>
					<p> {contact.address} </p>
					<p> {contact.phone} </p>
					<button onClick={this.handleDelete.bind(this, contact.id)}> Delete</button>
				</div>

			)
		});
		return (
			<div className="left-side">
				{contacts}
				
			</div>
		)
	}
});

// var touch_id = contact.id;
