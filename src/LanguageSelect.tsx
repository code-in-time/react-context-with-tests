import React, { useContext } from 'react';
import { LanguageContext } from './utils/LanguageHook';


function LanguageSelect() {
    const pValue: any = useContext(LanguageContext);

    return (
        <div className="LanguageSelect" data-test="languageSelect-box">
            <div className="languageArea">{pValue.state.fullLang}</div>
        </div>
    );
}

export default LanguageSelect;
