import React from 'react'
import {shallow} from 'enzyme'
import {Section3} from '../components/Section3'

// eslint-disable-next-line no-sequences
if('renders no products when store is empty', () => {
    const wrapper = shallow(<Section3 test={[]} />);
    expect(wrapper.find(".test").length).toBe(0);
});