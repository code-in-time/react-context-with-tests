import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
test('that the app component exists', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.find('[data-test="app-box"]').exists()).toBeTruthy()
})