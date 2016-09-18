var HelloThere = React.createClass({
	render: function() {
		return (
			<h1>Hello World</h1>
		)
	}
});
ReactDOM.render(
		<HelloThere />,
  	document.getElementById('area')
	);