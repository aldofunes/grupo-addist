import React from 'react';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';
import {should} from 'chai';
import TopBar from './TopBar';
should();

describe('<TopBar />', () => {
  it('should render a toggle button', () => {
    const wrapper = shallow(<TopBar onToggle={() => {}} />);

    wrapper.find('button').should.exist;
  });
  it('should render a logon', () => {
    const wrapper = shallow(<TopBar onToggle={() => {}} />);

    wrapper.find('img').should.exist;
  });

  it('onToggle should be called when toggleButton clicked', () => {
    const onToggle = spy();
    const wrapper = mount(<TopBar onToggle={onToggle} />);

    wrapper.find('button').simulate('click');
  });
});