import React from 'react';
import 'semantic-ui-react';

import UserData from './Components/UserData';
import FollowerCard from './Components/FollowerCard';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      myData:[],
      myFollowers: []
    };
  }

  componentDidMount() {
    this.FetchMyData();
    this.FetchMyFollowers();
  }

  FetchMyData = () => {
    fetch('https://api.github.com/users/meholt')
      .then(res => {
        return res.json();
      })
      .then(data => {
        return this.setState({ myData: data });
      })
      .catch(error => console.log(error));
  };

  FetchMyFollowers = () => {
    fetch('https://api.github.com/users/meholt/followers')
      .then(res => {
        return res.json();
      })
      .then(data => {
        return this.setState({ myFollowers: data });
      })
      .catch(error => console.log(error));
  }

 render() {
   return (
     <div className='App'>
       <h1>My GitHub UserCard</h1>
       <UserData MyData={this.state.myData} />
       <FollowerCard MyFollowers={this.state.myFollowers} />
     </div>
   );
 }
}

export default App;
