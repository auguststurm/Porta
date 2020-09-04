import React from 'react';

import './header.sass';


function Hamburger(props) {
  let hamburgerStyle = (props.active) ? 'navbar-burger burger is-active' : 'navbar-burger burger';
  return(
    <a role="button" className={hamburgerStyle} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="#burger" onClick={props.clickHandler}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  );
}

function NavBarStart(props) {
  
  const loggedOut = '';
  
  const loggedIn = <div className="navbar-start">
    <a className="navbar-item" href="#documentation">documentation</a>
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link" href="#more"><i className="fas fa-user"></i></a>
      <div className="navbar-dropdown">
        <a className="navbar-item" href="#more-about">Profile</a>
        <a className="navbar-item" href="#more-jobs">Settings</a>
        <a className="navbar-item" href="#more-contact">Keys</a>
        <hr className="navbar-divider" />
        <a className="navbar-item" href="#more-report-issue">Report an issue</a>
      </div>
    </div>
  </div>
  
  return(
    <div className="navbar-start">
      {(props.userLoggedIn) ? loggedIn : loggedOut }
    </div>
  )
  
}

function NavBarEnd(props) {
  
  const loggedOut = <div className="navbar-item">
    <div className="buttons">
      <div className="button is-info is-small" onClick={props.onSignUpClick}><strong>Sign up</strong></div>
      <div className="button is-light is-small is-outlined" onClick={props.onLogInClick}>Log in</div>
    </div>
  </div>
  
  const loggedIn = <div className="navbar-item">
    <div className="buttons">
      <div className="button is-light is-small is-outlined" onClick={props.onLogOutClick}>Log out</div>
    </div>
  </div>
  
  return(
    <div className="navbar-end">
      {(props.userLoggedIn) ? loggedIn : loggedOut }
    </div>
  );
  
}

///////////////////////////////////////////////////////////////////////////////

class Header extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hamburgerActive: false,
      userLoggedIn: props.userLoggedIn,
    };  
  }


  // HANDLERS /////////////////////////////////////////////////////////////////
  
  handleHamburgerClick = () => {
    this.setState({ hamburgerActive: !this.state.hamburgerActive });
  };
  
  handleSignUpClick = () => {
    this.props.signUpHandler(true);
  };
  
  handleLogInClick = () => {
    this.setState({ userLoggedIn: true });
    this.props.logInHandler(true);
  };
  
  handleLogOutClick = () => {
    this.setState({ userLoggedIn: false });
    this.props.logOutHandler(false);
  };
  
  /////////////////////////////////////////////////////////////////////////////
    
  
  render() {
    
    return(
      
      <nav className="navbar" role="navigation" aria-label="main navigation">

        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1 className="title is-4">PORTA</h1>
          </a>
          <Hamburger active={this.state.hamburgerActive} clickHandler={this.handleHamburgerClick} />
        </div>

        <hr className="navbar-divider" />

        <div id="main-menu" className={`navbar-menu ${(this.state.hamburgerActive) ? 'is-active' : ''}`}>

          <NavBarStart
            userLoggedIn={this.state.userLoggedIn}
          />

          <NavBarEnd 
            userLoggedIn={this.state.userLoggedIn} 
            onSignUpClick={this.handleSignUpClick} 
            onLogInClick={this.handleLogInClick} 
            onLogOutClick={this.handleLogOutClick}
          />

        </div>

      </nav>
      
    );
    
  }
  
}

export default Header;