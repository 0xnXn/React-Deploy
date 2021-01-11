import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid, ListItem, Paper, Container, Box, Divider, Typography, Chip } from '@material-ui/core'
import Button from 'react-bootstrap/Button'
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import '../App.css'
import CardCompo from './Card'
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdBusinessCenter } from "react-icons/md";

import { AiFillInstagram, AiFillTwitterCircle, AiOutlineFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { IoIosSchool } from "react-icons/io";

import { FaProjectDiagram } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import ModalButton from './ModalButton'











function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const Example = (props) => {
    var items = [
        {
            name: "First",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Second",
            description: "Hello World!"
        },
        {
            name: "Third",
            description: "Hello World!"
        }
    ]

    var items2 = [
        {
            name: "First2",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Second2",
            description: "Hello World!"
        },
        {
            name: "Third2",
            description: "Hello World!"
        }
    ]



    return (
        <div>

            <Carousel autoPlay={false} indicators={true} animation={"slide"} interval={40000} navButtonsAlwaysVisible={true}
                next={(next, active) => props.boxClick(next)}
                prev={(prev, active) => props.boxClick(prev)}
                index={props.currentIndex}


            >


                <Blog key={1} />
                <Work key={2} />
                <Chat key={3} />

            </Carousel>

        </div>

    )
}

const Blog = (props) => {
    var items = [
        {
            name: "YEh pahila",
            description: "kya bruh hai"
        },
        {
            name: "Yehdoosra",
            description: "world ko hello"
        }

    ]
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <div>
                <h1 className="basictext" style={{ textAlign: "center", width: "100%" }}>Recent Blogs</h1>



            </div>
            <div>

                <Divider />

                {/* <Grid container spacing={2}>
                
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={5} >
                        {items.map((item, i) => (
                            <Grid key={i} item>
                                <CardCompo key={i} item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid> */}

                {/* <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'linear-gradient(90deg, rgba(148,187,233,1) 68%, rgba(238,174,202,1) 100%)', color: 'Black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(238,174,202)' }}
                        date="Published On Jan ,2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                        icon={<MdBusinessCenter />}
                    >
                        <h3 className="vertical-timeline-element-title">Red Teaming Labs</h3>
                        <h4 className="vertical-timeline-element-subtitle">Mumbai</h4>
                        <p>
                            CyberSmithSecure Project Management, Team Leading
    </p>
                        <Chip variant="outlined" size="small" label="Cyber Security" />


                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 51%)', color: 'Black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(238,174,202)' }}
                        date="Published on Dec 2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<IoIosSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">The Emergency Thinking</h3>
                        <h4 className="vertical-timeline-element-subtitle">Psychology</h4>
                        <h4 className="vertical-timeline-element-subtitle">Mumbai</h4>
                        <p>
                        </p>
                        <Chip variant="outlined" size="small" label="Psychology" />
                    </VerticalTimelineElement>


                </VerticalTimeline> */}
                <Fade>
                    <div className="paperclsright">
                        <h3 className="basictext" style={{ textAlign: "centre", width: "inherit" }}>Exercitation non excepteur eu nulla.</h3>
                        <p className="text-center">Eiusmod dolor do cupidatat pariatur fugiat est. Et cupidatat commodo dolore Lorem aliquip nulla laboris consectetur laborum. Et do duis anim ea minim est sunt amet adipisicing. Aute irure incididunt velit mollit. Exercitation eiusmod tempor sint velit eu fugiat.
                        Pariatur anim sint enim amet elit exercitation esse excepteur velit culpa. Laborum sint tempor ut non ea dolor duis officia qui culpa ea cillum. Duis dolor velit esse quis. </p>
                       
                    </div>
                </Fade>


                <Fade delay={400} direction="right">
                    <div className="paperclsleft">
                        <h3 className="basictext" style={{ textAlign: "centre", width: "inherit" }}>Exercitation non excepteur eu nulla.</h3>
                        <p >Eiusmod dolor do cupidatat pariatur fugiat est. Et cupidatat commodo dolore Lorem aliquip nulla laboris consectetur laborum. Et do duis anim ea minim est sunt amet adipisicing. Aute irure incididunt velit mollit. Exercitation eiusmod tempor sint velit eu fugiat.</p>
                        <ModalButton />
                    </div>
                </Fade>
                <Fade delay={600} direction="left">
                    <div className="paperclsright">
                        <h3 className="basictext" style={{ textAlign: "centre", width: "inherit" }}>Exercitation non excepteur eu nulla.</h3>
                        <p >Eiusmod dolor do cupidatat pariatur fugiat est. Et cupidatat commodo dolore Lorem aliquip nulla laboris consectetur laborum. Et do duis anim ea minim est sunt amet adipisicing. Aute irure incididunt velit mollit. Exercitation eiusmod tempor sint velit eu fugiat.</p>
                        <ModalButton />
                    </div>
                </Fade>
                <Fade delay={800} direction="Bottom">
                    <div className="paperclsleft">
                        <h3 className="basictext" style={{ textAlign: "centre", width: "inherit" }}>Exercitation non excepteur eu nulla.</h3>
                        <p >Eiusmod dolor do cupidatat pariatur fugiat est. Et cupidatat commodo dolore Lorem aliquip nulla laboris consectetur laborum. Et do duis anim ea minim est sunt amet adipisicing. Aute irure incididunt velit mollit. Exercitation eiusmod tempor sint velit eu fugiat.</p>
                        <ModalButton />
                    </div>
                    

                </Fade>









            </div>
        </div>
    )
}







