import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'; 
import TopBar from './topBar';
import NotificationMailBox from './staffNotificationMailbox';
import { getStaff } from './services/staffService';
import {displayAnnouncement, DisplayInbox, displaySend, displayMailContent } from './displayMailContent';


const styles = theme =>({
    staffPageContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#eaeff1',
    },
    titleContainer: {
        marginTop: '25px',
        textAlign: 'center'
    },
    myInfoContainer: {
        marginTop: '60px',
        wordWrap: 'break-word',
    },
    myInfoTable: {
        marginTop: '10px',
    },
    myMailContianer: {
        marginTop: '60px',
        wordWrap: 'break-word',
    },
    img: {
        height:'200px',
        width: '180px',
    },
    mailBoxTitle: {
        width: '100%'
    }
})

class StaffNotification extends Component {
    state = { 
        staff: {},
        mailBar:[{title: 'Announcements'},
                 {title: 'Inbox'},
                 {title: 'Send'},
                ],
        selectedMail: 'Announcements',
        currrentMail: {},
     }

     async componentDidMount() {
        const staff = await getStaff('5ee6dd14fc7f952ad892c4d7') 
        this.setState({ staff })
     }

     handleSeletedMail = (e) => {
         this.setState({selectedMail: e.title})
     }

     handleMailClick = (content) => {
         const selectedMail = 'mailContent'
         const currrentMail = content
         this.setState({ selectedMail, currrentMail })
     }

     handleMailDelete = () => {
         console.log('mail deleted')
     }

     displayContnet = (selectedMail) => {
        if(selectedMail==='Send') {
            return displaySend()
        } else if (selectedMail==='Inbox'){
            return DisplayInbox(this.state.staff, this.handleMailClick, this.handleMailDelete)
        } else if ( selectedMail==='mailContent') {
            return displayMailContent(this.state.currrentMail)
        }else{
            return displayAnnouncement()
        }

    }
     
    render() { 
        const {classes} = this.props; 
        return ( 
            <div className={classes.staffPageContainer}>
            <Grid container justify='center'>
              <TopBar />
                <Grid item container xs={10}>
                    <Container className={classes.titleContainer}>
                        <h1>Welcome Mingxin Dong</h1>
                    </Container>
                </Grid>
                <Grid item container xs={3}>
                    <TableContainer className={classes.myInfoContainer}>
                        <img className={classes.img}
                        src={this.state.staff.avatar}
                        alt="new"
                        />
                        <Table className={classes.myInfoTable}>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Name:</TableCell>
                                    <TableCell>{this.state.staff.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Username/Email Address:</TableCell>
                                    <TableCell>{this.state.staff.username}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>My Phone Number:</TableCell>
                                    <TableCell>{this.state.staff.phone}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell >
                                    <Link style={{textDecoration:"none"}} to={`staff/${this.state.staff._id}`}>
                                        <Button>
                                            Edit
                                        </Button>
                                    </Link>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item container xs={7} className={classes.myMailContianer}>
                    <NotificationMailBox 
                        mailBar={this.state.mailBar}
                        handleSeletedMail={this.handleSeletedMail}
                        selectedMail={this.state.selectedMail}
                        displayContnet={this.displayContnet}
                    />
                </Grid>
            </Grid>
        </div>
         );
    }
}
 
export default withStyles(styles)(StaffNotification);