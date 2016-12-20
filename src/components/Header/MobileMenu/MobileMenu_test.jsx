import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import MobileMenu from './MobileMenu';

describe('<MobileMenu />', () => {
  it('should be <nav>', () => {
    const wrapper = shallow(<MobileMenu />);
    expect(wrapper.type()).to.equal('nav');
  });

  it('should render links', () => {
    const wrapper = shallow(<MobileMenu />);

    expect(wrapper.find('Link')).to.have.length.above(0);
  });
});