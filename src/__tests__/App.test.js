import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import App from '../App.js';

describe('App Component', () => {
    const wrapper = shallow(<App />);
    
    it('App includes html elements', () => {
      expect(wrapper.find('div').length).toEqual(6);
      expect(wrapper.find('h1').length).toEqual(1);
      expect(wrapper.find('h2').length).toEqual(2);
      expect(wrapper.find('input').length).toEqual(1);
    });
  
    it('App includes correct html innerText', () => {
      expect(wrapper.find('h1').text()).toEqual("Address Book");
    }); 
  });
  
  