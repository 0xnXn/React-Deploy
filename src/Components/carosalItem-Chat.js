
import React from 'react';
import { Grid, ListItem,  Container, Divider } from '@material-ui/core';
import '../App.css'

import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import 'react-vertical-timeline-component/style.min.css';
import Personal from '../Images/personal.jpg'
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";


const Chat = (props) => {



    return (
        <div>
            <Container fixed className="workcont">

                <Grid container spacing={2}>
                    <Grid item xs={13}>
                        <Grid container justify="center" spacing={5}>

                            <Grid key={1} item>
                                <div className="chatlist">
                                    <h1 className="basictext">Contact</h1>
                                    <Divider />
                                    <List component="nav" aria-label="main mailbox folders">
                                        <ListItem button  component="a" href="https://www.linkedin.com/in/nixon-p-52942b133/">
                                            <ListItemIcon>
                                                <AiFillLinkedin size={40} />
                                            </ListItemIcon>
                                            <ListItemText primary="Linkedin" />
                                        </ListItem>
                                        <ListItem button component="b" href="https://www.instagram.com/hello.iamnixon/">
                                            <ListItemIcon>
                                                <AiFillInstagram size={40} />
                                            </ListItemIcon>
                                            <ListItemText primary="Instagram" />
                                        </ListItem>
                                        <ListItem button component="c" href="https://www.facebook.com/nixon.paulson.5/">
                                            <ListItemIcon>
                                                <AiOutlineFacebook size={40} />
                                            </ListItemIcon>
                                            <ListItemText primary="Facebook" />
                                        </ListItem>
                                        <ListItem button component="d" href="  https://github.com/0xnXn">
                                        
                                            <ListItemIcon>
                                                <AiFillGithub size={40} />
                                            </ListItemIcon>
                                            <ListItemText primary="Github" />
                                        </ListItem>
                                        <ListItem button component="e" href="https://twitter.com/nixon_paulson">
                                            <ListItemIcon>
                                                <AiFillTwitterCircle size={40} />
                                            </ListItemIcon>
                                            <ListItemText primary="Twitter" />
                                        </ListItem>
                                    </List>
                                    <Divider />
                                    <List component="nav" aria-label="secondary mailbox folders">


                                    </List>
                                </div>
                            </Grid>
                            <Grid key={2} item>
                                <div className="wrap">


                                <h1 className="basictext" style={{marginTop:"19px",textAlign:"center"}}>a little about me</h1>
                                    <Divider />
                                    <div>
                                    <img src={Personal}  />
                                    <p className="bodytext" style={{textAlign:"center"}}> I am a Mumbai based software engineer  with an interest  in Web-Technology,AI and Behavioural Psychology.  </p>
                                    </div>

                                </div>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Container>



            <div>

            </div>

        </div>

    )
}

export default Chat