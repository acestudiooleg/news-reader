import NewsAPI from 'newsapi';
import { newsApiKey } from 'app/config';
const newsapi = new NewsAPI(newsApiKey); //work only for NODEJS

/* 
needs to use FETCH function 

*/

export class NewsService {
  getNews(country, category, language) {
    return newsapi.v2.topHeadlines({
      category,
      language,
      country
    });
  }
}
export default new NewsService();
