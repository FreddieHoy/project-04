import React from 'react'
import Auth from '../../lib/Auth'

import { Link } from 'react-router-dom'


const Comment = ({ user, createdAt, content, id, handleCommentDelete}) => {
  return (

    <div className="content box">
      <button className="delete is-pulled-right" id={id} onClick= {handleCommentDelete}></button>
      <div>
        <Link to={`/users/${user.id}`} >
          <div className="subtitle is-5">{user.username} - {createdAt}</div>
        </Link>
        <hr />
        <div className=""> - {content}</div>
        {Auth.isAuthenticated() && <div className="deleteContainer">
        </div>}
      </div>
    </div>

  )
}

export default Comment
