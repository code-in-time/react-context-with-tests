import React, { useReducer } from "react";
import { languages } from "./languageData";

export const actions = {
    LANG_SET: "LANG_SET"
}

// todo: fix any  { [title: string]: string; }
const getText = (langId: string, propVal: string): string => {
    let result: any | undefined = languages[langId]
    result = result === undefined ? "Error" : result[propVal]
    return result
  }

interface IState {
    lang: string;
    fullLang: string;
}
// getText(currLang, 'title')
let reducer = (state: any, action: any) => {
    switch (action.type) {
        case "LANG_SET":
            return { ...state, lang: action.payload, fullLang: getText(action.payload, 'title')};
        default:
            return;
    }
};

const initialState: IState = { lang: 'en', fullLang: 'english' }

export const LanguageContext = React.createContext(initialState);

export interface ILanguageReducer {
    count: any;
    reducer: React.Dispatch<any>;
}

export function LanguageProvider(props: any) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const pValue: any = { state, dispatch }

    return (
        <LanguageContext.Provider value={pValue}>
            {props.children}
        </LanguageContext.Provider>
    );
}
