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
import Gas from "../Gas/gas";

const styles = {
  card: {
    maxWidth: 345,
    marginLeft: 'auto', 
    marginRight: 'auto'
  },
  media: {
    height: 140
  }
};
function GasCard(props) {
  const { classes, station, address, city, state, regular } = props;
  console.log ("gas props", props.address)
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        //   image="https://images.unsplash.com/photo-1486330071120-ba4e79e49431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
          //   image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1308&q=80"
        //   image="https://images.unsplash.com/photo-1446436975449-d93bd4cebfcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
        image="https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {station}
          </Typography>
          <Typography component="p">
            {address}
            <br />
            {city}, {state} <br />
            Regular: $ {regular}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          More Stations
        </Button>
      </CardActions>
    </Card>
  );
}

GasCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GasCard);
// function GasCard(props) {
//     const { classes, airline } = props;
//     const bull = <span className={classes.bullet}>•</span>;

//     return (
//         <Card className={classes.card}>
//             <CardContent>
//                 <Typography variant="h5" component="h2">
//                     Station:
//                     {station}<br />
//                 </Typography>
//                 <br />
//                 <Typography component="p">
//                 address<br />
//                 city, state <br />
//                 Regular: $
//                     {address}<br />
//                     {city}, {state} <br />
//                     Regular: $ {regular}
//                 </Typography>
//             </CardContent>
//             <CardActions>
//             <Button size="small"></Button>
//             </CardActions>
//         </Card>
//     );
// }

// GasCard.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(GasCard);
