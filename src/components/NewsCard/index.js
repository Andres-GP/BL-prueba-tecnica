import React from 'react'
import './NewsCard.css'

const NewsCard = (props) => {
  return (
    <div className={`${props.className} ${props.centerColumn === true ? `news-card-main-container-large` : `news-card-main-container-slim` } news-card-main-container`}>
      <img src={props.img} alt={props.title}/>
      <div>
        <h5>{props.title}</h5>
        <article>{props.description}</article>
      </div>
    </div>
  )
}

export default NewsCard