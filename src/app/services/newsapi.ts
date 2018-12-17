import { newsApiKey } from '../config';

interface IQuery {
  category: string;
  language: string;
  country: string;
  from: string;
  sortBy: string;
  apiKey: string;
}

export class NewsService {
  mainUrl: string = 'https://newsapi.org/v2';
  everythingUrl: string = '/everything';
  periodDays: number = 7;
  sortBy: string = 'publishedAt';
  constructor(private apikey: string) {}
  buildQuery(q: IQuery): string {
    return Object.keys(q)
      .map((key: string) => `${key}=${q[key]}`)
      .join('&');
  }
  getEverything(
    country: string,
    category: string,
    language: string,
    date: string,
    sortBy: string = this.sortBy
  ) {
    const from: string =
      date || this.createDate(this.calcPeriod(new Date(), this.periodDays));
    const url: string = this.mainUrl + this.everythingUrl;
    const q = this.buildQuery({
      country,
      category,
      language,
      from,
      sortBy,
      apiKey: this.apikey
    });
    return this.httpGet(`${url}?${q}`);
  }
  calcPeriod(date: Date, period: number): Date {
    const newDate = new Date(date);
    date.setDate(newDate.getDate() - period);
    return newDate;
  }
  createDate(date: Date) {
    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    const day: number = date.getDate();
    return `${year}-${month}-${day}`;
  }

  httpGet(url: string) {
    return window.fetch(url).then((r) => r.json());
  }
}
export default new NewsService(newsApiKey);
