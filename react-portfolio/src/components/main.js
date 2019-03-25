import React from 'react';
// import pages
import Landing from './landing';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Resume from './resume';

// end import pages

import { Switch, Route } from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/aboutme" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/resume" component={Resume}/>
        


    </Switch>
)

export default Main;