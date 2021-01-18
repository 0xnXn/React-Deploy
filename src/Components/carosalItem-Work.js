import React from 'react';
import {  Container, Divider } from '@material-ui/core'
import '../App.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdBusinessCenter } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";

import ModalButton from './ModalButton'

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
    <ModalButton heading ={"Job Profile: Intern"} content= {"Primary Responsiblity are to perform penetration testing on Client's Workstation and to protect the same from any Current or future Threats "}/>

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
                            date="2020 - 2021"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FaProjectDiagram />}
                        >
                            <h3 className="vertical-timeline-element-title">Client Project :RedTeaming Labs </h3>

                            <h4 className="vertical-timeline-element-subtitle"></h4>
                            <h4 className="vertical-timeline-element-subtitle">FCRIT, Vashi</h4>
                            <p>
                                CyberSecurity  
                                <ModalButton heading ={"Job Profile: FreeLancer"} content={" Red Teaming is a full-scope, multi-layered attack simulation designed to measure how well a company’s people and networks, applications and physical security controls can withstand an attack from a real-life adversary.To put red teaming in layman’s terms, it’s “ethical hacking”—a way for independent security teams to test how well an organization would fare in the face of a real attack. Technology Stack: Python,Node,AWS,Reactjs"}/>
    </p>
                        </VerticalTimelineElement>
                        
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2018 - 2019"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FaProjectDiagram />}
                        >
                            <h3 className="vertical-timeline-element-title"> Project :Smart Meter </h3>

                            <h4 className="vertical-timeline-element-subtitle"></h4>
                            <h4 className="vertical-timeline-element-subtitle">FCRIT, Vashi</h4>
                            <p>
                                Machine LEarning, WebTechnology
                                <ModalButton  heading ={"Job Profile: FreeLancer"} content = {"A power optimization smart Meter used to predict andcategorize your power consumption And give anoptimized consumption chart. Technology Stack: Python,AWS,Reactjs"}/>
    </p>
                        </VerticalTimelineElement>



                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2018 - 2019"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FaProjectDiagram />}
                        >
                            <h3 className="vertical-timeline-element-title">Client Project :Daycare Website </h3>

                            <h4 className="vertical-timeline-element-subtitle"></h4>
                            <h4 className="vertical-timeline-element-subtitle">FCRIT, Vashi</h4>
                            <p>
                                WebHosting,WebTechnology
                                <ModalButton  heading ={"Job Profile: FreeLancer"} content = {"MERN Stack Based Website with an Android application Hosted on AWS for an online Daycare Portal.Technology "}/>
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2019 - 2019"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FaProjectDiagram />}
                        >
                            <h3 className="vertical-timeline-element-title">Project: Secure Space</h3>
                            <h4 className="vertical-timeline-element-subtitle">FCRIT, Vashi</h4>
                            <p>
                                CyberSecurity
                                <ModalButton heading ={"Job Profile: FreeLancer"} content = {"SecureSpace is a platform which provides you utility to check if your private information is being used on any platform. Technology Stack: Python,AWS,Reactjs"}/>
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="June 2018"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<IoIosSchool />}
                        >
                            <h3 className="vertical-timeline-element-title">Diploma in Computer Technology</h3>
                            <h4 className="vertical-timeline-element-subtitle">MSBTE</h4>
                            <p>
                                SHJP,Dombivili
                                
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="November 2017"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<FaProjectDiagram />}
                        >
                            <h3 className="vertical-timeline-element-title">Project: M-Locator </h3>
                            <h4 className="vertical-timeline-element-subtitle">Diploma Course Project,Python based</h4>
                            <p>
                                Hardware,WebTechnology 
                                <ModalButton/>
    </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="June 2015"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<IoIosSchool />}
                        >
                            <h3 className="vertical-timeline-element-title">SSC</h3>
                            <h4 className="vertical-timeline-element-subtitle">10th Standard</h4>
                            <p>
                                St.John the Baptist High School
                                
    </p>
                        </VerticalTimelineElement>
                        
                    </VerticalTimeline>







                </Container>

            </div>
        </div>

    )
}
 export default  Work
