import { Components, registerComponent, withList, withCurrentUser } from 'meteor/vulcan:core';
import React from 'react';
import Posts from 'meteor/vulcan:posts';
import { FormattedMessage } from 'react-intl';

const FujiPostsFeatured = ({results, loading, currentUser}) => {

  if (loading) {
    return <Components.Loading />
  } else if (results.length === 0) {
    return null;
  } else {
    return (
      <div className="hero posts-featured">
        <div className="posts-main-heading">
          <h3><FormattedMessage id="posts.featured"/></h3>
        </div>
        {loading ? <Components.Loading/> : <Components.PostsItem post={results[0]} showExcerpt={true} currentUser={currentUser} /> }
      </div>
    )
  }

}


const options = {
  collection: Posts,
  queryName: 'postsFeaturedQuery',
  fragmentName: 'PostsList',
  terms: {view: 'featured', limit: 1}
};

registerComponent('PostsFeatured', FujiPostsFeatured, [withList, options], withCurrentUser);