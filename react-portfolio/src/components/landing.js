import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return(

            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                <img 
                src="http://bestshelvingunits.com/wp-content/uploads/2016/02/avatarnew.png" 
                alt=""
                className="avatar-img"/>

                <div className="banner-text">

                <h1>full stack web developer</h1>
                <hr/>
                
                <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>
                
                <div className = "social-links">
                
                <a href="http://google.com" target="_blank"></a>
                <a href=""></a>
                <a href=""></a>

                </div>
                </div>
                
               
                
                </Cell>
            
         

            </Grid>
            </div>
        )
    }
}

export default Landing;
