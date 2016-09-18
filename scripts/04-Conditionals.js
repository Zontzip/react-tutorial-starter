var HelloThere = React.createClass({

  propTypes: {
    name: React.PropTypes.string,
    isPerson: React.PropTypes.bool
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

var Person = React.createClass({

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
      <span>{this.props.name}</span>
    )
  }
});


ReactDOM.render(
  <HelloThere name="Abdul" isPerson={true} />,
    document.getElementById('area')
  );