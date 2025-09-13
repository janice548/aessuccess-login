import React from 'react';
import Header from './src_components/Header';
import ExpenseForm from './src_components/ExpenseForm';
import ExpenseList from './src_components/ExpenseList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ExpenseForm />
        <ExpenseList />
      </main>
    </div>
  );
}

export default App;
