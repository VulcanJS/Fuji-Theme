import { removeCallback } from 'meteor/vulcan:core';

removeCallback('posts.new.sync', 'PostsNewUpvoteOwnPost');
removeCallback('comments.new.sync', 'CommentsNewUpvoteOwnComment');
