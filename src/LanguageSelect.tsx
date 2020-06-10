import React, { useContext } from 'react';
import { LanguageContext, actions } from './utils/LanguageHook';
import { languages, ILang } from './utils/languageData';


function LanguageSelect() {
    const pValue: any = useContext(LanguageContext);
    const selectLanguageOnClick = (key: string) => {
        pValue.dispatch({ type: actions.LANG_SET, payload: key.toString() })
    }

    const buildButtons = (allLang: ILang) => {
        let oButtons: any = []
        const keys = Object.keys(allLang)
        for (const key of keys) {
            oButtons.push(
                <button
                    key={key}
                    className={`btn-${key} ${key === pValue.state.lang ? 'selectedLang' : ''}`}
                    onClick={() => {
                        selectLanguageOnClick(key)
                    }}
                >{allLang[key].title}</button>)
        }

        return (
            <div className="btnContainer">
                {oButtons}
            </ div>
        )
    }

    return (
        <div className="LanguageSelect" data-test="languageSelect-box">
            <div className="languageArea">{pValue.state.fullLang}</div>
            {pValue.state.lang}
            {buildButtons(languages)}
        </div>
    );
}

export default LanguageSelect;
