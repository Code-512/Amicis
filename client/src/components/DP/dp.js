import React from "react";
// import {DatePicker} from "material-ui-custom-datepicker";


class myDatePicker extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: new Date()
    }
  }  
  
  handleChange = (event, value) => {
    this.setState({value});
  }
    
  render(){
    return (
      <DatePicker
        name="birthDate"
        value={this.state.value}
        onChange={this.handleChange}  
        floatingLabelText="Birthday"
        autoOk
        cancelLabel="Back"
        minDate={new Date(1900, 0, 1)}
        maxDate={new Date(2100, 0, 1)}
      />
    );
  }
}

export default myDatePicker