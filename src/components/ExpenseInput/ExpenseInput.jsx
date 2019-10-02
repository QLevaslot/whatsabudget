import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'
import EXPENSE_TYPES from "../../utils/ExpenseTypes";

const expenseTypes = Object.keys(EXPENSE_TYPES).map(key => ({value: key, label: EXPENSE_TYPES[key]}));

const ExpenseInput = ({addExpense}) => {
  const [expenseValue, setExpenseValue] = useState(0);
  const [expenseType, setExpenseType] = useState(expenseTypes[0]);
  const onExpenseValueChanged = e => setExpenseValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    addExpense({value: expenseValue, type: expenseType.value})
  };
  return <form className="expense-input" onSubmit={onSubmit}>
    <input type="number" name="value" value={expenseValue} onChange={onExpenseValueChanged}/>
    <Select options={expenseTypes} isClearable={false} onChange={setExpenseType} value={expenseType}/>
    <input type="submit" value="Add expense"/>
  </form>
}

ExpenseInput.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

export default ExpenseInput;