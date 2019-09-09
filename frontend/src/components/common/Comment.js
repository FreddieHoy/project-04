import React from 'react'
import Auth from '../../lib/Auth'


const Comment = ({ user, createdAt, content, id, handleCommentDelete}) => {
  return (

    <div className="content table tableBorder">
      <div className="box">
        <div>
          {user.username}
        </div>
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
