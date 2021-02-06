import React from "react";
import "./WorkMinCount.css";

export class WorkMinCount extends React.Component {
    render() {
        return (<input
                    type="number"
                    min="0"
                    max="59"
                    name="minutes"
                    className="WorkMinCount">
                </input>);
    }
}