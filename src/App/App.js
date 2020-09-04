import React from 'react';
import StackGrid from 'react-stack-grid';

import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.sass';

import { Header } from '../components';
import { 
  Hyperlink,
  Search
} from '../components/cards';

///////////////////////////////////////////////////////////////////////////////

const portaType = {
  hyperlink: 'hyperlink',
  search: 'search'
};

///////////////////////////////////////////////////////////////////////////////

function PortaCards(props)
{
  let portaCards = props.portas.map((porta) => {
    if (porta.type === portaType.hyperlink) {
        return <Hyperlink url={porta.url} title={porta.title} />
      } else if (porta.type === portaType.search) {
        return <Search url={porta.url} prefix={porta.prefix || ''} title={porta.title} />
      }
  });
  
  console.log(props.userLoggedIn)
  
  let portaAddButton = (props.userLoggedIn === false) ? '' : <button className="button is-large">
    <span className="icon is-large">
      <i className="fas fa-plus"></i>
    </span>
  </button>
  
  return <StackGrid columnWidth={350} gutterWidth={20} gutterHeight={20}>
    {portaCards}

    {portaAddButton}

  </StackGrid>;
}

///////////////////////////////////////////////////////////////////////////////

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false,
      user: {},
      portas: [
        {
          type: portaType.hyperlink,
          url: "https://news.ycombinator.com",
          title: "Hacker News"
        },
        {
          type: portaType.search,
          url: "https://hn.algolia.com/?q=",
          title: "Hacker News"
        },
        {
          type: portaType.search,
          url: "https://www.amazon.com/s?k=",
          title: "Amazon"
        },
        {
          type: portaType.search,
          url: "https://duckduckgo.com/?q=",
          title: "DuckDuckGo"
        },
        {
          type: portaType.search,
          url: "https://duckduckgo.com/?q=",
          prefix: "Elite Dangerous",
          title: "DuckDuckGo"
        }
      ]
    }
  };
  
  
  handleUserLogIn = (event) => {
    this.setState({
      userLoggedIn: true
    });
  };
  
  handleUserLogOut = (event) => {
    this.setState({
      userLoggedIn: false
    });
  };
  
  handleUserSignUp = (event) => {
    console.log('app > handle user sign up');
  }
  
  
  render() {
    
    return (
      <div className="App">
        <Header 
          userLoggedIn={this.state.userLoggedIn} 
          logInHandler={this.handleUserLogIn} 
          logOutHandler={this.handleUserLogOut} 
          signUpHandler={this.handleUserSignUp}
        />

        <div className="container is-fluid">
          <PortaCards portas={this.state.portas} userLoggedIn={this.state.userLoggedIn} />
        </div>

      </div>

    );
    
  }
  
}


export default App;
