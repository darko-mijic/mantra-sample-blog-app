import React, { PropTypes } from 'react';
import { propTypes } from 'mobx-react';
import { observer } from 'mobx-react';

const PostList = ({ posts }) => (
  <div className='postlist'>
    <ul>
      {posts.map(post => (
        <li key={post._id}>
          <a href={`/post/${post._id}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

PostList.propTypes = {
  posts: propTypes.observableArray.isRequired
};

export default observer(PostList);
