import * as React from 'react';
import * as style from './style.css';
import { COUNTRIES, CATEGORIES, LANGUAGES } from 'app/constants/newsapi';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import Select, { ISelectOption } from 'app/components/Select';

// import { inject, observer } from 'mobx-react';
// import { RouteComponentProps } from 'react-router';
// import { RouterStore } from 'app/stores';
// import { STORE_ROUTER } from 'app/constants';

/**
 * #APIKEY

4c7896ad75144f0d82e76f7f360011b5
 */

const createListFromObject = (ctrs: Object): ISelectOption[] =>
  Object.keys(ctrs).map((country: string) => ({
    label: country,
    value: ctrs[country]
  }));

const createListFromArray = (cats: String[]): ISelectOption[] =>
  cats.map((cat: string): ISelectOption => ({ label: cat, value: cat }));

const countriesList: ISelectOption[] = createListFromObject(COUNTRIES);
const languagesList: ISelectOption[] = createListFromObject(LANGUAGES);
const categoriesList: ISelectOption[] = createListFromArray(CATEGORIES);

export class NewsReader extends React.Component {
  handleCat(value: String) {
    alert(value);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Select
                  label="Choose a country:"
                  defaultSelectedLabel="all"
                  defaultSelectedValue="all"
                  onChange={this.handleCat}
                  options={countriesList}
                />
              </FormGroup>
              <FormGroup>
                <Select
                  label="Choose a category:"
                  defaultSelectedLabel="all"
                  defaultSelectedValue="all"
                  onChange={this.handleCat}
                  options={categoriesList}
                />
              </FormGroup>
              <FormGroup>
                <Select
                  label="Choose a language:"
                  defaultSelectedLabel="en"
                  defaultSelectedValue="en"
                  onChange={this.handleCat}
                  options={languagesList}
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Select Country, Category, Language</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
