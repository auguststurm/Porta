import React from 'react';

import './App.sass';

import { Header } from '../components';
import { Hyperlink } from '../components/cards';

function App() {
  return (
    <div className="App">
      <Header userLoggedIn={false} />

      <Hyperlink
        url="https://www.apple.com"
        title="Apple"
      />

    </div>
  );
}

export default App;
