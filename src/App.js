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
import NavigationBarHeader from './routes/NavigationBarHeader';
import NavigationBarFooter from './routes/NavigationBarFooter';

function App() {
  const width = window.innerWidth;
  return (
    <Container fluid={true}>
      <Row>
        <Col bsPrefix='col custom-header'>
          <Router basename='/studio'>
            {(width>=768) ? <NavigationBar/> : <NavigationBarHeader/>}
            <Routes/>
            {(width < 768) && <NavigationBarFooter/>}
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
