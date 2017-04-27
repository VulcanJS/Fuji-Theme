import { Components, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';

const FujiPostsHome = (props, context) => {
  const terms = _.isEmpty(props.location && props.location.query) ? {view: 'new'}: props.location.query;
  return (
    <div className="posts-home">
      {props.location.query && props.location.query.cat ? <Components.FujiCategoryHeading slug={props.location.query.cat}/> : null}
      <Components.PostsList terms={terms} showHeader={false} />
    </div>
  )
};

replaceComponent('PostsHome', FujiPostsHome);
