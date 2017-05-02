import { Components, getRawComponent, registerComponent, withList, withCurrentUser } from 'meteor/vulcan:core';
import Posts from 'meteor/vulcan:posts';

const FujiPostsList = getRawComponent('PostsList');

const options = {
  collection: Posts,
  queryName: 'postsListQuery',
  fragmentName: 'PostsList',
  limit: 12
};

registerComponent('PostsList', FujiPostsList, withCurrentUser, [withList, options]);
