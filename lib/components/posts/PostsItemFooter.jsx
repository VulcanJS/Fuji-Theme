import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';

const FujiPostsItemFooter = props =>
  <div className="posts-item-footer"></div>

registerComponent('PostsItemFooter', FujiPostsItemFooter);
