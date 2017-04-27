import { replaceComponent, withCurrentUser } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, intlShape } from 'react-intl';
import { Link } from 'react-router'
import Users from 'meteor/vulcan:users';

const FujiPostsViews = (props, context) => {

  let views = ["top", "new", "best"];
  const adminViews = ["pending", "rejected", "scheduled"];

  if (Users.canDo(props.currentUser, "posts.edit.all")) {
    views = views.concat(adminViews);
  }

  const query = _.clone(props.router.location.query);

  return (
    <div className="posts-views">
      {views.map(view =>
        <Link key={view} to={{pathname: "/", query: {...query, view: view}}}><FormattedMessage id={"posts."+view}/></Link>
      )}
      <Link to={"/daily"}><FormattedMessage id={"posts.daily"}/></Link>
    </div>
  )
}

FujiPostsViews.contextTypes = {
  currentRoute: React.PropTypes.object,
  intl: intlShape
};

FujiPostsViews.displayName = "FujiPostsViews";

replaceComponent('PostsViews', FujiPostsViews);
