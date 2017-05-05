/*
  Let's add an international label to the field added in custom_fields.js
*/

import { addStrings } from 'meteor/vulcan:core';

addStrings('en', {
  'posts.url': 'Link',
  'posts.body': 'Description',
  'posts.new': 'Recent',
  'posts.top': 'Trending',
  'posts.view_more': 'View more…',
  'posts.new_post': 'Submit Video',
  'posts.no_more': 'No more videos',
  'newsletter.subscribe_prompt': 'Get the best videos in your inbox: ',
  'users.posts': 'Submitted Videos',
  'users.upvoted_posts': 'My Likes',
});