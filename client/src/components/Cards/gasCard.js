import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Gas from "../Gas/gas"

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function GasSimpleCard(props) {
    const { classes, airline } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Station: 
                    {/* {station} */}<br />
                </Typography>
                <br />
                <Typography component="p">
                address<br />
                city, state <br />
                Regular: $ <br />
                    {/* {address}<br />
                    {city}, {state} <br />
                    Regular: $ {regular} */}
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
}

GasSimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GasSimpleCard);