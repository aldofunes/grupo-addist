import React from 'react';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';
import TopBar from './TopBar';

describe('<TopBar />', () => {
  it('should render a toggle button', () => {
    const wrapper = shallow(<TopBar onToggle={() => {}} />);

    expect(wrapper.find('button')).to.exist;
  });
  it('should render a logon', () => {
    const wrapper = shallow(<TopBar onToggle={() => {}} />);

    expect(wrapper.find('img')).to.exist;
  });

  it('onToggle should be called when toggleButton clicked', () => {
    const onToggle = spy();
    const wrapper = mount(<TopBar onToggle={onToggle} />);

    expect(wrapper.find('button')).to.exist;
  });
});
