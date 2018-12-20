import { NewsService } from './newsapi';

let api;
const apiKey = 'hello';

const defaultParams = {
  category: 'category',
  country: 'country',
  from: '2018-10-19',
  sortBy: 'publishedAt',
  apiKey: 'apiKey'
};

beforeEach(() => {
  api = new NewsService(apiKey);
});

test('buildQuery should build query from object', () => {
  const expected = Object.keys(defaultParams)
    .map((key: string) => `${key}=${defaultParams[key]}`)
    .join('&');
  const actual = api.buildQuery(defaultParams);
  expect(actual).toBe(expected);
});

test('calcPeriod should calculate period', () => {
  const currentDate = new Date();
  const period = 5; //days
  const calculatedDate = api.calcPeriod(currentDate, period);
  expect(calculatedDate.getDate()).toBe(currentDate.getDate() - period);
});

test('createDate should build string date - YYYY-MM-DD', () => {
  const expected = defaultParams.from;
  const date = new Date(expected);
  const actual = api.createDate(date);
  expect(actual).toBe(expected);
});

test('createDate should build string date - YYYY-MM-DD not zero', () => {
  const expected = '2018-10-19';
  const date = new Date(expected);
  const actual = api.createDate(date);
  expect(actual).toBe(expected);
});

test('getEverything should build query and send http request', async () => {
  const httpGet = (url) => Promise.resolve(url);
  api.httpGet = httpGet;
  const { category, country, sortBy, from } = defaultParams;
  const req = api.getEverything(country, category, from);
  expect(req instanceof Promise).toBeTruthy();
  const url = await req;
  const params = {
    country,
    category,
    language: 'en',
    from,
    sortBy,
    apiKey
  };
  const q = api.buildQuery(params);
  expect(url).toBe(`${api.mainUrl}${api.everythingUrl}?${q}`);
});
