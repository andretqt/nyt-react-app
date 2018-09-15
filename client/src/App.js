import React, { Component } from 'react';
import './App.css';
import TitleSection from "./components/TitleSection/TitleSection"
import SearchBox from "./components/SearchBox/SearchBox";

class App extends Component {
  grabValues = (e) => {
    e.preventDefault();
    var searchObject = {
        topic: document.getElementById("topic").value.trim(),
        startYear: document.getElementById("start").value.trim(),
        endYear: document.getElementById("end").value.trim()
    };
    console.log(searchObject);
    this.setState({searchObject: searchObject})
};
  
  state = {
    searchObject: {}
  }
  
  render() {
    return (
      <div>
        <TitleSection/>
        <div>
          {/* in this div there will be three components: */}
          {/* Search */}
          {/* Results */}
          {/* Saved Articles */}
          <SearchBox onClickFunction={this.grabValues}/>
        </div>
        <div>
          topic is: {this.state.searchObject.topic} 
          <br/>
          start year is: {this.state.searchObject.startYear}
          <br/>
          end year is: {this.state.searchObject.endYear}
        </div>
      </div>
    );
  }
}

export default App;
