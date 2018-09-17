import React from "react";
import "./Result.css";

const Result = (props) => (
    <div className="wrapperResult">
        <div className="titleResult">
            {props.title}
        </div>
        <button className="saveButton" onClick={props.onClickFunction}>Save</button>
    </div>
);

export default Result;