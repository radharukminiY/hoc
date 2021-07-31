import React, { Component } from 'react';
import StockList from './stockList';
import UserList from './userList';
import Hoc from './Hoc';

const StocksData = [
  {
      id: 1,
      name: 'Apple'

  },
  {
      id: 2,
      name: 'Microsoft'
  },
  {
      id: 3,
      name: 'France24'
  }
];
const UsersData = [
  {
      id: 1,
      name: 'Alexander'

  },
  {
      id: 2,
      name: 'Esabella'
  },
  {
      id: 3,
      name: 'Elenora'
  }
];

const Stocks = Hoc(StockList,StocksData);
const User = Hoc(UserList,UsersData);

class App extends Component {
  render() {
    return (
      <div>
       <Stocks/>
       <User/>
      </div>
    )
  }
}

export default App;
