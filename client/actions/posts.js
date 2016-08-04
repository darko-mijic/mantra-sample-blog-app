import state from '../store';
import { action } from 'mobx';

export const selectPost = action('selectPost', postId => {
  state.selectedPostId = postId;
});

export const deselectPost = action('deselectPost', () => {
  state.selectedPostId = null;
});

export const createPost = action('createPost', (title, content) => {
  state.newPostFormStatus = 'SAVING';
  const id = Meteor.uuid();
  //TODO: introduce better latency compensation and update this comment
  // There is a method stub for this in the config/method_stubs
  // That's how we are doing latency compensation
  Meteor.call('posts.create', id, title, content, (err) => {
    if (err) {
      setPostSavingError(err.message)
    } else {
      setPostSavingSuccess(id);
    }
  });

});

const setPostSavingError = action('setPostSavingError', (error) => {
  state.newPostFormStatus = 'SAVING_ERROR';
  state.newPostFormSavingLastError = error;
});

const setPostSavingSuccess = action('setPostSavingSuccess', (id) => {
  state.newPostFormStatus = 'SAVING_SUCCESS';
  FlowRouter.go(`/post/${id}`);
});
