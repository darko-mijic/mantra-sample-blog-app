import React, { PropTypes } from 'react';
import { propTypes } from 'mobx-react';
import { observer } from 'mobx-react';
import PostListItem from './post_list_item';

const PostList = ({ posts }) => (
  <div className='postlist'>
    <ul>
      {posts.map(post => <PostListItem key={post._id} id={post._id} title={post.title} />)}
    </ul>
  </div>
);

PostList.propTypes = {
  posts: propTypes.observableArray.isRequired
};

export default observer(PostList);
