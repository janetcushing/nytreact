import React from "react";

const ArticleDetail = props => (
  <div className="text-center">
   <h3>
      Title: {props.title}
    </h3>
    <h3>
      URL: {props.url}
    </h3>
    <h3>
      Snippet: {props.snippet}
    </h3>
    <h3>
      Date Published: {props.date}
    </h3>
  </div>
);

export default ArticleDetail;
