import React from 'react';
import LanguageSelect from './LanguageSelect';
import { LanguageProvider } from './utils/LanguageHook';

function App() {

    return (
        <LanguageProvider>
            <div className="App" data-test="app-box">
                <LanguageSelect lang="en" />
            </div>
        </LanguageProvider>
    );
}

export default App;
