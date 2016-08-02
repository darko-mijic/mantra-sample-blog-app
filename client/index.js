import autorun from 'meteor/space:tracker-mobx-autorun';
import posts from './autoruns/posts';
import post from './autoruns/post';
import comments from './autoruns/comments';
import { useStrict } from 'mobx';

useStrict(true);

export const postsAutorun = autorun(posts);
export const postAutorun = autorun(post);
export const commentsAutorun = autorun(comments);

FlowRouter.wait();

Meteor.startup(function() {
  if (Meteor.isClient) {
    postsAutorun.start();
    postAutorun.start();
    commentsAutorun.start();
    FlowRouter.initialize();
  }
});
