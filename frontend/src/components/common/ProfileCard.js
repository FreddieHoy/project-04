import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card-image dev-profile-card-div-sizing">
        <img className="dev-profile-card-image-sizing " src={props.image} alt={props.name} />
      </div>
      <div>
        <div className="has-text-centered title is-5 dev-vertical-center-text">{props.name}</div>
      </div>
    </div>
  )
}

export default Card
