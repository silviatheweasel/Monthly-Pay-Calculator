import './App.css';
import React from "react";
import { CalculateButton } from '../CalculateButton/CalculateButton';
import { HourlyRateInput } from '../HourlyRateInput/HourlyRateInput';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { rows: [{ hours: 0,
                            minutes: 0,
                          }, { hours: 0,
                            minutes: 0,
                          }, { hours: 0,
                            minutes: 0,
                          }],
                    hourlyRate: ''
                  };
    
    this.addRow = this.addRow.bind(this);
  }

  handleChange(i, event) {
    let rows = this.state.rows;

    if (event.target.name === "hours") {
      rows[i].hours = event.target.value;

      this.setState({ rows: rows });
    } else if (event.target.name === "minutes") {
      rows[i].minutes = event.target.value;

      this.setState({ rows: rows });
    }  
  }

  renderRows() {
    var context = this;

         return this.state.rows.map((row,i) => {
            return ( <li className="row" key={"row" + i}>
              <span>
                <input  type="number"
                        name="hours"
                        min="0"
                        value={row.hours}
                        onChange={context.handleChange.bind(context,i)}                  
                  /> hour
              </span>
              <span>
                  <input  type="number"
                          name="minutes"
                          min="0"
                          max="59"
                          value={row.minutes}
                          onChange={context.handleChange.bind(context,i)}                        
                  /> minute
              </span>
              <button onClick={context.deleteRow.bind(context,i)}><i class="fas fa-minus"></i></button>
            </li>)
          }) 
  }

  addRow() {
    const newRow = {  hours: 0,
                      minutes: 0,
                    };
    const rows = this.state.rows;
    rows.push(newRow);
    this.setState({ rows: rows });
  }

  deleteRow(i) {
    let rows = this.state.rows;
    rows.splice(i, 1);
    this.setState({ rows: rows});
  }

  addHourlyRate() {

  }

  render() {
    return (
      <div className="App">
        <h1>Monthly Pay Calculator</h1>
        <ul>
          {this.renderRows()}
        </ul>
        <button className="addRow" 
                        onClick={this.addRow}
                >
                            <i className="fas fa-plus-circle"></i> 
                            Add Row
                </button>
          <HourlyRateInput />
          <CalculateButton /> 
      </div>
    );
  }
}

export default App;
