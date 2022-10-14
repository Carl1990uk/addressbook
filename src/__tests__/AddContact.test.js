import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


import AddContact from '../AddContact';

describe('AddContact Component', () => {
  let mockaddContact = jest.fn();
  let AddContactProps = {"addContact":"mockaddContact"};
  
  const wrapper = shallow(<AddContact {...AddContactProps} />);
  
  it('AddContact includes html elements', () => {
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('label').length).toEqual(4);
    expect(wrapper.find('input').length).toEqual(4);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('AddContact includes correct html innerText', () => {
    expect(wrapper.find('form').text()).toEqual("First NameLast NamePhone NumberEmail AddressAdd new contact");
    expect(wrapper.find('button').text()).toEqual("Add new contact");
  }); 
  
});

