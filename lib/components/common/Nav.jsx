import { Components, registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import React from 'react';

const FujiNav = ({currentUser}) =>

  <div className="nav">

    <div className="nav-item nav-user">
      {!!currentUser ? <Components.UsersMenu/> : <Components.UsersAccountMenu/>}
    </div>

    <div className="nav-item nav-new-post">
      <Components.PostsNewButton/>
    </div>

  </div>

FujiNav.displayName = 'FujiNav';

registerComponent('Nav', FujiNav, withCurrentUser);