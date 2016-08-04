import { observable } from 'mobx';

export default observable({
  selectedPostId: null,
  selectedPost: null,
  posts: [],
  loadingPosts: null,
  comments: [],
  loadingComments: null,
  newPostFormStatus: null,
  newPostFormSavingLastError: null,
  newCommentFormStatus: null,
  newCommentFormSavingLastError: null
});
