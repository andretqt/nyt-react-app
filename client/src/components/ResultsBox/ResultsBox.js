import React, { Component } from 'react';
import axios from "axios";
import Result from "../Result/Result";
import resultsArray from "../../App";
console.log(resultsArray);
class ResultsBox extends Component {
    
    render() {
        return (
            <div className="ResultsBox">
                <h2>Results</h2>
                <div className="searchResults">
                    <Result  title={"titleeeee"} onClickFunction={this.saveArticle} />
                </div>
            </div>
        )
    }
}

export default ResultsBox;
