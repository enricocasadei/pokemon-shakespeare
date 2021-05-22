import React from 'react';

import { ErrorBoundary } from './components/ErrorBoundary';
import { Col, Grid, Row } from './components/Grid';

export default function App() {
  return (
    <ErrorBoundary>
      <Grid>
        <Row gap="large">
          <Col width="360px" background="red">
            &nbsp;
          </Col>
          <Col width="360px" background="blue" collapse>
            &nbsp;
          </Col>
          <Col width="360px" background="green">
            &nbsp;
          </Col>
        </Row>
      </Grid>
    </ErrorBoundary>
  );
}
