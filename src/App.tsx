import React, { useState } from 'react';
import LanguageSelect from './LanguageSelect';

function App() {

  return (
    <div className="App" data-test="app-box">
    <LanguageSelect  lang="en" />
    </div>
  );
}

export default App;
