import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "my-id" });

    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "my-id"
    });
});

test("should setup edit expense action object", () => {
    const updatesObject = {
        firstName: "Mike",
        lastName: "Smith"
    };
    const action = editExpense("my-id", updatesObject);

    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "my-id",
        updates: updatesObject
    });
});

test("should setup add expense action object with provided values", () => {
    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    });
});

test("should add expense with default values to database and store", (done) => {
    const store = createMockStore({});

    const defaultExpense = {
        description: "",
        note: "",
        amount: 0,
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then((result) => {
        const actions = store.getActions();

        // check if correct action got dispatched to Redux store
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...defaultExpense
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultExpense);
        done();
    });
});

test("should add expense to database and store", (done) => {
    const store = createMockStore({});
    const expense = {
        description: "Test expense",
        note: "Great test",
        createdAt: 1000,
        amount: 3000
    };
    store.dispatch(startAddExpense(expense)).then((result) => {
        const actions = store.getActions();

        // check if correct action got dispatched to Redux store
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expense
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expense);
        done(); 
    });
});