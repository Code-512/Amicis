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
  const { classes } = props;
    
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

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="When ya goin'?"
        type="date"
        defaultValue=""
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
};

export default withStyles(styles)(DatePickers);