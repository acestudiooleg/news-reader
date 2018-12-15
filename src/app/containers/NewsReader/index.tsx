import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Filter from 'app/components/Filter';
import NewsList from 'app/components/NewsList';

import { inject, observer } from 'mobx-react';
// import { RouteComponentProps } from 'react-router';
// import { RouterStore } from 'app/stores';
import { STORE_ROUTER, STORE_NEWS } from 'app/constants/stores';

/**
 * #APIKEY

4c7896ad75144f0d82e76f7f360011b5
 */

const data = [
  {
    source: {
      id: null,
      name: 'Salon.com'
    },
    author: 'Matthew Rozsa',
    title:
      '“Spider-Man: Into the Spider-Verse” is a beautiful, bold, overstuffed melodrama - Salon',
    description:
      "The new Spider-Man movie is a love letter to its own franchise. That's not entirely a good thing",
    url:
      'https://www.salon.com/2018/12/15/spider-man-into-the-spider-verse-is-a-beautiful-bold-overstuffed-melodrama/',
    urlToImage: 'https://media.salon.com/2018/12/into-spider-verse.jpg',
    publishedAt: '2018-12-15T16:00:00Z',
    content:
      '"Spider-Man: Into the Spider-Verse" has the strengths of "The Lego Batman Movie" and the weaknesses of "Avengers: Infinity War." It is more an experiment than an actual film, a riffing tribute to our culture\'s infatuation with the Spider-Man character that fl… [+5859 chars]'
  },
  {
    source: {
      id: null,
      name: 'Ktla.com'
    },
    author: 'http://www.facebook.com/ktla5',
    title:
      'Largest Known Diamond in North America Found — a 552-Carat Yellow Diamond in Canada - KTLA Los Angeles',
    description:
      "A 552-carat yellow diamond was recently unearthed in Canada -- the largest ever found in North America.\r\n\nMining company Dominion Diamond Mines said in a press release on Thursday the diamond was discovered in October at the Diavik Diamond Mine in Canada's No…",
    url:
      'https://ktla.com/2018/12/15/largest-known-diamond-in-north-america-found-a-552-carat-yellow-diamond-in-canada/',
    urlToImage:
      'https://tribktla.files.wordpress.com/2018/12/diamond.jpg?quality=85&strip=all&w=1200',
    publishedAt: '2018-12-15T15:38:00Z',
    content:
      'A 552-carat yellow diamond was recently unearthed in Canada — the largest ever found in North America. Mining company Dominion Diamond Mines said in a press release on Thursday the diamond was discovered in October at the Diavik Diamond Mine in Canada’s North… [+770 chars]'
  },
  {
    source: {
      id: 'cnn',
      name: 'CNN'
    },
    author: 'Sophie Tatum, Lauren Fox and Gregory Wallace, CNN',
    title:
      'Interior Secretary Ryan Zinke to leave Trump administration at end of the year - CNN',
    description:
      'President Donald Trump announced Saturday morning that Interior Secretary Ryan Zinke will depart from his administration at the end of the year.',
    url: 'https://www.cnn.com/2018/12/15/politics/ryan-zinke/index.html',
    urlToImage:
      'https://cdn.cnn.com/cnnnext/dam/assets/181113094713-04-ryan-zinke-lead-image-super-tease.jpg',
    publishedAt: '2018-12-15T15:34:00Z',
    content: null
  }
];

@inject(STORE_ROUTER, STORE_NEWS)
export class NewsReader extends React.Component {
  handleCat(value: String) {
    alert(value);
  }
  getget() {
    const newsStore = this.props[STORE_NEWS];
    newsStore.getNews('ru', 'business', 'ru');
  }
  render() {
    return (
      <Container>
        <Filter />
        <button onClick={this.getget}>Click</button>
        <Row>
          <Col>
            <h1>Select Country, Category, Language</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <NewsList news={data} />
          </Col>
        </Row>
      </Container>
    );
  }
}
