import React from 'react'
import Auth from '../../lib/Auth'


const Comment = ({ user, createdAt, content, _id, handleCommentDelete }) => {
  return (

    <div className="content table tableBorder">
      <table className="">
        <tbody>
          <tr>
            <td><span className="commentUser">User: {user.username}</span>
              {' '}<br />
              <small>Date: {(new Date(createdAt)).toLocaleDateString()}</small>
            </td>
            <td>
              {Auth.isAuthenticated() && <div className="deleteContainer">
                <button className="delete" id={_id} onClick= {handleCommentDelete}></button>
              </div>}
            </td>
          </tr>
          <tr>
            <td colSpan="2">Comment: <br />{content}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default Comment
