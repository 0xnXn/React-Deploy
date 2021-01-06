import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid ,ListItem,List,ListItemIcon ,ListItemText,Divider} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import '../App.css'
import CardCompo from './Card'


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
    return (
        <div>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={5} >
                        {items.map((item, i) => (
                            <Grid key={i} item>
                                <CardCompo key={i} item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

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

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={5}>
                            {items.map((item, i) => (
                                <Grid key={i} item>
                                    <CardCompo key={i} item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

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
            <Grid container spacing={2}>
                <Grid item xs={12}>
            
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Linkedin" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Instagram" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Github" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Twitter" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="bruh" />
                    </ListItem>
                </List>
                <Divider />
                <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem button>
                        <ListItemText primary="temp" />
                    </ListItem>
                    <ListItemLink href="#simple-list">
                        <ListItemText primary="temp" />
                    </ListItemLink>
                </List>
                </Grid>
                <Grid item xs={12}>
                    <h1>bruh</h1>
                    </Grid>
                    </Grid>
                
            
            <div>
                   
                </div>

        </div>

    )
}
export default Example