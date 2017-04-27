import React from 'react';
import { Link } from 'react-router';
import { replaceComponent, getSetting, Components } from 'meteor/vulcan:core';
import Posts from 'meteor/vulcan:posts';

const FujiHeader = (props, context) => {
  
  const logoUrl = getSetting("logoUrl");
  const siteTitle = getSetting("title", "Vulcan");
  const tagline = getSetting("tagline");

  return (
    <div className="header-wrapper">

      <header className="header">

        <div className="logo">
          <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
          {tagline ? <h2 className="tagline">{tagline}</h2> : "" }
        </div>
        
        <div className="nav">
          
          <div className="nav-links">
            <Link to="/about">About</Link>
          </div>

          <div className="nav-user">
            {!!props.currentUser ? <Components.UsersMenu/> : <Components.UsersAccountMenu/>}
          </div>

          <Components.ShowIf check={Posts.options.mutations.new.check}>
            <div className="nav-new-post">
              <Components.PostsNewButton/>
            </div>
          </Components.ShowIf>

        </div>

      </header>
    </div>
  )
}


replaceComponent('Header', FujiHeader);
