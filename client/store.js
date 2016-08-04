import { observable } from 'mobx';

export default observable({
  selectedPostId: null,
  selectedPost: null,
  posts: [],
  loadingPosts: null,
  comments: [],
  newPostFormStatus: null,
  newPostFormSavingLastError: null,
  newCommentFormStatus: null,
  newCommentFormSavingLastError: null
});
