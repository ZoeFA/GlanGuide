import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { articleData } from "../data/articles";
import { useEffect } from "react";
import ScrollUpButton from '../ScrollUpButton';


export default function ArticlePage(){

  const { articleId } = useParams();
  console.log("Looking for article:", articleId);
  const article = articleData[articleId];

  useEffect(() => {
    if (article) {
      document.title = `${article.title}`;
    } else {
      document.title = "Article Not Found";
    }
  }, [article]);


  if(!article){
    return <h2>Article Not Found</h2>;
  }

  return(
    <div>
      <Link to="/" aria-label="Click to go back to the homepage">Back to Home</Link>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} role="article" aria-label={`Article content for ${article.title}`}/>
    
      <div>
        <ScrollUpButton />
      </div>
    
    </div>

  );
}