import React, { Component } from 'react';
import { Layout, Header, HeaderRow, Drawer, Navigation, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import CustomFooter from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout fixedHeader>
          <Header waterfall className="header-color" title="Corey Rodgers" scroll>
          <HeaderRow title="Corey Rodgers"/>
          
          <HeaderRow>
                <Navigation>
                 <Link to="/">Home</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About</Link>
                  <Link to="/contact">Contact</Link>
                </Navigation>

            </HeaderRow>
             
            
          </Header>
          <Drawer title="Corey">
              <Navigation>
                  <Link to="/projects">Projects</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>

         <CustomFooter/>
      </Layout>
  </div>
    );
  }
}





export default App;


                  