import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test("should expenses to default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    
    expect(state).toEqual([]);
});

test("should remove expense given valid id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense given if no expense with matching id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: '5'
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test("should add an expense", () => {
    const expense = {
        id: "5",
        description: "New Expense",
        note: "",
        amount: 5000,
        createdAt: moment().subtract(1, 'days').valueOf()
    };
    const action = {
        type: "ADD_EXPENSE",
        expense
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense given valid id", () => {
    const updates = {
        description: "Bubble gum",
        createdAt: moment(0)
    };
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[0].id,
        updates
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([{
        ...expenses[0],
        ...updates
    }, expenses[1], expenses[2]]);
});

test("should not edit an expense if no expense with matching id", () => {
    const updates = {
        description: "Bubble gum",
        createdAt: moment(0)
    };
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test("should set expenses", () => {
    const expensesData = [
        {
            id: "100",
            description: "Test Expense 1",
            note: "",
            amount: 1000,
            createdAt: 0
        },
        {
            id: "101",
            description: "Test Expense 2",
            note: "Some expense",
            amount: 10000,
            createdAt: 100
        }
    ];
    const action = {
        type: "SET_EXPENSES",
        expenses: expensesData
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expensesData);
});