import React, { Component } from 'react';
import './App.css';
import List from './List';
import api from './Api'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedName: 'jayeshkattar',
      friends: ['jayeshkattar','lgummadi7','madas1'],
      data: ''
    }
    this.updateName = this.updateName.bind(this)
    this.apiCall = this.apiCall.bind(this)
  }

  componentDidMount(){
    console.log('component')
    this.apiCall(this.state.selectedName)
  }


  apiCall(name){
    api.fetchUserData(name).then(
      function (data) {
        console.log(data)
          this.setState({
              data: data
          })
      }.bind(this))
  }

  updateName(name){
    this.setState({
      selectedName: name
    })
    this.apiCall(name)
  }

  render() {
    return (
      <div className="App">
        <List selectedName ={this.state.selectedName} 
        friends={this.state.friends}
        updateName = {this.updateName}
        />
        {JSON.stringify(this.state.data)}
      </div>
      
    );
  }
}

export default App;
