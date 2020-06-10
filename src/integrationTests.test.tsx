import React from 'react';
import { mount } from 'enzyme';
import App from './App';



test.only('the button click will add a "selectedLang" class to the button', () => {
    const wrapper = mount(<App />)
    console.log(wrapper.debug())
    let buttonEs = wrapper.find('.btn-es')

    buttonEs.simulate('click')
    buttonEs = wrapper.find('.btn-es')
    const buttonEn = wrapper.find('.btn-en')
    expect(buttonEs.hasClass("selectedLang")).toBeTruthy()
    expect(buttonEn.hasClass("selectedLang")).toBeFalsy()
})


// Set the theme in the reducer