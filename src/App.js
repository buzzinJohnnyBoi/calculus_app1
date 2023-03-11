import React, { Component } from "react";
import Input from "./Components/input";
import Output from "./Components/output";
import Select from "./Components/select";
import './Components/components.css';

class App extends Component {
    state = { 
      cartesian_vector: false,
      inputs: [
          {
              id: 1, 
              values: [0, 0, 0],
              axis: ["x", "y", "z"] 
          },
          {
              id: 2, 
              values: [0, 0, 0],
              axis: ["x", "y", "z"] 
          },
      ],
      inputsMD: [
        {
            id: 1, 
            values: [0, 0],
            val_types: ["mag", "dir"] 
        },
        {
            id: 2, 
            values: [0, 0],
            val_types: ["mag", "dir"] 
        },
    ],
      operation: "add"
  } 

  inputChange = (event, id, index) => {
      var val = event.target.value;
      const regex = /[^0-9.-]/g;
      event.target.value = val.replace(regex, "");
      var inputs;
      if(this.state.cartesian_vector) {
        inputs = this.state.inputs;
      }
      else {
        inputs = this.state.inputsMD;
      }
      if(event.target.value !== "") {
          inputs[id - 1].values[index] = parseFloat(event.target.value);
      }
      else {
          inputs[id - 1].values[index] = 0;
      }
      if(this.state.cartesian_vector) {
        this.setState({inputs: inputs});
      }
      else {
        this.setState({inputsMD: inputs});
      }
  }
  selectChange = (event) => {
    this.setState({ operation: event.target.value })
  }
  vectorTypeChange = (event) => {
    if(event.target.value === "C-V") {
      this.setState({ cartesian_vector: true });
    }
    else {
      this.setState({ cartesian_vector: false });
    }
  }
  render() { 
    return (
      <div>
        <h1>Vectors</h1>
        <select onChange={this.vectorTypeChange}>
            <option value="M-D">Magnitute and Direction</option>
            <option value="C-V">Cartesian Vectors</option>
        </select>
        <Input 
          inputs={this.state.inputs}
          inputsMD={this.state.inputsMD}
          cartesian_vector={this.state.cartesian_vector}
          inputChange={this.inputChange}
        />
        <Select vect_type={this.state.cartesian_vector} selectChange={this.selectChange}/>
        <Output 
          vectors={this.state.inputs}
          vectorsMD={this.state.inputsMD}
          vect_type={this.state.cartesian_vector}
          operation={this.state.operation}
        />
      </div>
    );
  }
}
 
export default App;
