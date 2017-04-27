import { Components, registerComponent } from 'meteor/vulcan:lib';
import React from 'react';

const FujiSidebar = () => {

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar posts-list-header">
        <Components.SearchForm/>
        <div className="posts-list-header-categories">
          <Components.CategoriesList />
        </div>
      </div>
    </div>
  )
}

registerComponent('Sidebar', FujiSidebar);
