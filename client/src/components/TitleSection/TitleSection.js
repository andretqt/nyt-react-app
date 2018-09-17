import React, { Component } from 'react';
import "./TitleSection.css"
class TitleSection extends Component {
    componentWillMount() {
        console.log("component gonna mount")
    }
    render() {
        return (
            <div className="wrapperTitleSection">
                <h1>New York Times Article Scrubber</h1>
                <p>Search for and annotate articles of interest!</p>
            </div>
        )
    }
    componentDidMount() {
        console.log("component just mounted")
    }
    
}

export default TitleSection;