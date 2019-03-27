import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
class Project extends Component {
    render() {
        return(

            <div style={{padding: '15px'}}>
<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background:'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>{this.props.title}</CardTitle>
        <CardText>
           {this.props.text}
        </CardText>
        <CardActions border>
            <Button colored>See More</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
</Card>
            </div>
        )
    }
}

export default Project;





