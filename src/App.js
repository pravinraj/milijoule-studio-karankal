import React from 'react';
import {
  HashRouter as Router, NavLink
} from 'react-router-dom';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'

import Routes from './routes/Routes';
import Home from './container/Home';
import './app.css';

function App() {
  return (
    <Container fluid={true}>
      <Row>
        <Col bsPrefix='col custom-header'>
          <Router basename='/studio'>
            <Home/>
            <Routes/>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
