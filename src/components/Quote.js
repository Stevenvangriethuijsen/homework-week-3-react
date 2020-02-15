import React from "react";
import "./Quote.css";

export default class Quote extends React.Component {
  state = {
    quoteStyling: this.props.style
  };

  dislike = () => {
    console.log("test idquote", this.props.quoteId);
    this.props.disliked(this.props.quoteId);
  };
  like = () => {
    this.props.liked(this.props.quoteId);
  };
  render() {
    return (
      <div className="quoteWrapper">
        {/* {console.log(this.props.quoteId, "checking quoteid")} */}
        <div className="quoteText">
          <p className={this.props.style}>{this.props.text}</p>
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
