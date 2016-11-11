import React from 'react';
import {shallow} from 'enzyme';
import {should} from 'chai';
import App from './App';
import Header from '../../components/Header';
import CookieConsent from '../../components/CookieConsent';
should();

describe('<App />', () => {
  it('should render children', () => {
    const child = <div id="unique" />;
    const wrapper = shallow(<App>{child}</App>);

    wrapper.contains(child).should.equal(true);
  });

  it('should render the <Header />', () => {
    const wrapper = shallow(<App>
      <div id="unique" />
    </App>);

    wrapper.contains(<Header />).should.equal(true);
  });
  it('should render the <CookieConsent />', () => {
    const wrapper = shallow(<App>
      <div id="unique" />
    </App>);

    wrapper.contains(<CookieConsent />).should.equal(true);
  });
});