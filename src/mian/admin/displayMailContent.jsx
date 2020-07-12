import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/index.scss';
import Button from '@material-ui/core/Button';


export const displayAnnouncement = (Announcement) => {
    return <p>The global spread of COVID-19 is affecting every 
        one of us. At Apple, we are people first, and we do what 
        we do with the belief that technology can change lives and 
        the hope that it can be a valuable tool in a moment like this. T
        eachers are innovating to make remote lessons come alive. 
        Companies are experimenting with new ways to stay productive. 
        And medical experts can diagnose illnesses and reach millions 
        with critical updates in the blink of an eye. We are all adapting 
        responding in our own way, and Apple wants to continue to play a role 
        elping individuals and communities emerge stronger.</p>
}

export const DisplayInbox = (mail, handleMailClick, handleMailDelete) => {
    const inboxMail = mail.inboxMails
    return (
        <ul className="list-group staffPageMail" style={{width: '100%'}}>
        {inboxMail && inboxMail.map(m=> (
            <React.Fragment key={m._id}>
                <li className={`list-group-item staffPageMail__row`}>
                    <div>{m.title}</div>
                    <div>
                    <Button onClick={() => handleMailClick(m)}>Read</Button>
                    <Button onClick={handleMailDelete} color="secondary">Delete</Button>
                    </div>
                </li>
            </React.Fragment>
        ))}
    </ul>
        )
}

export const displayMailContent = (content) => {
return (
    <div className="staffPageMailContent">
        <div className="staffPageMailContent__title">{content.title}</div>
        <div className="staffPageMailContent__body">{content.message}</div>
        <div className="staffPageMailContent__sender">{`Message from: ${content.sender}`}</div>
    </div>
)
}

export const displaySend = (mail) => {
    return <p>This is send Page</p>
}