import React from 'react';
import { shallow } from 'enzyme';
import LanguageSelect from './LanguageSelect';

jest.mock('react', () => {
  const ActualReact = require.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => ({ state: { fullLang: 'English' } }),
  };
});

test('that the LanguageSelect component exists', () => {
  const wrapper = shallow(<LanguageSelect />)
  expect(wrapper.find('[data-test="languageSelect-box"]').exists()).toBeTruthy();
});

test('that the language text exists', () => {
  const wrapper = shallow(<LanguageSelect />)
  expect(wrapper.find('.languageArea').text()).toBe("English")
  wrapper.unmount();
})
