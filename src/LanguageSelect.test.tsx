import React from 'react';
import { shallow } from 'enzyme';
import LanguageSelect from './LanguageSelect';

test.only('that the LanguageSelect component exists', () => {

    jest.mock('react', () => {
        const ActualReact = require.requireActual('react');
        return {
          ...ActualReact,
          useContext: () => ({ state: { fullLang: 'mocked context' } }),
      };
    });
    const wrapper = shallow(<LanguageSelect />)
    let s = 1;
    expect(wrapper.find('[data-test="languageSelect-box"]').exists()).toBeTruthy()
    wrapper.unmount();
})
