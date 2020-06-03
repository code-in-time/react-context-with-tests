import React, { useReducer } from "react";

interface IState {
    count: number;
    lang: string;
}

let reducer = (state: any, action: any) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        case "LANG_SET":
            return { ...state, lang: action.payload};
        default:
            return;
    }
};

const initialState: IState = { count: 0, lang: 'en' }

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
