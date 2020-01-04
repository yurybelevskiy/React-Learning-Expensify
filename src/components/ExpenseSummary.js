import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import getVisibleExpenses from '../selectors/expenses';
import calculateExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = (props) => (
    <div>
        {
            props.expenses.length > 0 && 
            (
                <p>
                    {`
                        Viewing ${props.expenses.length} 
                        ${props.expenses.length === 1 ? "expense" : "expenses"} 
                        totallng ${numeral(props.expensesTotal / 100).format("$0,0.00")}
                    `}
                </p>
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    const expenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenses,
        expensesTotal: calculateExpensesTotal(expenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);

