import React from "react";

export default class Quote extends React.Component {
  render() {
    return (
      <div className="quoteWrapper">
        <div className="quoteText">
          <p>{this.props.text}</p>
        </div>
        <div className="quoteAuthor">
          <p>By: {this.props.author}</p>
        </div>
      </div>
    );
  }
}
