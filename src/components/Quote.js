import React from "react";
import "./Quote.css";

export default class Quote extends React.Component {
  state = {
    numlikes: 0
  };
  render() {
    return (
      <div className="quoteWrapper">
        <div className="quoteText">
          <p>{this.props.text}</p>
        </div>
        <div className="quoteAuthor">
          By: {this.props.author}
          <button>:)</button>
          <button>:(</button>
        </div>
      </div>
    );
  }
}
