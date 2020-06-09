import React from 'react';
import { shallow } from 'enzyme';
import LanguageSelect from './LanguageSelect';

jest.mock('react', () => {
  const ActualReact = require.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => ({ state: { fullLang: 'mocked context' } }),
  };
});

test.only('that the LanguageSelect component exists', () => {


  const wrapper = shallow(<LanguageSelect />)
  expect(wrapper.find('[data-test="languageSelect-box"]').exists()).toBeTruthy()
  wrapper.unmount();
})

// test('that the language text exists', () => {
//     const MockComp = function App() {
//         const pValue: any = useContext(LanguageContext);

//         // Set initial language
//         useEffect(() => {
//             // 
//             pValue.dispatch({ type: actions.LANG_SET, payload: 'en' })
//         }, []);
//         return (
//             null
//         );
//     }

//     const wrapper = mount(
//         <LanguageProvider>
//             <MockComp />
//             <LanguageSelect />
//         </LanguageProvider>
//     )
//     expect(wrapper.find('.languageArea').text()).toBe("English")
//     wrapper.unmount();
// })

// test('the default language', () => {

//     const MockComp = function App() {
//         const pValue: any = useContext(LanguageContext);

//         // Set initial language
//         useEffect(() => {
//             // 
//             pValue.dispatch({ type: actions.LANG_SET, payload: 'endddd' })
//         }, []);
//         return (
//             null
//         );
//     }

//     const wrapper = mount(
//         <LanguageProvider>
//             <MockComp />
//             <LanguageSelect />
//         </LanguageProvider>
//     )
//     expect(wrapper.find('.languageArea').text()).toBe("Error")
// })

// test('the button for English has the class "selectedLang"', () => {
//     const wrapper = shallow(<LanguageSelect lang='en' />)
//     const buttonEn = wrapper.find('.btn-en')
//     expect(buttonEn.hasClass("selectedLang"))
// })

// test('the button click will add a "selectedLang" class to the button', () => {
//     const wrapper = shallow(<LanguageSelect lang='en' />)
//     let buttonEs = wrapper.find('.btn-es')

//     buttonEs.simulate('click')
//     buttonEs = wrapper.find('.btn-es')
//     const buttonEn = wrapper.find('.btn-en')
//     expect(buttonEs.hasClass("selectedLang")).toBeTruthy()
//     expect(buttonEn.hasClass("selectedLang")).toBeFalsy()
// })


// Set the theme in the reducer