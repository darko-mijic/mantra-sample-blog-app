import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';

const PostListItem = ({ id, title }) => (
  <li key={id}>
    <a href={`/post/${id}`}>{title}</a>
  </li>
);

PostListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default observer(PostListItem);