import './App.css';
import React from "react";
import { CalculateButton } from '../CalculateButton/CalculateButton';
import { TimeSheet } from '../TimeSheet/TimeSheet';
import { HourlyRateInput } from '../HourlyRateInput/HourlyRateInput';

let key = 0;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { rows: [{ hours: '',
                            minutes: '',
                            id: key,
                          }],
                   totalPay: '',
                  };
    
    this.updateInput = this.updateInput.bind(this);
    this.updateRows = this.updateRows.bind(this);


  }

  updateInput(stateObjectKey, inputValue) {
    let newInput = {[stateObjectKey] : inputValue};
    let firstRow = this.state.rows[key];
    let firstRowClone = { ... firstRow };
    let newRow = { ... firstRowClone, ...newInput };
    this.setState({ rows: [newRow] }); 
    
  }

  updateRows(addedRows) {
    this.setState({ rows: addedRows });
  }



  render() {
    return (
      <div className="App">
        <h1>Monthly Pay Calculator</h1>
          <TimeSheet  rows={this.state.rows} 
                      updateRows={this.updateRows} 
                      updateInput={this.updateInput}
                      />
          <HourlyRateInput />
          <CalculateButton /> 
      </div>
    );
  }
}

export default App;
