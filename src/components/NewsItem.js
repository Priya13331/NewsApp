import React from "react";

const NewsItem = (props)=>{

    let { title, description, imageUrl, newsUrl, author, date ,source} = props;
    
    return (
      <div className="my-3">
        <div className="card">
        <div style={
         { 
        display: 'flex',
         justifyContent:'flex-end',
         position: 'absolute',
         right: '0'
        }
        }>
        <span className="badge rounded-pill bg-danger">
                {source}
              </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://i-invdn-com.investing.com/news/world_news_3_69x52._800x533_L_1419494235.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text"> {description}</p>
            <p className="card-text text-dark">
              <small className="text-dark">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
              //   className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
