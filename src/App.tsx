import React from 'react';

import { Col, Grid, Row } from './components/Grid';

export default function App() {
  return (
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
  );
}
