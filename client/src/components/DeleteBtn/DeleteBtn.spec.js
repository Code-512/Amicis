import React from 'react';
import { shallow } from 'enzyme';
import DeleteBtn from './DeleteBtn';

describe('DeleteBtn', () => {
  it('should render a <div />', () => {
    const wrapper = shallow(<DeleteBtn />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});