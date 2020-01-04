import calculateExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test("should return 0 if given empty expenses array", () => {
    const total = calculateExpensesTotal([]);

    expect(total).toBe(0);
});

test("should return expense amount given expenses array with single expense", () => {
    const total = calculateExpensesTotal([expenses[0]]);

    expect(total).toBe(195);
});

test("should correctly add up expense amounts given expenses array with many expenses", () => {
    const total = calculateExpensesTotal(expenses);

    expect(total).toBe(114195);
});