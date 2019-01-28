import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Air from "../Air/air";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

function AirSimpleCard(props) {
  const { classes, airline, price, time } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        //   image="https://images.unsplash.com/photo-1533751784796-c6c129c710db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
          //   image="https://images.unsplash.com/photo-1525406580688-29f75b5e4c97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          image="https://images.unsplash.com/photo-1512502600-e4aaa316250d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Airline: {airline}
          </Typography>
          <Typography component="p">
            Flight price: USD ${price}
            <br />
            Travel Time: {time}
            <br /><br />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Book Flight
        </Button>
      </CardActions>
    </Card>
  );
}

AirSimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AirSimpleCard);
