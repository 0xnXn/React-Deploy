import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper,Button} from '@material-ui/core'
import '../App.css'

 
const Example=(props)=>
{
    var items = [
        {
            name: "Blog",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Work",
            description: "Hello World!"
        }
    ]
 
    return (
        <Carousel autoplay={false} indicators={true} animation={"fade"} >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        
        
    )
}
 
const Item=(props)=>
{
    return (
      <div>
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
 
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
        </div>
    )
}
export default Example