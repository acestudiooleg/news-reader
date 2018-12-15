import * as React from 'react';
import * as style from './style.css';
import Select from 'app/components/Select';
import { COUNTRIES, CATEGORIES, LANGUAGES } from 'app/constants/newsapi';
import { Row, Col, Button } from 'reactstrap';

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

export default class NewsReader extends React.Component {
  handleCat(value: String) {
    alert(value);
  }
  render() {
    return (
      <div className={style.filter}>
        <Row>
          <Col>
            <Select
              label="Choose a country:"
              defaultSelectedLabel="all"
              defaultSelectedValue="all"
              onChange={this.handleCat}
              options={countriesList}
            />
          </Col>
          <Col>
            <Select
              label="Choose a category:"
              defaultSelectedLabel="all"
              defaultSelectedValue="all"
              onChange={this.handleCat}
              options={categoriesList}
            />
          </Col>
          <Col>
            <Select
              label="Choose a language:"
              defaultSelectedLabel="en"
              defaultSelectedValue="en"
              onChange={this.handleCat}
              options={languagesList}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={style.getList}>
              <Button color="primary">Get List</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
