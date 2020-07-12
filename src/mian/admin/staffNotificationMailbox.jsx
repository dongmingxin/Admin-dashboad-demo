import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
// import MailIcon from '@material-ui/icons/Mail';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme)=>({
    activeLink: {
        color: 'white',
        backgroundColor: '#81d4fa'
    },
}))


const NotificationMailBox = (props) => {
    const { mailBar, handleSeletedMail, selectedMail, displayContnet } = props
    const classes = useStyles()

    return (
        <React.Fragment> 
            <Grid item container xs={4}>
                <Container>
                    <ul className="list-group">
                        {mailBar.map(m=> (
                            <li className={ m.title === selectedMail? `list-group-item ${classes.activeLink}` : `list-group-item` }
                                key={m.title} 
                                 onClick={() => handleSeletedMail(m)}>
                                {m.title}
                            </li>
                        ))}
                    </ul>
                </Container>
            </Grid>
            <Grid item container xs={8} component={Paper}>
                {displayContnet(selectedMail)}
            </Grid>
        </React.Fragment> 
     );
}
 
export default NotificationMailBox;