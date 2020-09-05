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
  let portaCards = props.portas.map((porta, portaIndex) => {
    let output;
    if (porta.type === portaType.hyperlink) {
      output = <Hyperlink key={portaIndex} url={porta.url} title={porta.title} />
    } else if (porta.type === portaType.search) {
      output = <Search key={portaIndex} url={porta.url} prefix={porta.prefix || ''} title={porta.title} />
    }
    return output;
  });
  
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

// function SignUpModal(props)
// {
//   let style = (props.signUpModalActive) ? 'modal is-active' : 'modal is-dark';
// 
//   let output = <div className={style}>
//     <div className="modal-background is-dark"></div>
//     <div className="modal-content">
// 
//     </div>
//     <button className="modal-close is-large" aria-label="close" onClick={props.handleClose}></button>
//   </div>
//   return output;
// }

///////////////////////////////////////////////////////////////////////////////

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      signUpModalActive: false,
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
    this.setState({
      signUpModalActive: true
    });
  }
  
  handleSignUpModalClose = (event) => {
    this.setState({
      signUpModalActive: false
    });
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

        {/* <SignUpModal signUpModalActive={this.state.signUpModalActive} handleClose={this.handleSignUpModalClose} /> */}

      </div>

    );
    
  }
  
}


export default App;
