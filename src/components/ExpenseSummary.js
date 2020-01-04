import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import getVisibleExpenses from '../selectors/expenses';
import calculateExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({ expensesCount, expensesTotal }) => (
    <div>
        {
            expensesCount > 0 && 
            (
                <p>
                    {`
                        Viewing ${expensesCount} 
                        ${expensesCount === 1 ? "expense" : "expenses"} 
                        totalling ${numeral(expensesTotal / 100).format("$0,0.00")}
                    `}
                </p>
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    const expenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expensesCount: expenses.length,
        expensesTotal: calculateExpensesTotal(expenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);

