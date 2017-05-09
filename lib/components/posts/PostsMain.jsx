import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

const FujiPostsMain = props =>
  <div className="posts-main">

    <Components.PostsFeatured />

    <div className="posts-list-block">
      <div className="posts-main-heading">
        <h3><FormattedMessage id="posts.top"/></h3>
        <Link to={'/?view=top'}><FormattedMessage id="posts.view_more"/></Link>
      </div>
      <Components.PostsList terms={{view: 'top', limit: 5}} showHeader={false} showLoadMore={false}/>
    </div>

    <div className="posts-list-block">
      <div className="posts-main-heading">
        <h3><FormattedMessage id="posts.new"/></h3>
        <Link to={'/?view=new'}><FormattedMessage id="posts.view_more"/></Link>
      </div>
      <Components.PostsList terms={{view: 'new', limit: 5}} showHeader={false} showLoadMore={false}/>
    </div>

  </div>

FujiPostsMain.displayName = 'FujiPostsMain';

registerComponent('PostsMain', FujiPostsMain);
