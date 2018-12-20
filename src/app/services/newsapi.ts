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
  everythingUrl: string = '/top-headlines';
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
    date?: string,
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
    newDate.setDate(date.getDate() - period);
    return newDate;
  }
  private calcZeroForDate(date: number): string {
    return date < 10 ? `0${date}` : String(date);
  }
  createDate(date: Date): string {
    const year: number = date.getFullYear();
    const month: string = this.calcZeroForDate(date.getMonth() + 1);
    const day: string = this.calcZeroForDate(date.getDate());
    return `${year}-${month}-${day}`;
  }

  httpGet(url: string) {
    return window.fetch(url).then((r) => r.json());
  }
}
export default new NewsService(newsApiKey);
