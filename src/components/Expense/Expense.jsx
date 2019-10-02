import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CURRENCIES from "../../utils/Currencies";

const Expense = ({ type, value }) => <div className={classNames('expense', type)}>{value}{CURRENCIES.EURO}</div>;

Expense.propTypes  = {
  value: PropTypes.number.isRequired,
  type: PropTypes.string,
};

export default Expense;