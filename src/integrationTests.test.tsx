import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { LanguageProvider } from './utils/LanguageHook';



test.only('the button click will add a "selectedLang" class to the button', () => {
    const wrapper = mount(
      
      <LanguageProvider>
        <App />
      </LanguageProvider>
      );


        // console.log(LanguageSelect.debug())
    let buttonEs = wrapper.find('LanguageSelect').find('.btn-es')

    buttonEs.simulate('click')
    buttonEs = wrapper.find('.btn-es')
    const buttonEn = wrapper.find('LanguageSelect').find('.btn-en')
    expect(buttonEs.hasClass("selectedLang")).toBeTruthy()
    expect(buttonEn.hasClass("selectedLang")).toBeFalsy()
})


// Set the theme in the reducer