import React from 'react';
import { shallow, mount } from 'enzyme';
import LanguageSelect from './LanguageSelect';
test('that the LanguageSelect component exists', () => {
      const wrapper = shallow(<LanguageSelect lang='en' />)
      expect(wrapper.find('[data-test="languageSelect-box"]').exists()).toBeTruthy()
})

test('that the language text exists', () => {
      const wrapper = shallow(<LanguageSelect lang='en' />)
      expect(wrapper.find('.languageArea').text()).toBe("English")
})



test('the default language', () => {
      const wrapper = shallow(<LanguageSelect lang='eno' />)
      expect(wrapper.find('.languageArea').text()).toBe("Error")
})

test('the button for English has the class "selectedLang"', () => {
      const wrapper = shallow(<LanguageSelect lang='en'/>)
      const buttonEn = wrapper.find('.btn-en')
      expect(buttonEn.hasClass("selectedLang"))
})

test.only('the button click will add a "selectedLang" class to the button', () => {
      const wrapper = shallow(<LanguageSelect lang='en'/>)
      let buttonEs = wrapper.find('.btn-es')

      buttonEs.simulate('click')
      buttonEs = wrapper.find('.btn-es')
      const buttonEn = wrapper.find('.btn-en')
      expect(buttonEs.hasClass("selectedLang")).toBeTruthy()
      expect(buttonEn.hasClass("selectedLang")).toBeFalsy()
})


// Set the theme in the reducer