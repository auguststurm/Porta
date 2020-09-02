import React from 'react';

import './App.sass';

import { Header } from '../components';

function App() {
  return (
    <div className="App">
      <Header userLoggedIn={false} />
    </div>
  );
}

export default App;
