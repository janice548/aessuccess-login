import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  // This is a placeholder for a list of expenses
  const expenses = [
    { id: 1, description: 'Groceries', amount: 50.00, category: 'Food' },
    { id: 2, description: 'Coffee', amount: 4.50, category: 'Food' },
    { id: 3, description: 'Internet Bill', amount: 65.00, category: 'Bills' },
  ];
  
  return (
    <div className="expense-list-container">
      <h2>My Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            <strong>{expense.description}</strong>: ${expense.amount} ({expense.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
