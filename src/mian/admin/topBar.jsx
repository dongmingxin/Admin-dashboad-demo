import React from 'react';
import Grid from '@material-ui/core/Grid';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
    titleIcon: {
        height: '50px',
        width: '50px'
    },
    topBarColor: {
        backgroundColor: '#90caf9',
        alignItems: 'center'
    },
    title: {
        fontWeight:'25px'
    }
}))

const TopBar = () => {
    const classes = useStyles();
    return ( 
        <Grid item container xs={12} className={classes.topBarColor} >
            <Grid item xs={false} sm={1}></Grid>
            <Grid item xs={6} sm={1}><PeopleAltIcon className={classes.titleIcon}/></Grid>
            <Grid item xs={4} sm={10} className={classes.title}>
                <Typography variant="h5">JR Staff Member</Typography>
            </Grid>
        </Grid >
     );
}
 
export default TopBar;