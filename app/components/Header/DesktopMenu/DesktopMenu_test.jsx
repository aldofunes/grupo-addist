import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import DesktopMenu from './DesktopMenu';

describe('<MobileMenu />', () => {
  it('should be <nav>', () => {
    const wrapper = shallow(<DesktopMenu />);
    expect(wrapper.type()).to.equal('nav');
  });

  it('should render links', () => {
    const wrapper = shallow(<DesktopMenu />);

    expect(wrapper.find('Link')).to.have.length.above(0);
  });
});