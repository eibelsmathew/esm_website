import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="hero-section bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 mb-4">Find Skilled Workers for Your Home</h1>
            <p className="lead mb-4">
              Book trusted professionals for cleaning, plumbing, electrical work, and more.
            </p>
            <Button variant="primary" size="lg" className="mb-3">
              Find a Worker Now
            </Button>
          </Col>
          <Col md={6}>
            <SearchBar />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;