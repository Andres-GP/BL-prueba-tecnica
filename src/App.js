import NewsCard from './components/NewsCard'
import AdCard from './components/AdCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3da128da75bb4e819bb876090635ca8f"
      );
      setNews(response.data.articles);
      console.log("news1", response);
    };
    loadNews();
  }, []);


  
  return (
    <div className="app-container">
      <div className='app-container__news-container'>
        <div className='app-container__news-container__left-column'>
          <NewsCard
            centerColumn={false}
            img={news[0].urlToImage}
            title={news[0].title}
            description={news[0].description}
          />
          <NewsCard 
            centerColumn={false}
            className="left-column-item"
            img={news[1].urlToImage}
            title={news[1].title}
            description={news[1].description}
          />
        </div>
        <div className='app-container__news-container__center-column'>
          <NewsCard
            centerColumn={true}
            img={news[2].urlToImage}
            title={news[2].title}
            description={news[2].description}
          />
        </div>
        <div className='app-container__news-container__right-column'>
          <NewsCard
            centerColumn={false}
            img={news[3].urlToImage}
            title={news[3].title}
            description={news[3].description}
          />
          <NewsCard
            centerColumn={false}
            img={news[4].urlToImage}
            title={news[4].title}
            description={news[4].description}
          />
        </div>
      </div>
      <div className='app-container__ad-container'>
        <AdCard/>
      </div>
    </div>
  );
}

export default App;
