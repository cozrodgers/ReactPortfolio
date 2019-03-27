import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return(

            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">

                <Cell col={12}>

               
                <div className="banner-text">

                <h1>Corey Rodgers</h1>
            
                <h2>Full Stack Web Developer</h2>
                <hr/>
                
                <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>
                
                <div className = "social-links">
           
              <a href="http://google.com"> <i aria-hidden="true" className="fa fa-linkedin "/></a>
                
       
               

                </div>
                </div>
                
               
                
                </Cell>
            
         

            </Grid>
            </div>
        )
    }
}

export default Landing;
