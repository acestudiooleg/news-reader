import * as React from 'react';
import * as style from './style.css';
import { COUNTRIES } from 'app/constants/countries';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Select from 'app/components/Select';

// import { inject, observer } from 'mobx-react';
// import { RouteComponentProps } from 'react-router';
// import { RouterStore } from 'app/stores';
// import { STORE_ROUTER } from 'app/constants';

/**
 * #APIKEY

4c7896ad75144f0d82e76f7f360011b5
 */

const createListOfCountries = (ctrs: COUNTRIES) =>
  Object.keys(ctrs).map((country: string) => <option>{country}</option>);

export class NewsReader extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Form>
          <FormGroup>
            <Select />
          </FormGroup>
        </Form>
        {children}
      </div>
    );
  }
}
