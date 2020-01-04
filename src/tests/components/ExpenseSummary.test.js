import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test("should render correctly when no expenses are added", () => {
    const wrapper = shallow(<ExpenseSummary expenses={[]} expensesTotal={0} />);

    expect(wrapper).toMatchSnapshot();
});

test("should render correctly when single expense is added", () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses[0]} expensesTotal={195} />);

    expect(wrapper).toMatchSnapshot();
});

test("should render correctly when multiple expenses are added", () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses} expensesTotal={114195} />);

    expect(wrapper).toMatchSnapshot();
});