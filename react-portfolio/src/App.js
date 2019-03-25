import React, { Component } from 'react';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header title="Corey Rodgers" scroll>
              <Navigation>
                  <Link to="/landing">Home</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="aboutme">About</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Corey Rodgers">
              <Navigation>
              <a href="#">Home</a>
                  <a href="#">Projects</a>
                  <a href="#">Resume</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
<Main/>
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;
