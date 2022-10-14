import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import ContactTable from '../ContactTable';

describe('ContactTable Component', () => {
  let mockeditRow = jest.fn();
  let mockdeleteContact = jest.fn();
  let ContactTableProps = {"contacts":[{"id":"1","first_name":"David","last_name":"Platt","phone":"01913478234","email":"david.platt@corrie.co.uk"},{"id":"2","first_name":"Jason","last_name":"Grimshaw","phone":"01913478123","email":"jason.grimshaw@corrie.co.uk"},{"id":"3","first_name":"Ken","last_name":"Barlow","phone":"019134784929","email":"ken.barlow@corrie.co.uk"},{"id":"4","first_name":"Rita","last_name":"Sullivan","phone":"01913478555","email":"rita.sullivan@corrie.co.uk"},{"id":"5","first_name":"Steve","last_name":"McDonald","phone":"01913478555","email":"steve.mcdonald@corrie.co.uk"}],"editRow":"mockeditRow","deleteContact":"mockdeleteContact"};
  
  const wrapper = shallow(<ContactTable {...ContactTableProps} />);
  
  it('ContactTable includes html elements', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('table').length).toEqual(1);
    expect(wrapper.find('thead').length).toEqual(1);
    expect(wrapper.find('tr').length).toEqual(6);
    expect(wrapper.find('th').length).toEqual(5);
  }); 
  
});
