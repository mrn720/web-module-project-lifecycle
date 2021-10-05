import React from 'react'
import axios from 'axios'
import UserCard from './components/UserCard'
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubData: {
      name: '',
      login: '',
      avatar_url: '',
      location: '',
      bio: '',
      html_url: '',
      followers: '',
      following: '',
      },
      followerData: {
      name: '',
      login: '',
      avatar_url: '',
      location: '',
      bio: '',
      html_url: '',
      followers: '',
      following: '',
      }
    }
    console.log('Github data rendered')
  }

  componentDidMount() {
    console.log('Component Mounted')
    axios.get('https://api.github.com/users/mrn720')
        .then(res => this.setState({
            ...this.state,
            githubData: res.data
        }))
        .catch(err => console.log(err))
    axios.get('https://api.github.com/users/mrn720/followers')
        .then(res => res.data.map((value) => this.setState({
          ...this.state,
          followerData: value
        })))
}

  render() {
    return (
      <div className="App">
        <h1>{this.state.githubData.name}'s Github Profile:</h1>
        <UserCard userData={this.state.githubData}/>
        <h1>{this.state.githubData.name}'s Follower Profiles:</h1>
        <UserCard userData={this.state.followerData}/>
      </div>
    );
  }
}

export default App;