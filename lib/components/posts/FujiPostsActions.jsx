import { Components, registerComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, intlShape } from 'react-intl';

const FujiPostsActions = ({post}, context) => 
  <div className="post-actions">
    <Components.ModalTrigger title={context.intl.formatMessage({id: "posts.edit"})} component={<a className="posts-action-edit"><FormattedMessage id="posts.edit"/></a>}>
      <Components.PostsEditForm post={post} />
    </Components.ModalTrigger>
  </div>

FujiPostsActions.contextTypes = {
  intl: intlShape
};

registerComponent('FujiPostsActions', FujiPostsActions);
