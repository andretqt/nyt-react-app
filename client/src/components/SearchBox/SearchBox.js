import React from "react";
import "./SearchBox.css";
const SearchBox = (props) => {
    // const grabValues = (e) => {
    //     e.preventDefault();
        
    //     var searchObject = {
    //         topic: document.getElementById("topic").value.trim(),
    //         startYear: document.getElementById("start").value.trim(),
    //         endYear: document.getElementById("end").value.trim()
    //     };
    //     return searchObject;
    // };
    return (
        <div className="wrapperSearchBox">
            <h2>Search</h2>
            <div>
                <form>
                    <label>Topic</label> 
                    <br/>
                    <input type="text" id="topic"></input>
                    <label>Start Year</label>
                    <br/>
                    <input type="text" id="start"></input>
                    <label>End Year</label>
                    <br/>
                    <input type="text" id="end"></input>
                    <input type="submit" value="submit" id="submit" onClick={props.onClickFunction}></input>
                </form>
            </div>
        </div>
    )
}

export default SearchBox