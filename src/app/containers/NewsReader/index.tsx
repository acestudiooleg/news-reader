import * as React from 'react';
import * as style from './style.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// import { inject, observer } from 'mobx-react';
// import { RouteComponentProps } from 'react-router';
// import { RouterStore } from 'app/stores';
// import { STORE_ROUTER } from 'app/constants';

/**
 * #APIKEY

4c7896ad75144f0d82e76f7f360011b5
 */

export class NewsReader extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className={style.helloWorld}>
        <Form>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
            <div className="alert alert-success">hello</div>
          </FormGroup>
        </Form>
        {children}
      </div>
    );
  }
}
