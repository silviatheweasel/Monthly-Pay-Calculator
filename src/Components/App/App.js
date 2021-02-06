import './App.css';
import React from "react";
import { CalculateButton } from '../CalculateButton/CalculateButton';
import { HourlyRateInput } from '../HourlyRateInput/HourlyRateInput';
import { TimeSheet } from '../TimeSheet/TimeSheet';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: [{ hours: 0,
                            minutes: 0,
                            key: 0
                          }],
                   hourlyRate: 0,
                   totalPay: 0,
                  };
  }

  hourCount(newHourCount) {
    this.setState({ hour: newHourCount })
  }

  render() {
    return (
      <div className="App">
        <h1>Monthly Pay Calculator</h1>
          <TimeSheet />
          <HourlyRateInput />
          <CalculateButton /> 
      </div>
    );
  }
}

export default App;
