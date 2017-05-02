import React from 'react';
import { Link } from 'react-router';
import { replaceComponent, getSetting, Components } from 'meteor/vulcan:core';
import Posts from 'meteor/vulcan:posts';

const FujiHeader = (props, context) => {
  
  const logoUrl = getSetting("logoUrl");
  const siteTitle = getSetting("title", "Fuji");
  const tagline = getSetting("tagline");

  return (
    <div className="header-wrapper">

      <header className="header">

        <div className="logo">
          <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
          {tagline ? <h2 className="tagline">{tagline}</h2> : "" }
        </div>
        
        <Components.Nav/>

        <Components.SidebarToggle/>
        
      </header>

    </div>
  )
}

replaceComponent('Header', FujiHeader);
