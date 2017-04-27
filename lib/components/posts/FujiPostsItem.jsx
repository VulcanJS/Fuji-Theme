import { Components, replaceComponent, getRawComponent } from 'meteor/vulcan:lib';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Link } from 'react-router';
import Posts from "meteor/vulcan:posts";

class FujiPostsItem extends getRawComponent('PostsItem') {
  
  renderActions() {
    return (
      <div className="posts-actions">
        <Components.ModalTrigger title="Edit Post" component={<a className="posts-action-edit"><Components.Icon name="edit" /></a>}>
          <Components.PostsEditForm post={this.props.post} />
        </Components.ModalTrigger>
      </div>
    )
  }

  render() {

    const {post} = this.props;

    let postClass = "posts-item";
    if (post.sticky) postClass += " posts-sticky";

    return (
      <div className={postClass}>

        <div className="posts-item-image">
          
          {post.thumbnailUrl ? <Components.PostsThumbnail post={post}/> : null}

          {Posts.options.mutations.edit.check(this.props.currentUser, post) ? this.renderActions() : null}
        
        </div>

        <div className="posts-item-content">

          <h3 className="posts-item-title">
            <Link to={Posts.getLink(post)} className="posts-item-title-link" target={Posts.getLinkTarget(post)}>
              {post.title}
            </Link>
          </h3>

          {this.renderCategories()}

          <div className="posts-item-meta">
            {/*
            <div className="posts-item-comments">
              <Link to={Posts.getPageUrl(post)}>
                <FormattedMessage id="comments.count" values={{count: post.commentCount}}/>
              </Link>
            </div>
            */}
          </div>

        </div>

        {/* this.renderCommenters() */}

      </div>
    )
  }
}

replaceComponent('PostsItem', FujiPostsItem);
