import React from 'react';

import { Button, Container, Card, CardActions, CardActionArea, CardMedia, Typography, CardContent } from '@material-ui/core'
import '../App.css'
import Batman from '../Images/source.gif'
const CardCompo = (props) => {



    return (
        <div className="temp" >

            <Card className=".MuiCard-root" >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={Batman}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.item.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.item.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
        </Button>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </Card>
        </div>
    );
}
export default CardCompo