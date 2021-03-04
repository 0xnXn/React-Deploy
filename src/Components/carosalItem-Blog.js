

import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Divider } from '@material-ui/core'
import Flexbox from 'flexbox-react';
import BlogContentleft from './BlogContentleft'
import BlogContentRight from './BlogContentRight'
import 'antd/dist/antd.css'
import { Anchor } from 'antd';

import {Paper } from '@material-ui/core'
const { Link } = Anchor;


const Blog = (props) => {



    return (
        <div>

            <h1 className="basictext" style={{ textAlign: "center", width: "100%" }}> Blogs</h1>
            <h3 className="basictext" style={{marginLeft:"10px"}}> Index</h3>
            <div style={{paddingLeft:"50px",height:"400px",display:"block"}}>
    
            <Anchor affix={false}>
                <Link href="#1" title="RedTeaming LAbs" />
                <Link href="#2" title="Privacy" />
                <Link href="#3" title="Verifying PII on Malicious Website" />
                <Link href="#4" title="Hadoop and big-data" />

            </Anchor>
            
            </div>




            <div className="blogcss">

                <Divider />


                <Fade>
                    <Flexbox flexDirection="column" id="1">

                        <BlogContentleft Heading={"RedTeaming LAbs"} body={"An increasing number of Corporate systems are being developed using service orientation. Red Teaming  technologies and techniques are used for Advanced Protected Services to boost the resilience and survival of services under cyber-attack. These technologies introduce a layer to absorb, contain, and adapt to cyber-attacks before it affects the critical services. RedTeaming describes an evaluation of these advanced protection technologies using co-operative red teaming. In co-operative red teaming, an independent red team launches attacks against a protected domain to judge the efficiency of the protection technologies that are being employed to secure the system, but the red team is provided full knowledge of the system under test and its protections, and is given escalating levels of access to the system. "} />



                    </Flexbox>
                </Fade>


                <Fade delay={300} direction="right">
                    <Flexbox flexDirection="column" id="2">
                        <BlogContentRight Heading={"Privacy "} body={"What is privacy? A good working definition is that privacy is the right to control who knows certain aspects about you, your communications, and your activities. In other words, you voluntarily choose who can know which things about you. People may ask you for your telephone number: your tax authority, a new business contact, or a new friend. In each case, you consider why the person wants the number and then decide whether to give it out. But the key point is that you decide. So privacy is something over which you can have considerable influence"} />
                    </Flexbox>
                </Fade>


                <Fade delay={400} direction="left">
                    <Flexbox flexDirection="column" id="3" >

                        <BlogContentleft Heading={"Verifying PII on Malicious Website"} body={"Proident do proident tempor labore commodo et ipsum aute dolor veniam voluptate ea amet duis. Nulla irure cillum proident elit adipisicing id culpa sit consectetur qui irure non. Laborum nisi enim consectetur dolore. Irure excepteur est occaecat esse magna eiusmod voluptate amet. Dolor tempor dolor irure ut. Reprehenderit minim eu reprehenderit magna ut irure laboris velit exercitation dolor nostrud."} />
                    </Flexbox>
                </Fade>


                <Fade delay={500} direction="Bottom">
                    <Flexbox flexDirection="column" id="4" >

                        <BlogContentRight Heading={"Hadoop and big-data"} body={" Information technology gives utmost importance to processing of data. Some petabytes of data is not sufficient for storing large amount of data. Large volume of unstructured and structured data that gets created from various sources such as Emails, web logs, social media like Twitter, Facebook etc. The major obstacles with processing Big Data include capturing, storing, searching, sharing and analysis. Hadoop enables to explore complex data."} />
                    </Flexbox>


                </Fade>









            </div>
        </div>
    )
}
export default Blog