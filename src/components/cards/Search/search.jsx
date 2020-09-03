import React from 'react';

import './search.sass';

class Search extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      title: props.title,
      prefix: props.prefix || '',
      keywords: ''
    };  
  }
  
  handleSearchClick = () => {
    const sanitizedPrefix = (this.state.prefix != '') ? this.state.prefix.replace(/\s/g, '+') + '+' : '';
    const sanitizedKeywords = this.state.keywords.replace(/\s/g, '+');
    const fullUrl = `${this.state.url}${sanitizedPrefix}${sanitizedKeywords}`;
    window.location.href = fullUrl;
  };
  
  handleKeywordsUpdate = (event) => {
    this.setState({
      keywords: event.currentTarget.value
    });
  }
  
  handleReturnKeyPressed = (event) => {  
    if (event.charCode === 13) {
      this.handleSearchClick();
    }
  }
  
  render() {
    
    return(
      
      
      <div className="card">

        <header className="card-header">
          <p className="card-header-title">
            Search: {this.state.title}
          </p>
        </header>

        <div className="card-content">
          <div className="content">

            {this.state.prefix &&

              <p>{this.state.prefix}</p>

            }

            <label htmlFor={`search_${this.state.title}`}>Keywords:</label>
            <input id={`search_${this.state.title}`} value={this.state.keywords} onChange={this.handleKeywordsUpdate} onKeyPress={this.handleReturnKeyPressed} />

          </div>
        </div>

        <footer className="card-footer">
          <a href={`#search_button_${this.state.title}`} className="card-footer-item" onClick={this.handleSearchClick}>{`Search ${this.state.title}`}</a>
        </footer>

      </div>
      
    );
    
  }
  
  
  
  
}

export default Search;