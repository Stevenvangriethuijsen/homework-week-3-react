import React from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends React.Component {
  state = {
    quotes: [],
    count: 0,
    fetching: false,
    searchParam: ""
  };

  // componentDidMount = async () => {
  //   const response = await fetch(
  //     "https://quote-garden.herokuapp.com/quotes/search/tree"
  //   );
  //   const parsedResponse = await response.json();
  //   console.log("parsedresponde from Cdidmount", parsedResponse);
  //   const quotesList = parsedResponse.results;
  //   const quotesCount = parsedResponse.count;
  //   // console.log("quoteslist from cdidmount", quotesList);
  //   const quotes = quotesList.map(quote => {
  //     return {
  //       ...quote,
  //       quoteStyling: "nostyle"
  //     };
  //   });
  //   this.setState({ fetching: false, quotes: quotes, count: quotesCount });
  // };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ searchParam: event.target.value });
  };

  handleSubmit = event => {
    this.setState({ fetching: true });
    console.log("is handle submit being called");
    event.preventDefault();
    return fetch(
      `https://quote-garden.herokuapp.com/quotes/search/${this.state.searchParam}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const quoteList = data.results;
        const quoteCount = data.count;
        const quoteandstyle = quoteList.map(quote => {
          return {
            ...quote,
            quoteStyling: "nostyle"
          };
        });
        this.setState({
          fetching: false,
          quotes: quoteandstyle,
          count: quoteCount
        });
      });
  };

  render() {
    if (this.state.fetching) {
      return <h3>Loading...</h3>;
    } else {
      // console.log("logging state quotes from render", this.state.quotes);
      return (
        <div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input type="text" onChange={this.handleChange} />
              </label>
              <input
                type="submit"
                value="Search!"
                onClick={this.handleSubmit}
              />
            </form>
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
