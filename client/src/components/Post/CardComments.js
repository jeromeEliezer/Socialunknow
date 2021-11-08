import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getPosts } from '../../actions/post.actions';
import FollowHandler from '../Profil/FollowHandler';
import { isEmpty } from '../Utils';
import EditDeleteComments from './EditDeleteComments';
import { timestampParser } from '../Utils';

const CardComments = ({ post }) => {
    const [text, setText] = useState('');
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

const handleComment = (e) => {
    e.preventDefault();
    if(text) {
        dispatch(addComment(post._id, userData._id, text, userData.pseudo))
        .then(() => dispatch(getPosts()))
        .then(() => setText(""));
    }
}

    return (
        <div className="comments-caontainer">
            {postMessage.comments.map((comment) => {
                return (
                    <div className={comment.commenterId === userData._id ?
                        "comment-container client" : "comment-container"}
                        key={comment._id}>
                        <div className='left-part'>
                            <img src={
                                !isEmpty(usersData[0]) &&
                                usersData
                                    .map((user) => {
                                        if (user._id === comment.commenterId) return user.picture
                                        else return null
                                    })
                                    .join('')
                            } alt="commenter-pic" />
                        </div>
                        <div className="right-part">
                            <div className="comment-header">
                                <div className="pseudo">
                                    <h3>{comment.commenterPseudo}</h3>
                                    <FollowHandler
                                        idToFollow={comment.commenterId}
                                        type={"card"} />
                                </div>
                                <span>{timestampParser}</span>
                            </div>
                            <p>{comment.text}</p>
                            <EditDeleteComments comment={comment} postId={post.id}/>
                        </div>
                    </div>
                );




            })}
            {userData._id && (
                <form action="" onSubmit={handleComment} className="comment-form">
                    <imput type="text" name="text" onChange={(e) => setText(e.target.value)} value={text} placeholder="Laisser un commentaire" />
                    <br/> 
                    <input type='submit' value='envoyer'/>
                </form>
            )}
            Comment
        </div>
    );
};

export default CardComments; 