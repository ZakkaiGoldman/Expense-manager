import React, { Component } from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CatagoriesPieChart from './components/CatagoriesPieChart';
import { Provider } from './context';
import Buttons from './components/Buttons';
import CatagoryLabels from './components/CatagoryLabels';
import ExpensesList from './components/ExpensesList';
import IncomeList from './components/IncomeList';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <CatagoryLabels />
          <CatagoriesPieChart />
          <Buttons />
          <ExpensesList />
          <IncomeList />
        </div>
      </Provider>
    );
  }
}

export default App;
