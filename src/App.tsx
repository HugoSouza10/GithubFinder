
import React from 'react';

import { CardSearch } from './components/CardSearch';
import {UseGitProvider } from './contexts/ContextUseGIt';

function App() {
  return (
    <UseGitProvider>
      <CardSearch/>
    </UseGitProvider>
  );
}

export default App;
