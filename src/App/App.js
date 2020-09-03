import React from 'react';
import StackGrid from 'react-stack-grid';

import './App.sass';

import { Header } from '../components';
import { 
  Hyperlink,
  Search
} from '../components/cards';

function App() {
  return (
    <div className="App">
      <Header userLoggedIn={false} />

      <div className="container is-fluid">

        <StackGrid columnWidth={350}>

          <Hyperlink
            url="https://news.ycombinator.com"
            title="Hacker News"
          />

          <Search
            url="https://www.amazon.com/s?k="
            title="Amazon"
          />

          <Search
            url="https://duckduckgo.com/?q="
            title="DuckDuckGo"
          />

          <Search
            url="https://duckduckgo.com/?q="
            prefix="Elite Dangerous"
            title="DuckDuckGo"
          />

        </StackGrid>

      </div>

    </div>

  );
}

export default App;
