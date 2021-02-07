import React from "react";
import './TimeSheet.css';
import { TimeSheetRow } from '../TimeSheetRow/TimeSheetRow';


export class TimeSheet extends React.Component {
    constructor(props) {
        super(props);
        
        // this.handleClick = this.handleClick.bind(this);
      
    }
    
    // handleClick() {
    //     let newRow = {  hours: '', 
    //                     minutes: '', 
    //                     id: key,
    //                  };   
    //     key++;   
    //     this.props.rows.push(newRow);
    //     this.props.updateRows(this.props.rows);
    // }



    render() {
        return (
            <div className="TimeSheet" >
                <ul id="TimeSheet">
                    {this.props.rows.map(row => 
                    <TimeSheetRow   id={row.id} 
                                    hours={row.hours} 
                                    minutes={row.minutes}
                                    updateInput={this.props.updateInput}
                                    
                    />)}
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