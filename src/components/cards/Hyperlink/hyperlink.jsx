import React from 'react';

import './hyperlink.sass';

class Hyperlink extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      title: props.title
    };
  }
  
  render() {  
    return(
      <div className="card">

        <header className="card-header">
          <p className="card-header-title">
            {this.state.title}
          </p>
        </header>

        <div className="card-content">
          <div className="content">
            {this.state.url}
          </div>
        </div>

        <footer className="card-footer">
          <a href={this.state.url} className="card-footer-item">{`Visit ${this.state.title}`}</a>
        </footer>

      </div>    
    );
    
  }
}

export default Hyperlink;
