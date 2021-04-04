import React from 'react'

function ReviewComponent(props){
    return(
    <div>
        <b>{props.review.user.username}</b>
        <h1>{props.review.title}</h1>
        <h3>Score : {props.review.rating}</h3>
        <p>{props.review.comment_text}</p>
        <p>------------------------------------</p>
    </div>)
}

export default ReviewComponent