import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/Header';

test("should render Header component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});
