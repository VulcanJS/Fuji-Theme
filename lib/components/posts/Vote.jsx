import React, { PropTypes, Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { replaceComponent, Components, getRawComponent } from 'meteor/vulcan:core';
import { hasUpvoted } from 'meteor/vulcan:voting';
import { FormattedMessage } from 'react-intl';

class FujiVote extends getRawComponent('Vote') {

  renderLikeIcon() {
    return (
      <svg className="like-icon svg-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 800 800">
        <path d="M679.948 471.956l-261.48 251.828c-5.037 5.037-11.753 7.555-18.468 7.555s-13.43-2.52-18.468-7.556l-261.9-252.668c-3.357-2.938-95.694-87.3-95.694-188.03C23.938 160.11 99.066 86.66 224.56 86.66c73.45 0 142.283 57.92 175.44 90.66 33.158-32.74 101.99-90.66 175.44-90.66 125.495 0 200.623 73.45 200.623 196.426 0 100.73-92.336 185.092-96.115 188.87zm-104.51-331.572c-62.535 0-133.047 67.574-154.873 93.596-10.072 12.172-31.06 12.172-41.13 0-21.827-26.022-92.338-93.596-154.875-93.596-67.154 0-146.9 24.763-146.9 142.702 0 76.808 77.648 148.16 78.487 148.997L400 667.123l243.434-234.62c1.26-1.258 78.905-72.61 78.905-149.417 0-117.94-79.746-142.702-146.9-142.702z"/>
      </svg>
    )
  }

  renderLikedIcon() {
    return (
      <svg className="liked-icon svg-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 800 800">
        <path d="M679.948 471.956l-261.48 251.828c-5.037 5.037-11.753 7.555-18.468 7.555s-13.43-2.52-18.468-7.556l-261.9-252.668c-3.357-2.938-95.694-87.3-95.694-188.03C23.938 160.11 99.066 86.66 224.56 86.66c73.45 0 142.283 57.92 175.44 90.66 33.158-32.74 101.99-90.66 175.44-90.66 125.495 0 200.623 73.45 200.623 196.426 0 100.73-92.336 185.092-96.115 188.87z"/>
      </svg>
    )
  }

  render() {

    const document = this.props.document;
    const user = this.props.currentUser;

    const isUpvoted = hasUpvoted(user, document);
    
    const tooltip = (
      <Tooltip id="like-tooltip"><FormattedMessage id="posts.like"/></Tooltip>
    );

    const likeIcon = (
      <OverlayTrigger placement="bottom" overlay={tooltip}>
        <a className="like-button" onClick={this.upvote}>
          {isUpvoted ? this.renderLikedIcon() : this.renderLikeIcon()}
        </a>
      </OverlayTrigger>
    )
    
    return (
      <div className={`like ${this.getActionClass()}`}>
        {this.props.currentUser ?
          likeIcon : 
          <Components.ModalTrigger size="small" title={this.context.intl.formatMessage({id: 'users.please_log_in'})} component={likeIcon}>
            <div className="log-in-message">
              <h3><FormattedMessage id="users.log_in"/></h3>
              <Components.AccountsLoginForm />
            </div>
          </Components.ModalTrigger>
        }
      </div>
    )
  }

}

replaceComponent('Vote', FujiVote);
