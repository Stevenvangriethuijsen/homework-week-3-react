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
    const quotes = quotesList.map(quote => {
      return {
        ...quote,
        quoteStyling: "nostyle"
      };
    });
    this.setState({ fetching: false, quotes: quotes, count: quotesCount });
  };
  render() {
    if (this.state.fetching) {
      return <h3>Loading...</h3>;
    } else if (this.state.count === 0) {
      return <h3>Nothing found that matches your parameters</h3>;
    } else {
      // console.log("logging state quotes from render", this.state.quotes);
      return (
        <div>
          <div>
            <h3>Liked: ... / Disliked: ...</h3>
          </div>{" "}
          {this.state.quotes.map(object => {
            // console.log(object);
            console.log(object.quoteStyling);
            return (
              <Quote
                text={object.quoteText}
                author={object.quoteAuthor}
                key={object._id}
                style={object.quoteStyling}
              />
            );
          })}
        </div>
      );
    }
  }
}
