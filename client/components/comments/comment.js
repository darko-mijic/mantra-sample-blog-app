import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';

const Comment = ({ id, author, text, saving }) => (
  <div key={id} className="comment">
    <b>{author}:</b> {text}
    {saving ? '...' : null}
  </div>
);

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  saving: PropTypes.string
};

export default observer(Comment);
