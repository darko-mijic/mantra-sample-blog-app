import React, { PropTypes } from 'react';
import CreateComment from '../../containers/comments/create_comment';
import Comment from './comment';
import { observer } from 'mobx-react';
import { propTypes } from 'mobx-react';

const CommentList = ({comments, postId}) => (
  <div className="comments">
    <div>
      <CreateComment postId={postId}/>
    </div>
    <div className="comment-list">
      {comments.length === 0 ? <p>No Comments Yet!</p> : null}
      {comments.map(comment => <Comment key={comment._id}
                                        id={comment._id}
                                        author={comment.author}
                                        text={comment.text}
                                        saving={comment.saving ? '...' : null}
      />)}
    </div>
  </div>
);

CommentList.propTypes = {
  comments: propTypes.observableArray.isRequired,
  postId: PropTypes.string.isRequired
};

export default observer(CommentList);
