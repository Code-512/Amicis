import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function DatePickers(props) {
  const { classes, value, handleChange } = props;
    
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: new Date()
  //   }
  // }  
  // this.state = {
  //     value: new Date()
  //   }
  
  
  // handleChange = (event, value) => {
  //   this.setState({value});
  // }

 

  // --parent (function that updates state, like above - pass down as a prop; a submit btn lives here, it reads state and does something)
  //    --form1 (this will run that function and pass back info)
  //    --form2
  //    --etc

  return (
    <form className={classes.container} noValidate >
      <TextField
        id="date"
        label="When ya goin'?"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
};

export default withStyles(styles)(DatePickers);