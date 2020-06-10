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


// test('that these buttons are rendered "btn1" "btn2" "btn3"', () => {
//   const wrapper = shallow(<LanguageSelect />)
//   expect(wrapper.find('.languageArea').text()).toBe("English")
//   wrapper.unmount();
// })

// TODO: mock:
// -  import { languages, ILang } from './utils/languageData';
// <div class="btnContainer" >
//   <button class="btn-en selectedLang">English</button>
//   <button class="btn-es ">Español</button>
//   <button class="btn-fi ">Suomalainen</button>
// </div>
