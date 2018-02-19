import React from "react";


const ArticleDetail = props => (
  <div className="text-center">
   <h3>
      Title: {props.title}
    </h3>
    <p>
      URL: {props.url}
    </p>
    <p>
      Snippet: {props.snippet}
    </p>
    <p>
      Date Published: {props.date}
    </p>
  </div>
);
console.log(ArticleDetail);
export default ArticleDetail;
