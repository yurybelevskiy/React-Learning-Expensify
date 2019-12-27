import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test("should setup default filter values", () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test("should set sort by to amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });

    expect(state.sortBy).toBe('amount');
});

test("should set sort by to date", () => {
    const currentState = {
        text: "",
        startDate: undefined,
        endDate: undefined,
        sortBy: "amount"
    };
    const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });

    expect(state.sortBy).toBe('date');
});

test("should set text filter", () => {
    const state = filtersReducer(undefined, { 
        type: "SET_TEXT_FILTER",
        text: "some_filter"
    });

    expect(state.text).toBe('some_filter');
});

test("should set startDate filter", () => {
    const startDate = moment(100);
    const state = filtersReducer(undefined, { 
        type: "SET_START_DATE",
        startDate
    });

    expect(state.startDate).toEqual(startDate);
});

test("should set endDate filter", () => {
    const endDate = moment(500);
    const state = filtersReducer(undefined, { 
        type: "SET_END_DATE",
        endDate
    });

    expect(state.endDate).toEqual(endDate);
});