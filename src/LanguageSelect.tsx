import React, { useState, useContext } from 'react';
import { LanguageContext, ILanguageReducer } from './utils/LanguageHook';
import { languages, ILang } from './utils/languageData';

interface IProps {
  lang: string
}

function LanguageSelect(props: IProps) {

  const { lang } = props
  const [currLang, setCurrLang] = useState(lang)
  const pValue: any = useContext(LanguageContext);


// todo: fix any  { [title: string]: string; }
  const getText = (langId: string, propVal: string): string => {
    let result: any | undefined = languages[langId]
    result = result === undefined ? "Error" : result[propVal]
    return result
  }

  const selectLanguageOnClick = (key: string) => {
    setCurrLang(key)
  }

  const buildButtons = (allLang: ILang) => {
    let oButtons: any = []
    const keys = Object.keys(allLang)
    for (const key of keys) {
      // console.log(key)
      oButtons.push(
        <button
          key={key}
          className={`btn-${key} ${key === currLang ? 'selectedLang': ''}`}
          onClick={() => {
            selectLanguageOnClick(key)
            pValue.dispatch({ type: "LANG_SET", payload: key.toString() })
          }}
        >{allLang[key].title}</button>)
    }

    return (
      <div className="btnContainer">
        {oButtons }
      </ div>
    )
  }

  return (
    <div className="LanguageSelect" data-test="languageSelect-box">
      <div className="languageArea">{getText(currLang, 'title')}</div>
      {pValue.state.count} <br /><br />
      {pValue.state.lang}
      {buildButtons(languages)}

    </div>
  );
}

export default LanguageSelect;
