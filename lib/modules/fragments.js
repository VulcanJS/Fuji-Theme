import { registerFragment, extendFragment } from 'meteor/vulcan:lib';

extendFragment('PostsList', `
  featured
`);

extendFragment('PostsPage', `
  featured
  media
`);
