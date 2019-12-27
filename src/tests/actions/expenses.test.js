import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
    const expenseData = {
        description: "Rent",
        amount: 100,
        createdAt: 500,
        note: "Paying last month rent"
    };
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
});

test("should setup add expense action object with default values", () => {
    const action = addExpense();
    
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            amount: 0,
            createdAt: 0,
            note: ""
        }
    });

});