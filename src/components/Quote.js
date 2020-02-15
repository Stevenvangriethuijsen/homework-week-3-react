import React from "react";
import "./Quote.css";

export default class Quote extends React.Component {
  state = {
    quoteStyling: this.props.style
  };

  dislike = () => {
    this.setState({ quoteStyling: "disliked" });
  };
  like = () => {
    this.setState({ quoteStyling: "liked" });
  };
  render() {
    return (
      <div className="quoteWrapper">
        <div className="quoteText">
          <p className={this.state.quoteStyling}>{this.props.text}</p>
        </div>
        <div className="quoteAuthor">
          By: {this.props.author}
          <button onClick={this.like}>:)</button>
          <button onClick={this.dislike}>:(</button>
        </div>
      </div>
    );
  }
}
