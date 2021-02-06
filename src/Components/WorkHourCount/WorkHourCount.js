import React from 'react';
import './WorkHourCount.css';

export class WorkHourCount extends React.Component {
    render() {
        return (<input
                    type="number"
                    min="0"
                    name="hours"
                    className="WorkHourCount">
                </input>)
    }
}