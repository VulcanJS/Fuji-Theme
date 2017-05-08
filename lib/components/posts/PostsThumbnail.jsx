import { replaceComponent, Components } from 'meteor/vulcan:core';
import React from 'react';
import Posts from 'meteor/vulcan:posts';
import { Link } from 'react-router';

const FujiPostsThumbnail = ({post}) => 
  <Link className="posts-thumbnail" to={Posts.getPageUrl(post)}>
    <span><img src={Posts.getThumbnailUrl(post)} /></span>
    <Components.PostsItemMeta post={post} />
  </Link>

FujiPostsThumbnail.displayName = "FujiPostsThumbnail";

replaceComponent('PostsThumbnail', FujiPostsThumbnail);