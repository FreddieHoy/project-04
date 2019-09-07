import React from 'react'




const Card = (props) => {
  return (
    <div className="card tableBorder">
      <div className="card-image">
        <figure className="image">
          <img onMouseLeave={props.handlehover} onMouseEnter={props.handlehover} src={props.image} alt={props.name} />
        </figure>
      </div>
      {props.ishovering && <div className="card-header">
        <div className="card-header-title">{props.name}</div>
      </div>}
    </div>
  )
}

export default Card
