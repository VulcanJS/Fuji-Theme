import Posts from 'meteor/vulcan:posts';

/**
 * @summary Top view
 */
Posts.addView('featured', terms => ({
  options: {
    sort: {featured: -1, postedAt: -1}
  }
}));
