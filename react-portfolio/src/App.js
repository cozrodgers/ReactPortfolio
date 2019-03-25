import React, { Component } from 'react';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header title="Corey Rodgers" scroll>
              <Navigation>
                  <a href="#">Home</a>
                  <a href="#">Projects</a>
                  <a href="#">Resume</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
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
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;
