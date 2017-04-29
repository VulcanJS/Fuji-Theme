/*
  Let's add an international label to the field added in custom_fields.js
*/

import { addStrings } from 'meteor/vulcan:core';

addStrings('en', {
  'posts.view_more': 'View more…',
  'newsletter.subscribe_prompt': 'Get the best videos in your inbox: '
});