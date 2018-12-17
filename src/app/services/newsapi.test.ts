import { NewsService } from './newsapi';

test('buildQuery should build query from object', () => {
  const api = new NewsService('hello');
  const data = {
    category: 'category',
    language: 'language',
    country: 'country',
    from: 'from',
    sortBy: 'sortBy',
    apiKey: 'apiKey'
  };
  const expected = Object.keys(data)
    .map((key: string) => `${key}=${data[key]}`)
    .join('&');
  const actual = api.buildQuery(data);
  expect(actual).toBe(expected);
});
