import { Components, registerComponent } from 'meteor/vulcan:lib';
import React, { PropTypes, Component } from 'react';

const FujiPostsItemMeta = ({post}) =>
  <div className="posts-item-meta">
    <div className="posts-item-meta-likes">
      <Components.Icon name="like"/>
      {post.upvotes || 0}
    </div>
    <div className="posts-item-meta-comments">
      <Components.Icon name="comment2"/>
      {post.commentCount || 0}
    </div>
  </div>

registerComponent('PostsItemMeta', FujiPostsItemMeta);
