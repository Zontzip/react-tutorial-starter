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

  getInitialState: function() {
    return {
      value: 1
    }
  },

  componentDidMount: function() {
    
  },

  // An underscore indicates a custom method
  _addByOne: function() {
    this.setState({
      value: this.state.value + 1
    });
  },

  render: function() {
    var greeting = "World";

    if (this.props.isPerson) {
      greeting = (<Person name={this.props.name} />)
    }

    return (
      <div>
        <h1>Hello {greeting} </h1>
        {this.state.value}
        {/* Run the custom method on a click
            n.b.: Leave out brackets as this auto fires the method */}
        <button onClick={this._addByOne}>Click me</button>
      </div>
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