import { Components, registerComponent } from 'meteor/vulcan:lib';
import React from 'react';

const FujiNav = ({currentUser}) =>

  <div className="nav">

    <div className="nav-user">
      {!!currentUser ? <Components.UsersMenu/> : <Components.UsersAccountMenu/>}
    </div>

    <div className="nav-new-post">
      <Components.PostsNewButton/>
    </div>

  </div>

FujiNav.displayName = 'FujiNav';

registerComponent('Nav', FujiNav);