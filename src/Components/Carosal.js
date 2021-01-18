import React from 'react';
import Carousel from 'react-material-ui-carousel';
import '../App.css';
import 'react-vertical-timeline-component/style.min.css';
import Blog from './carosalItem-Blog';
import Work from './carosalItem-Work';
import Chat from './carosalItem-Chat';




const Example = (props) => {
    

    return (
        <div>

            <Carousel autoPlay={false} indicators={true} animation={"slide"} interval={40000} navButtonsAlwaysVisible={true}
                next={(next) => props.boxClick(next)}
                prev={(prev ) => props.boxClick(prev)}
                index={props.currentIndex}
            >
                <Blog key={1} />
                <Work key={2} />
                <Chat key={3} />

            </Carousel>

        </div>

    )
}
export default Example