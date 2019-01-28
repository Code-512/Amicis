import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: 345,
    
  }
});

function PaperSheet(props) {
  const {
    classes,
    driveTitle,
    driveDist,
    driveTime,
    driveCost,
    airTitle,
    airDist,
    empty
  } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          {driveTitle}
          {airTitle}
        </Typography>
        <Typography component="p">
          <br />
          Trip Distance: {driveDist}
          {airDist}
          <br />
          {driveCost}
          {empty}
          <br />
          {driveTime}
          {empty}
          <br />
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
