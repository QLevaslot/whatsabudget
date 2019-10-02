import React, { useState } from 'react';
import './App.css';
import ExpenseInput from "./components/ExpenseInput/ExpenseInput";
import Expense from "./components/Expense/Expense";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const addExpense = (expense) => setExpenses([...expenses, expense]);
  return (
    <div className="App">
      <ExpenseInput addExpense={addExpense}/>
      {expenses.map(expense => <Expense {...expense} />)}
    </div>
  );
}

export default App;
