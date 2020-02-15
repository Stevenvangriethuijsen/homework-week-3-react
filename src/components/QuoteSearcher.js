import React from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends React.Component {
  state = {
    quotes: []
  };

  render() {
    return this.state.quotes.map(object => {
      return (
        <Quote
          text={object.quoteText}
          author={object.quoteAuthor}
          key={object._id}
        />
      );
    });
  }
}
