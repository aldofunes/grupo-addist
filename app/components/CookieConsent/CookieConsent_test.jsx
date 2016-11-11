import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import CookieConsent from './CookieConsent';

describe('<CookieConsent />', () => {
  beforeEach(() => {
    document.cookie = `consent_dismissed=no; expires=${new Date(0)}; path=/`;
  });

  it('should render without props', () => {
    const wrapper = shallow(<CookieConsent />);
    expect(wrapper.type()).to.exist;
  });

  it('should render with props passed to it', () => {
    const wrapper = shallow(
      <CookieConsent text="text" link="link" linkText="linkText" buttonText="buttonText" />
    );

    expect(wrapper.contains('text')).to.equal(true);
    expect(wrapper.contains('buttonText')).to.equal(true);
    expect(wrapper.find('Link').prop('to')).to.equal('link');
    expect(wrapper.find('Link').children().contains('linkText')).to.equal(true);
  });

  it('should not render if consent has been dismissed', () => {
    const wrapper = shallow(<CookieConsent />);
    wrapper.setState({ consentDismissed: true });
    expect(wrapper.type()).to.equal(null);
  });

  describe('consentDismissed', () => {
    it('should be false when no cookie is present', () => {
      const wrapper = shallow(<CookieConsent />);
      expect(wrapper.state('consentDismissed')).to.equal(false)
    });

    it('should be true when cookie is present', () => {
      let date = new Date();
      date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
      document.cookie = `consent_dismissed=yes; expires=${date.toGMTString()}; path=/`;
      const wrapper = shallow(<CookieConsent />);

      expect(wrapper.state('consentDismissed')).to.equal(true);
    });
  });

  it('button should dismiss consent', () => {
    const wrapper = shallow(<CookieConsent />);
    expect(wrapper.state('consentDismissed')).to.equal(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('consentDismissed')).to.equal(true);
  });

});