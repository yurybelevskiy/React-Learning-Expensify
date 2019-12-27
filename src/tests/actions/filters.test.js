import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test("should generate set start date action object", () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});

test("should generate set end date action object", () => {
    const action = setEndDate(moment(1000));

    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(1000)
    });
});

test("should generate sort by amount action object", () => {
    expect(sortByAmount()).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});

test("should generate sort by date action object", () => {
    expect(sortByDate()).toEqual({
        type: "SORT_BY_DATE"
    });
});

test("should generate set text filter action object with given text", () => {
    const action = setTextFilter("my-string");

    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "my-string"
    });
});

test("should generate set text filter action object with empty text", () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});

