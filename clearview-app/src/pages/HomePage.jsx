import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { articleList } from '../data/articles';
import Grader from '../Grader';
import Filter from '../Filter';
import '../App.css';
import { useEffect } from "react";
import ScrollUpButton from '../ScrollUpButton';


export default function HomePage() {
  //console.log("Articles in HomePage:", articleList);

  useEffect(() => {
    document.title = "Home - GlánGuide";
  }, []);

  const [url, setUrl] = useState('');
  const [html, setHtml] = useState('');
  const [error, setError] = useState('');
  const [scrapedHtml, setScrapedHtml] = useState('');
  //const [filterOption, setFilterOption] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);


  const handleScrape = async() => {

    try{
      setError('');
      const response = await axios.post('http://127.0.0.1:5000/scrape', { url });
      const fetchedHtml = response.data.html
      setHtml(fetchedHtml);
      setScrapedHtml(fetchedHtml);//store the original scraped html for later filtering
    }
    catch(err){
      setError(err.response?.data?.error || 'An error has occurred');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter'){
      handleScrape();
    }
  }


  return (
    <div aria-label="Glán Guide app homepage">

      <h1 className="header-title" aria-label="GlánGuide website title">GlánGuide</h1>

      {/*Scraper*/}
      <div className="input-container" role="search">
        <input 
          type="text" 
          placeholder="Enter a URL to check" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          onKeyDown={handleKeyDown} //trigger scrape on Enter
          aria-label="Input field for URL to scrape"
          aria-required="true"
        />

        <button onClick={handleScrape} aria-label="Click this button to check the accessibility of a webpage.">Check</button>
      </div>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/*Filter*/}
      <Filter scrapedHtml={scrapedHtml} setHtml={setHtml}/>

      {/*Display Accessibility Grade*/}
      <div className="grade-container">
        <Grader html={html}/>
      </div>

      {/*Toggle Button for Collapsing Result*/}
      <button
        className="collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-expanded={!isCollapsed}
        aria-controls="results-container"
      >
        {isCollapsed ? "Expand Code" : "Collapse Code"}
      </button>


      {/*Display Scraped Code*/}
      <div
        id="results=container" 
        className={`results-container ${isCollapsed ? 'collapsed' : ''}`}
      >
        <pre aria-live="polite">{html}</pre>
      </div>


      {/*Education Articles*/}
      <div className="articles-container" role="contentinfo">
        <h2>Learn More About Web Accessibility</h2>
        <div className="articles-grid">
          {articleList.map((article) => (
            <Link 
              to={`/articles/${article.id}`} 
              key={article.id} 
              className="article-card"
              aria-label={`Click the link to read article ${article.title}`}
            >
              <h3>{article.title}</h3>
            </Link>
          ))}
        </div>
      </div>
      
      <div>
        <ScrollUpButton />
      </div>

    </div>
  );
}



