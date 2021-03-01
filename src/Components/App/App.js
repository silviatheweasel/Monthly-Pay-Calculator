import './App.css';
import React from "react";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { rows: [{ hours: 0,
                            minutes: 0,
                          }],
                    hourlyRate: 25
                  };
    
    this.addRow = this.addRow.bind(this);
    this.addHourlyRate = this.addHourlyRate.bind(this);
    this.handleClick = this.handleClick.bind(this);

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
                        max="60"
                        className="inputField"
                        value={row.hours}
                        onChange={context.handleChange.bind(context,i)}                  
         /> hour
              </span>
              <span>
                  <input  type="number"
                          name="minutes"
                          min="0"
                          max="59"
                          className="inputField"
                          value={row.minutes}
                          onChange={context.handleChange.bind(context,i)}                        
                  /> minute
              </span>
              <button onClick={context.deleteRow.bind(context,i)}
                      className="deleteRowButton"
              ><i class="fas fa-trash-alt"></i></button>
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

  addHourlyRate(event) {
    this.setState( { hourlyRate: event.target.value });
  }

  calculatePay() {
    const hoursArray = this.state.rows.map(row => parseInt(row.hours));
    const minutesArray = this.state.rows.map(row => parseInt(row.minutes));
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let totalHours = hoursArray.reduce(reducer);
    let totalMinutes = minutesArray.reduce(reducer);
    let totalPay = ((totalHours + totalMinutes / 60) * this.state.hourlyRate).toFixed(2); 
    return totalPay;
  }

  calculateHours() {
    const hoursArray = this.state.rows.map(row => parseInt(row.hours));
    const minutesArray = this.state.rows.map(row => parseInt(row.minutes));
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let totalHours = hoursArray.reduce(reducer);
    let totalMinutes = minutesArray.reduce(reducer);
    return `You worked ${totalHours} hours and ${totalMinutes} minutes this month.`

  }

  handleClick() {
    const totalPay = this.calculatePay();
    const displaySentence = this.calculateHours() + " Your total pay this month is £" + totalPay;
    document.getElementById("calculationDisplay").innerHTML =  displaySentence;
  }

  render() {
    return (
      <div className="App">
        <h1>Monthly Pay Calculator</h1>
        <div className="rows">
          <ul>
            {this.renderRows()}
          </ul>
          <button className="addRow" 
                  onClick={this.addRow}
          >
              <i className="fas fa-plus-circle"></i> Add Row
          </button>
        </div>
        <div className="HourlyRateInput">
            My hourly rate is £
            <input  name="HourlyRate"
                    type="number"
                    className="inputField"
                    value={this.hourlyRate}
                    defaultValue="25"
                    min="0"
                    max="1000"
                    onChange={this.addHourlyRate}
            >
            </input>
        </div>
          <button className="CalculateButton" 
                  onClick={this.handleClick}
          >
                Calculate
          </button>
          <p id="calculationDisplay">
          </p>
      </div>
    );
  }
}
