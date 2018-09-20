import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import TitleSection from "./components/TitleSection/TitleSection"
import SearchBox from "./components/SearchBox/SearchBox";
import Result from "./components/Result/Result"
// const apiKey = "834af163c5ea449a9f76a402925a5872";
const searchResults = [
  {title: "article number one"},
  {title: "article number two"}
];
class App extends Component {
  grabValues = (e) => {
    e.preventDefault();
    var searchObject = {
      topic: document.getElementById("topic").value.trim(),
      startYear: document.getElementById("start").value.trim(),
      endYear: document.getElementById("end").value.trim()
    };
    console.log(searchObject);
    this.setState({ searchObject: searchObject })
    //api call here
    console.log("just did the api call");
    var baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    baseURL += "q=" + document.getElementById("topic").value.trim();
    baseURL += "&api-key=834af163c5ea449a9f76a402925a5872";
    baseURL += "&begin_date=" + document.getElementById("start").value.trim() + "0101";
    baseURL += "&end_date=" + document.getElementById("end").value.trim() + "1231";
    var resultsArray = [];
    console.log(baseURL);
    axios.get(baseURL)
    .then(json =>
      json.data.response.docs.map(
        doc => resultsArray.push(
          {
            title: doc.headline.main,
            date: doc.pub_date,
            url: doc.web_url
          }
        )
      )
    );
    console.log(resultsArray);
    //gotta create a title, date, url object
   

  };
  saveArticle = (e) => {
    e.preventDefault();
    console.log("you just saved this article");
  };

  state = {
    searchObject: {},
    searchResults: searchResults
  }
  
  render() {
    return (
      <div>
        <TitleSection />
        {/* in this div there will be three components: */}
        {/* Search */}
        {/* Results */}
        {/* Saved Articles */}
        <SearchBox onClickFunction={this.grabValues} />
        <div className="ResultsBox">
          <h2>Results</h2>
          <div className="searchResults">
            {this.state.searchResults.map((result, index) => (
              <Result key={index} title={result.title} onClickFunction={this.saveArticle}/>
            ) )}
          </div>
        </div>

        <div>
          topic is: {this.state.searchObject.topic}
          <br />
          start year is: {this.state.searchObject.startYear}
          <br />
          end year is: {this.state.searchObject.endYear}
        </div>
      </div>
    );
  }
}

export default App;
