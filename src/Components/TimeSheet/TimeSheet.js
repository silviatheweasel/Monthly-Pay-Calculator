import React from "react";
import './TimeSheet.css';
import { TimeSheetRow } from '../TimeSheetRow/TimeSheetRow';

let keyIndex = 0;

export class TimeSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rows: [{ hours: 0,
                            minutes: 0,
                            key: 0
                            }]
                    }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        keyIndex++;
        const newRow = { hours: 1, 
                         minutes: 30, 
                         key: keyIndex,
                        };      
        this.state.rows.push(newRow);
        this.setState ({ rows: this.state.rows });
    }

    render() {
        return (
            <div className="TimeSheet" >
                <ul id="TimeSheet">
                    {this.state.rows.map(row => <TimeSheetRow key={row.key} hours={row.hours} minutes={row.minutes} />)}
                </ul>
                <button className="addRow" 
                        onClick={this.handleClick}
                >
                            <i className="fas fa-plus-circle"></i> 
                            Add Row
                </button>
            </div>          
        )
    }
}