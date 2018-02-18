import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    search: "",
    numRecs: "",
    startYear: "",
    endYear: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.search) {
      alert("Please add search criteria");
    } 

    this.setState({
      search: "",
      numRecs: "",
      startYear: "",
      endYear: ""
    });
  };

  handleFormClear = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    this.setState({
      search: "",
      numRecs: "",
      startYear: "",
      endYear: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form className="form">
        <label htmlform="search">Search:</label>
          <input
            value={this.state.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder=""
          />
           <label htmlform="search">Number of Records to Retrieve:</label>
          <input
            value={this.state.numRecs}
            name="numRecs"
            onChange={this.handleInputChange}
            type="text"
            placeholder="5"
          />
           <label htmlform="search">Start Year (Optional):</label>
          <input
            value={this.state.startYear}
            name="startYear"
            onChange={this.handleInputChange}
            type="text"
            placeholder=""
          />
           <label htmlform="search">End Year (Optional)</label>
           <input
            value={this.state.endYear}
            name="endYear"
            onChange={this.handleInputChange}
            type="text"
            placeholder=""
          />
          <button id="searchBtn" onClick={this.handleFormSubmit} className="btn btn-primary">
        Search
      </button>
          <button id="clearBtn"  onClick={this.handleFormClear} className="btn btn-primary">Clear</button>
        </form>
      </div>
    );
  }
}

export default Form;
