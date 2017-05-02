import { Components, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, intlShape } from 'react-intl';
import { Button } from 'react-bootstrap';

const FujiPostsNewButton = (props, context) => {

  const size = props.currentUser ? "large" : "small";
  const button = <Button className="posts-new-button" bsStyle="primary"><Components.Icon name="new"/><FormattedMessage id="posts.new_post"/></Button>;
  return (
    <Components.ModalTrigger size={size} title={context.intl.formatMessage({id: "posts.new_post"})} component={button}>
      <Components.PostsNewForm />
    </Components.ModalTrigger>
  )
}

FujiPostsNewButton.contextTypes = {
  intl: intlShape
};

replaceComponent('PostsNewButton', FujiPostsNewButton);
