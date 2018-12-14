import * as React from 'react';
import { Navbar, NavbarBrand, Container, Row, Col } from 'reactstrap';

export class Root extends React.Component<any, any> {
  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default;
      return <DevTools />;
    }
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">News Reader</NavbarBrand>
        </Navbar>
        <Container fluid>
          <Row>
            <Col>{this.props.children}</Col>
          </Row>
        </Container>
        {this.renderDevTool()}
      </div>
    );
  }
}
