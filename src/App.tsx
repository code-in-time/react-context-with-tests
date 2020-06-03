import React, { useContext } from 'react';
import LanguageSelect from './LanguageSelect';
import { LanguageContext, actions } from './utils/LanguageHook';
import { useEffect } from 'react';

function App() {
    const pValue: any = useContext(LanguageContext);

    // Set initial language
    useEffect(() => {
        // 
        pValue.dispatch({ type: actions.LANG_SET, payload: 'en' })
    }, []);


    return (
        <div className="App" data-test="app-box">
            <LanguageSelect />
        </div>
    );
}

export default App;
