import React from 'react'




const Card = (props) => {
  return (
    <div className="">
      <div className="card-image dev-profile-card-div-sizing">
        <img className="dev-profile-card-image-sizing " src={props.image} alt={props.name} />
      </div>
      <div className="">
        <div className="has-text-centered dev-vertical-center-text">{props.name}</div>
      </div>
    </div>
  )
}

export default Card
