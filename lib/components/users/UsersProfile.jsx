import { Components, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Users from 'meteor/vulcan:users';
import { Link } from 'react-router';

const FujiUsersProfile = (props) => {
  if (props.loading) {

    return <div className="page users-profile"><Components.Loading/></div>

  } else if (!props.document) {

    console.log(`// missing user (_id/slug: ${props.documentId || props.slug})`);
    return <div className="page users-profile"><FormattedMessage id="app.404"/></div> 
  
  } else {

    const user = props.document;

    return (
      <div className="users-profile">

        <Components.HeadTags url={Users.getProfileUrl(user, true)} title={Users.getDisplayName(user)} />
        
        <div className="users-profile-info">
          <h2 className="page-title">{Users.getDisplayName(user)}</h2>
          {user.htmlBio ? <div dangerouslySetInnerHTML={{__html: user.htmlBio}}></div> : null }
          <ul>
            {user.twitterUsername ? <li><a href={"http://twitter.com/" + user.twitterUsername}>@{user.twitterUsername}</a></li> : null }
            {user.website ? <li><a href={user.website}>{user.website}</a></li> : null }
            <Components.ShowIf check={Users.options.mutations.edit.check} document={user}>
              <li><Link to={Users.getEditUrl(user)}><FormattedMessage id="users.edit_account"/></Link></li>
            </Components.ShowIf>
          </ul>
        </div>

        <div className="posts-list-block">
          <div className="posts-main-heading">
            <h3><FormattedMessage id="users.posts"/></h3>
          </div>
          <Components.PostsList terms={{view: "userPosts", userId: user._id, limit: 5}} showHeader={false} />
        </div>

        <div className="posts-list-block">
          <div className="posts-main-heading">
            <h3><FormattedMessage id="users.upvoted_posts"/></h3>
          </div>
          <Components.PostsList terms={{view: "userUpvotedPosts", userId: user._id, limit: 5}} showHeader={false} />
        </div>

      </div>
    )
  }
}

FujiUsersProfile.displayName = "FujiUsersProfile";

replaceComponent('UsersProfile', FujiUsersProfile);
