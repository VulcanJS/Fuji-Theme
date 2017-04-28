import { replaceComponent, Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import Posts from "meteor/vulcan:posts";
import { Link } from 'react-router';
import { intlShape } from 'react-intl';

const FujiPostsPage = props => {
 
 if (props.loading) {

    return <div className="posts-page"><Components.Loading/></div>

  } else {

    const post = props.document;

    const htmlBody = {__html: post.htmlBody};
    const media = {__html: post.media && post.media.html};


    return (
      <div className="posts-page">
        <Components.HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />
        
        <div className="posts-item-media" dangerouslySetInnerHTML={media}></div>

        <h2 className="posts-item-title">
          <Link to={Posts.getLink(post)} className="posts-item-title-link" target={Posts.getLinkTarget(post)}>
            {post.title}
          </Link>
        </h2>

        {/*props.currentUser ? <Components.FujiVideo post={post}/> : <Components.FujiVideoNoAccess post={post}/> */}

        {post.htmlBody ? <div className="posts-page-body" dangerouslySetInnerHTML={htmlBody}></div> : null}

        <div className="posts-page-extra">
          
          <Components.Vote collection={Posts} document={post} currentUser={props.currentUser}/>

          <Components.PostsCategories post={post} />

          <div className="posts-page-meta">
            {props.currentUser && props.currentUser.isAdmin ? <Components.PostsStats post={post} /> : null}
            {Posts.options.mutations.edit.check(props.currentUser, post) ? <Components.FujiPostsActions post={post} /> : null}
          </div>

        </div>

        {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}

        <Components.PostsCommentsThread terms={{postId: post._id, view: 'postComments'}} />

      </div> 
    )
  }

};

replaceComponent('PostsPage', FujiPostsPage);
