import React, { Component } from 'react';
import logo from 'logo.svg';
import 'App.css';
import glamorous from 'glamorous';
import NavigationBar from 'components/NavigationBar/NavigationBar';

import { colors, getBackgroundColorSecondary } from 'helpers/constants';

class App extends Component {
  render() {
    return (
      <Container>
        <NavigationBar />
        <div class="row no-gutters" style={{ height: '90%' }}>
          <BBS>BBS</BBS>
          <div class="col-lg-4">
            <Feed>FEED</Feed>
            <Groups>
              GROUPS
          </Groups>
            <Grapevine>
              GRAPEVINE
          </Grapevine>
          </div>
        </div>
        <div class="row no-gutters" style={{ height: '10%' }}>
        </div>
      </Container>
    );
  }
}

const Container = glamorous.div({
  backgroundColor: '#FFFFFF',
  position: 'fixed',
  width: '100%',
  height: '100%'
}, () => 'no-gutters',
  ({ }) => ({
    backgroundColor: getBackgroundColorSecondary(false)
  }));

const Feed = glamorous.div({
  backgroundColor: '#0000FF',
  height: '33%'
}, () => ('col col-xs-12'));

const BBS = glamorous.div({
  backgroundColor: '#00FF00',
  height: '100%'
}, () => ('col col-lg-8'));


const Groups = glamorous.div({
  backgroundColor: '#FF0000',
  height: '33%'
}, () => ('col col-xs-12'));

const Grapevine = glamorous.div({
  backgroundColor: '#FF00FF',
  height: '33%'
}, () => ('col col-xs-12'));

const MessagePanel = glamorous.div({
  backgroundColor: '#F0F0F0',
}, () => ('col col-xs-12'));

export default App;
