import { Components, registerComponent } from 'meteor/vulcan:lib';
import React from 'react';

const FujiSidebar = () => {

  return (
    <div className="sidebar">
      <Components.SearchForm/>
      <div className="sidebar-categories">
        <Components.CategoriesList />
      </div>
    </div>
  )
}

registerComponent('Sidebar', FujiSidebar);
