import { action } from 'mobx';
import state from '../store';

export const createComment = action('createComment', (postId, text) => {
  const id = Meteor.uuid();
  Meteor.call('posts.createComment', id, postId, text, err => {
    if (err) {
      setCommentSavingError(err.message)
    } else {
      setCommentSavingSuccess();
    }
  });
});

const setCommentSavingError = action('setCommentSavingError', error => {
  state.newCommentFormStatus = 'SAVING_ERROR';
  state.newCommentFormSavingLastError = error;
});

const setCommentSavingSuccess = action('setPostSavingSuccess', () => {
  state.newCommentFormStatus = 'SAVING_SUCCESS';
});
