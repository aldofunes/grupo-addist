/* eslint-disable no-unused-expressions, no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import Header from '../../components/Header';
import CookieConsent from '../../components/CookieConsent';

describe('<App />', () => {
  it('should render children', () => {
    const child = <div id="unique" />;
    const wrapper = shallow(<App>{child}</App>);

    expect(wrapper.contains(child)).to.be.true;
  });

  it('should render the <Header />', () => {
    const wrapper = shallow(<App>
      <div id="unique" />
    </App>);

    expect(wrapper.contains(<Header />)).to.be.true;
  });

  it('should render the <CookieConsent />', () => {
    const wrapper = shallow(<App>
      <div id="unique" />
    </App>);

    expect(wrapper.find(CookieConsent)).to.have.length(1);
  });
});

