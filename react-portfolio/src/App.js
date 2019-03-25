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
          <Header title="Title" scroll>
              <Navigation>
              <Link to="/">Home</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="aboutme">About</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <Link to="/projects">Projects</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="aboutme">About</Link>
                  <Link to="/contact">Contact</Link>
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


                  