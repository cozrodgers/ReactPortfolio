import React, { Component } from 'react';
import {Cell, Grid} from 'react-mdl';
import Project from './items/card';

class Projects extends Component {
    render() {
        return(

            <div>


<Grid className="landing-grid">

<Cell col={12}>
<h3>Projects Page</h3>
</Cell>


<Cell col={6}>

<Project text="C#" title="CSR Helper" btntxt="See More"/>
</Cell>

<Cell col={6}>

<Project text="QandAMe" title="QandAMe"/>
</Cell>

<Cell col={6}>

<Project text="Social Network built using laravel" title="SocialNet"/>
</Cell>

<Cell col={6}>

<Project text="Social Network built using laravel" title="SocialNet"/>
</Cell>


</Grid>

<p>&bsp;</p>
               
            </div>
        )
    }
}

export default Projects;
