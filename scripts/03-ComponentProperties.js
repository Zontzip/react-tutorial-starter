var HelloThere = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      name: 'Alex'
    }
  },

	render: function() {
		return (
			<h1>Hello {this.props.name}</h1>
		)
	}
});


ReactDOM.render(
		<HelloThere  />,
  	document.getElementById('area')
	);