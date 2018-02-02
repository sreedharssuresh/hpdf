import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class App1 extends Component {
  state = {
    response: ''
  };
  

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (

        <TextField className="App-intro">{this.state.response}</TextField>

    );
  }
}

export default App1;
