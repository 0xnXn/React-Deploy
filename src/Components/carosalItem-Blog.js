

import React from 'react';

import ModalButton from './ModalButton'
import { Fade } from "react-awesome-reveal";
import { Divider } from '@material-ui/core'
import Flexbox from 'flexbox-react';
import BlogContentleft from './BlogContentleft'
import BlogContentRight from './BlogContentRight'


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

    
    return (
        <div>
            <div>
                <h1 className="basictext" style={{ textAlign: "center", width: "100%" }}>Recent Blogs</h1>



            </div>
            <div>

                <Divider />


                <Fade>
                    <Flexbox flexDirection="column">

                        <BlogContentleft Heading={"RedTeamingLAbs"} body={"Voluptate sint ullamco sunt nulla nostrud laborum cillum ex. Aute esse aliquip occaecat occaecat fugiat amet in pariatur eu do eu. Reprehenderit in culpa consequat veniam officia duis ut aute quis. Consequat laboris Lorem dolor esse et veniam enim in irure. Reprehenderit voluptate consequat aute excepteur. Officia cupidatat tempor sint non qui proident esse. Nostrud ullamco voluptate dolor eu dolore aliqua velit magna esse exercitation ullamco duis et enim."} />



                    </Flexbox>
                </Fade>


                <Fade delay={300} direction="right">
                    <BlogContentRight Heading={"BigData"} body={"Ea minim occaecat minim culpa exercitation tempor exercitation elit incididunt officia sit. Sunt nulla do laborum sint laboris ea officia culpa eu qui et aliqua ipsum id. Nostrud mollit magna quis dolor est ex nulla."} />
                </Fade>


                <Fade delay={400} direction="left">
                    <Flexbox flexDirection="column" >

                        <BlogContentleft Heading={"Patterns"} body={"Proident do proident tempor labore commodo et ipsum aute dolor veniam voluptate ea amet duis. Nulla irure cillum proident elit adipisicing id culpa sit consectetur qui irure non. Laborum nisi enim consectetur dolore. Irure excepteur est occaecat esse magna eiusmod voluptate amet. Dolor tempor dolor irure ut. Reprehenderit minim eu reprehenderit magna ut irure laboris velit exercitation dolor nostrud."} />
                    </Flexbox>
                </Fade>


                <Fade delay={500} direction="Bottom">
                    <Flexbox flexDirection="column" >

                        <BlogContentRight Heading={"Mystry"} body={"Est fugiat veniam aliquip proident fugiat dolor Lorem aute eu. Exercitation magna labore ut ut do reprehenderit ut consequat amet. Magna excepteur deserunt qui velit. Non officia ad do sint adipisicing et ex."} />
                    </Flexbox>


                </Fade>









            </div>
        </div>
    )
}
export default Blog