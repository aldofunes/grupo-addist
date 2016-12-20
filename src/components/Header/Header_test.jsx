import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import Header from './Header';
import TopBar from './TopBar';
import MobileMenu from './MobileMenu';

describe('<Header />', () => {
  it('should render <TopBar />', () => {
    const wrapper = shallow(<Header />);

    TopBar.propTypes = {};
    expect(wrapper.containsMatchingElement(<TopBar />)).to.be.true;
  });

  it('should render <MobileMenu /> when active', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.containsMatchingElement(<MobileMenu />)).to.be.false;
    wrapper.setState({
      isOpen: true
    });
    expect(wrapper.containsMatchingElement(<MobileMenu />)).to.be.true;
  });

  it('should toggle <MobileMenu /> when button clicked', () => {
    const wrapper = mount(<Header />);

    expect(wrapper.containsMatchingElement(<MobileMenu />)).to.be.false;
    wrapper.find('button').simulate('click');
    expect(wrapper.containsMatchingElement(<MobileMenu />)).to.be.true;
    wrapper.find('button').simulate('click');
    expect(wrapper.containsMatchingElement(<MobileMenu />)).to.be.false;
  })
});