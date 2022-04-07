import React from 'react';
import '../styles/App.scss';
import Menu from '../components/Menu';
import { Jumbotron, Button } from 'react-bootstrap';

const Homepage = () => (
  <>
    <Menu />
    <Jumbotron>
      <h1 className="header">Slider</h1>
    </Jumbotron>
    <Button>Test</Button>
  </>
);

export default Homepage;
