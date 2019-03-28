import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return(

<div>
        <Grid className="landing-grid">

            <Cell col={12}>

<h1> About Me </h1>
<p> I am an aspiring Full Stack Web Developer with experience developing applications with React and Express.</p>
<br></br>
<p> I am looking to work on projects, start to finish in hopes of learning the MERN stack</p>
            
            </Cell>
        </Grid>
</div>
        )
    }
}

export default About;
