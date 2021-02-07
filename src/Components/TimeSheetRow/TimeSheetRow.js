import React from 'react';
import './TimeSheetRow.css';

export class TimeSheetRow extends React.Component {
    constructor(props) {
        super(props);

        
        
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        let inputValue = event.target.value;
        let stateObjectKey = event.target.name;
        this.props.updateInput(stateObjectKey, inputValue);     
    }

    render() {
        return (
            <li className="row">
                <span>
                   <input defaultValue="0"
                          type="number"
                          name="hours"
                          min="0"
                          onChange={this.handleChange}
                          
                    /> hour
                </span>
                <span>
                    <input defaultValue="0"
                           type="number"
                           name="minutes"
                           min="0"
                           max="59"
                           onChange={this.handleChange}                         
                    /> minute
                </span>
            </li>
        )
    }
}