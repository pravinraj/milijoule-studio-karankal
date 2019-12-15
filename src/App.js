import React from 'react';
import {
  HashRouter as Router
} from 'react-router-dom';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'

import Routes from './routes/Routes';
import './css/main.scss';
import NavigationBar from './routes/NavigationBar';

function App() {
  return (
    <Container fluid={true}>
      <Row>
        <Col bsPrefix='col custom-header'>
          <Router basename='/studio'>
            <NavigationBar/>
            <Routes/>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
