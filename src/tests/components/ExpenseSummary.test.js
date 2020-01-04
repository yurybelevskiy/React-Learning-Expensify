import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test("should render correctly when no expenses are added", () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={0} expensesTotal={0} />);

    expect(wrapper).toMatchSnapshot();
});

test("should render correctly when single expense is added", () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={25} />);

    expect(wrapper).toMatchSnapshot();
});

test("should render correctly when multiple expenses are added", () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={5} expensesTotal={5000} />);

    expect(wrapper).toMatchSnapshot();
});