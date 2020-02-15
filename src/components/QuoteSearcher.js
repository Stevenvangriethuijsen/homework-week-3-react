import React from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends React.Component {
  state = {
    quotes: []
  };

  componentDidMount = async () => {
    const response = await fetch(
      "https://quote-garden.herokuapp.com/quotes/search/tree"
    );
    const parsedResponse = await response.json();
    console.log("parsedresponde from Cdidmount", parsedResponse);
    const quotesList = parsedResponse.results;
    console.log("quoteslist from cdidmount", quotesList);
    this.setState({ loading: false, quotes: quotesList });
  };
  render() {
    console.log("logging state quotes from render", this.state.quotes);
    return this.state.quotes.map(object => {
      console.log(object);
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