const Work = (props) => {

    var items = [
        {
            name: "YEh pahila",
            description: "kya bruh hai"
        },
        {
            name: "Yehdoosra",
            description: "world ko hello"
        }

    ]


    return (
        <div>
            <div>

                {/* <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={5}>
                            {items.map((item, i) => (
                                <Grid key={i} item>
                                    <CardCompo key={i} item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid> */}
                <Container fixed className="workcont">

                    <h1 className="basictext1">a little About my work and life </h1>
                    <Divider />


                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: 'Black' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2020 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<MdBusinessCenter />}
                        >
                            <h3 className="vertical-timeline-element-title">InfoSec Analyst</h3>
                            <h4 className="vertical-timeline-element-subtitle">Mumbai</h4>
                            <p>
                                CyberSmithSecure Project Management, Team Leading
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2018-2021"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: 'Black' }}
                            icon={<IoIosSchool />}
                        >
                            <h3 className="vertical-timeline-element-title">Bachelors in Engineering</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                            <h4 className="vertical-timeline-element-subtitle">FCRIT,Vashi</h4>
                            <p>
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2008 - 2010"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<MdBusinessCenter />}
                        >
                            <h3 className="vertical-timeline-element-title">Client Project :Daycare Website </h3>

                            <h4 className="vertical-timeline-element-subtitle">MERN Stack Based Project</h4>
                            <h4 className="vertical-timeline-element-subtitle">FCRIT, Vashi</h4>
                            <p>
                                User Experience, Visual Design
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2006 - 2008"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FaProjectDiagram />}
                        >
                            <h3 className="vertical-timeline-element-title">Secure Space,Python based Project</h3>
                            <h4 className="vertical-timeline-element-subtitle">FCRIT, Vashi</h4>
                            <p>
                                User Experience, Visual Design
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="April 2013"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<MdBusinessCenter />}
                        >
                            <h3 className="vertical-timeline-element-title">Diploma in Computer Technology</h3>
                            <h4 className="vertical-timeline-element-subtitle">MSBTE</h4>
                            <p>
                                SHJP,Dombivili
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="November 2012"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<MdBusinessCenter />}
                        >
                            <h3 className="vertical-timeline-element-title">M-Locator </h3>
                            <h4 className="vertical-timeline-element-subtitle">Diploma Course Project,Python based</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2002 - 2006"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<MdBusinessCenter />}
                        >
                            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                            <p>
                                Creative Direction, Visual Design
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="November 2012"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<MdBusinessCenter />}
                        >
                            <h3 className="vertical-timeline-element-title">SSC</h3>
                            <h4 className="vertical-timeline-element-subtitle">10th Standard</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design
    </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>







                </Container>

            </div>
        </div>

    )
}






const Chat = (props) => {

    var items = [
        {
            name: "YEh pahila",
            description: "kya bruh hai"
        },
        {
            name: "Yehdoosra",
            description: "world ko hello"
        }
        ,
        {
            name: "Yehdoosra",
            description: "world ko hello"
        }

    ]


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
                                        <ListItem button>
                                            <ListItemIcon>
                                                <AiFillLinkedin size={40} />
                                            </ListItemIcon>
                                            <ListItemText primary="Linkedin" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <AiFillInstagram size={40} />
                                            </ListItemIcon>
                                            <ListItemText primary="Instagram" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <AiOutlineFacebook size={40} />
                                            </ListItemIcon>
                                            <ListItemText primary="Facebook" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <AiFillGithub size={40} />
                                            </ListItemIcon>
                                            <ListItemText primary="Github" />
                                        </ListItem>
                                        <ListItem button>
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


                                    <h1 className="basictext">a little About me</h1>
                                    <Divider />

                                    <p className="bodytext">Ea consequat voluptate adipisicing consequat enim quis consectetur Lorem eu. Non qui amet consequat anim enim eu elit in ullamco fugiat. Qui eu adipisicing Lorem duis eiusmod qui cillum voluptate minim. Incididunt enim minim duis cillum exercitation. Voluptate culpa labore proident proident voluptate ipsum dolor anim sit excepteur.</p>


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
export default Example