import React, { useContext } from 'react';
import LanguageSelect from './LanguageSelect';
import { LanguageProvider, LanguageContext, actions } from './utils/LanguageHook';
import { useEffect } from 'react';

function App() {
    const pValue: any = useContext(LanguageContext);

    // Set initial language
    useEffect(() => {
        // 
        pValue.dispatch({ type: actions.LANG_SET, payload: 'en' })
    });


    return (
        <LanguageProvider>
            <div className="App" data-test="app-box">
                <LanguageSelect />
            </div>
        </LanguageProvider>
    );
}

export default App;
