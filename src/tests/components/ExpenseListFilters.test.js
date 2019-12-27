import React from 'react';
import { shallow } from 'enzyme';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { defaultFilters, populatedFilters } from '../fixtures/filters';

let sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={defaultFilters}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setTextFilter={setTextFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test("should render ExpenseListFilters with default filter object", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with populated filter object", () => {
    wrapper.setProps({ filters: populatedFilters });
    expect(wrapper).toMatchSnapshot();
});

test("should handle change filter text correctly", () => {
    const value = populatedFilters.text;
    wrapper.find('input').simulate('change', {
        target: { value }
    });

    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should handle sort by date correctly", () => {
   wrapper.setProps({ filters: populatedFilters });
   const value = 'date';
   wrapper.find('select').simulate('change', {
       target: { value }
   });

   expect(sortByDate).toHaveBeenCalled();
});

test("should handle sort by amount correctly", () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
 
    expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes correctly", () => {
   const startDate = moment().subtract(2, 'days');
   const endDate = moment();
   wrapper.find(DateRangePicker).prop('onDatesChange')(
       {
           startDate,
           endDate
       }
   );
   
   expect(setStartDate).toHaveBeenLastCalledWith(startDate);
   expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should set calendarFocused in state when onFocusChange triggers", () => {
   const focused = true;
   wrapper.find(DateRangePicker).prop('onFocusChange')(focused);

   expect(wrapper.state('calendarFocused')).toBe(focused);
});