import React from 'react'
import Auth from '../../lib/Auth'

import { Link } from 'react-router-dom'


const Comment = ({ user, createdAt, content, id, handleCommentDelete}) => {
  return (

    <div className="content table tableBorder">
      <div className="box">
        <Link to={`/users/${user.id}`} >
          {user.username}
        </Link>
        <div>
          {createdAt}
        </div>
        <div>
          {content}
        </div>
        {Auth.isAuthenticated() && <div className="deleteContainer">
          <button className="delete" id={id} onClick= {handleCommentDelete}></button>
        </div>}
      </div>
    </div>

  )
}

export default Comment
