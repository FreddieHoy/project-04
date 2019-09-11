import React from 'react'




const Card = (props) => {
  return (
    <div className="">
      <div className="columns dev-card-title">
        <div className="image column dev-card-image is-one-third">
          {props.user.image && <img id="dev-news-meal-pic" className="is-rounded is-pulled-right" src={props.user.image} alt={props.user.username}/>}
        </div>
        <div className="column dev-card-title">
          <h2 className="title is-6">{props.user.name}<br />{props.name}</h2>
        </div>
      </div>
      <div className="card-image dev-card-div-sizing">
        <img className="dev-card-image-sizing overlay"  src={props.image} alt={props.name} />
      </div>
    </div>
  )
}

export default Card
