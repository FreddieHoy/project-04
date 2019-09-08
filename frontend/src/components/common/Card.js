import React from 'react'




const Card = (props) => {
  return (
    <div className="">

      <div className="columns">
        <div className="image column is-one-third profile-pic">
          <div className="is-rounded dev-show-userpic is-pulled-right">
            {props.user.image && <img className="is-rounded dev-show-userpic is-pulled-right" src={props.user.image} alt={props.user.username}/>}
          </div>
        </div>
        <div className="column dev-card-title">
          <h2 className="subtitle is-5">{props.user.username}</h2>
        </div>
      </div>

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
