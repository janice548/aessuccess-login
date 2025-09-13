import React from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  return (
    <div className="expense-form-container">
      <h2>Add New Expense</h2>
      <form>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" required />
        
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" name="amount" required />
        
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" name="category" />
        
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
