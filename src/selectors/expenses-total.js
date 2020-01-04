const calculateExpensesTotal = (expenses) => expenses.reduce((sum, expense) => sum + expense.amount, 0);

export default calculateExpensesTotal;