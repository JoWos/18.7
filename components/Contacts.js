var Contacts = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
	},

	render: function() {
		var contacts = this.props.items.map(function(contact) {
			return <Contact key={contact.id} item={contact} />
		});

		return (
			<ul className='contactsList'>
				{contacts}
			</ul>
		);
	}
}); 