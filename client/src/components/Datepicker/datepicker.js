import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PlanTrip from '../../pages/PlanTrip';


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
  console.log('This is PlanTrip state data', PlanTrip.state);
  const { classes } = props;

    // this.setState({
    //   date: [],
    // });
    // this.props.getDate(this.state.date)


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