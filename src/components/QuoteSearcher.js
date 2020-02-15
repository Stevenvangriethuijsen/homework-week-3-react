import React from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends React.Component {
  state = {
    quotes: [],
    count: 0,
    fetching: true
  };

  componentDidMount = async () => {
    const response = await fetch(
      "https://quote-garden.herokuapp.com/quotes/search/tree"
    );
    const parsedResponse = await response.json();
    // console.log("parsedresponde from Cdidmount", parsedResponse);
    const quotesList = parsedResponse.results;
    const quotesCount = parsedResponse.count;
    // console.log("quoteslist from cdidmount", quotesList);
    this.setState({ fetching: false, quotes: quotesList, count: quotesCount });
  };
  render() {
    if (this.state.fetching) {
      return <h3>Loading...</h3>;
    } else if (this.state.count === 0) {
      return <h3>Nothing found that matches your parameters</h3>;
    } else {
      // console.log("logging state quotes from render", this.state.quotes);
      return this.state.quotes.map(object => {
        // console.log(object);
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
}
