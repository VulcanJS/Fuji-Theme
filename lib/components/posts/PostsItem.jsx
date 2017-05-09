import { Components, registerComponent, replaceComponent, getRawComponent } from 'meteor/vulcan:lib';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Link } from 'react-router';
import Posts from "meteor/vulcan:posts";
import moment from 'moment';

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

  formatDuration(duration) {
    const mDuration = moment.duration(this.props.post.media.duration, 'seconds');
    if (this.props.post.media.duration > 3600) {
      return `${mDuration.hours()}:${mDuration.minutes() < 10 ? '0' : ''}${mDuration.minutes()}:${mDuration.seconds() < 10 ? '0' : ''}${mDuration.seconds()}`;
    } else {
      return `${mDuration.minutes()}:${mDuration.seconds() < 10 ? '0' : ''}${mDuration.seconds()}`;
    }
  }

  render() {

    const post = this.props.post;

    let postClass = "posts-item";
    if (post.sticky) postClass += " posts-sticky";

    return (
      <div className={postClass}>

        {post.thumbnailUrl ?

          <div className="posts-item-image">
            
            <Components.PostsThumbnail post={post}/>

            {post.media && post.media.duration ? <span className="posts-item-duration">{this.formatDuration(post.media.duration)}</span> : null}
          
          </div>

        : null}

        <div className="posts-item-content">

          <div className="posts-item-body">

            <h3 className="posts-item-title">
              <Link to={Posts.getPageUrl(post)} className="posts-item-title-link">
                {post.title}
              </Link>
            </h3>

            {this.renderCategories()}

            {this.props.showExcerpt ? <div className="posts-item-excerpt">{post.excerpt}</div>: null}

          </div>

          <Components.PostsItemFooter post={post} />

          {Posts.options.mutations.edit.check(this.props.currentUser, post) ? this.renderActions() : null}

        </div>


      </div>
    )
  }
}

registerComponent('FujiPostsItem', FujiPostsItem);
replaceComponent('PostsItem', FujiPostsItem);
