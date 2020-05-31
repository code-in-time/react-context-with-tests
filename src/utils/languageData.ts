export interface ILang {
  [key: string] : {
      [title: string]: string
  }
}




export const languages: ILang = {
  en : {
    title: "English"
  },
  es: {
    title: "Español"
  },
  fi: {
    title: "Suomalainen"
  }
}

export type LanguageKeys = keyof typeof languages;