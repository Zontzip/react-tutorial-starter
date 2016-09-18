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

  // Runs only once when the component mounts
  componentDidMount: function() {
    // allows you to reset your state
    this.setState({
      value: this.state.value + 19
    });
  },

  render: function() {
    var greeting = "World";

    // If object is a person then return the persons name, else 'World'
    if (this.props.isPerson) {
      greeting = (<Person name={this.props.name} />)
    }

    // Returns the greeting
    // All elements need to be wrapped for JSX
    return (
      <div>
        <h1>Hello {greeting} </h1>
        {this.state.value}
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
      //This is the name passed in to person 
      <span>{this.props.name}</span>
    )
  }
});


ReactDOM.render(
    <HelloThere name="Abdul" isPerson={true} />,
    document.getElementById('area')
  );