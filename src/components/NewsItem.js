import React from 'react'

const NewsItem = (props) => {
    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
              <span className="badge rounded-pill bg-danger" style={{left:'88%',zIndex:'1'}}>
              {source}
              </span>
          </div>
          <img src={!imageUrl?"https://il6.picdn.net/shutterstock/videos/6137654/thumb/1.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title} 
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-success">By {author===null?"Unknown":author} on { new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem