import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Filter from 'app/components/Filter';
import NewsList from 'app/components/NewsList';

import { inject, observer } from 'mobx-react';
// import { RouteComponentProps } from 'react-router';
// import { RouterStore } from 'app/stores';
import { STORE_ROUTER, STORE_NEWS } from 'app/constants/stores';

@inject(STORE_ROUTER, STORE_NEWS)
export class NewsReader extends React.Component {
  handleCat(value: String) {
    alert(value);
  }
  getget() {
    const newsStore = this.props[STORE_NEWS];
    newsStore.getNews('us', 'business', 'ru');
  }
  render() {
    const newsStore = this.props[STORE_NEWS];
    const emptyHeader = <h1>Select Country, Category, Language</h1>;
    const loadingHeader = <h1>Loading ...</h1>;
    const header = newsStore.isLoading ? loadingHeader : emptyHeader;
    console.log(newsStore.news);
    return (
      <Container>
        <Filter />
        <button onClick={this.getget.bind(this)}>Click</button>
        <Row>
          <Col>{header}</Col>
        </Row>
        <Row>
          <Col>
            <NewsList news={newsStore.news} />
          </Col>
        </Row>
      </Container>
    );
  }
}
