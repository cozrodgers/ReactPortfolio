import React, { Component } from 'react';
import { Cell, Grid} from 'react-mdl';

class Projects extends Component {
    render() {
        return(

            <div>


<Grid className="landing-grid">

<Cell col={12}>
<h1>Projects Page</h1>
</Cell>


<Cell col={4}>
<h1>Item</h1>
</Cell>

<Cell col={4}>
<h1>Item 2</h1>
</Cell>

<Cell col={4}>
<h1>Item 3</h1>
</Cell>



</Grid>

               
            </div>
        )
    }
}

export default Projects;
