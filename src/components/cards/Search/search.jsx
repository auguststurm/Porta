import React from 'react';

import './search.sass';


function CardTitle(props) {
  
  let output = '';
  
  if (props.prefix === '') {
    output = <p className="card-header-title">Search: {props.title}</p>
  } else {
    output = <p className="card-header-title">{props.title} » {props.prefix}</p>
  }
  return output;
}


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
    const sanitizedPrefix = (this.state.prefix !== '') ? this.state.prefix.replace(/\s/g, '+') + '+' : '';
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
          <CardTitle title={this.state.title} prefix={this.state.prefix} />
        </header>

        <div className="card-content">
          <div className="content">

            <label htmlFor={`search_${this.state.title}`}>Keywords:</label>
            <input id={`search_${this.state.title}_${this.state.prefix}`} value={this.state.keywords} onChange={this.handleKeywordsUpdate} onKeyPress={this.handleReturnKeyPressed} />

          </div>
        </div>

        <footer className="card-footer">
          <div className="card-footer-item" onClick={this.handleSearchClick}>{`Search ${this.state.title}`}</div>
        </footer>

      </div>
      
    );
    
  }
  
  
  
  
}

export default Search;