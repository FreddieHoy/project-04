import React from 'react'




const Card = (props) => {
  return (
    <div>
      <div className="card-image dev-card-div-sizing">
        <img className="dev-card-image-sizing overlay"  src={props.image} alt={props.name} />
      </div>
      {props.ishovering && <div>
        <div className="has-text-centered">{props.name}</div>
      </div>}
      <hr />
    </div>
  )
}

export default Card
