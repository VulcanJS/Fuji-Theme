import { Components, replaceComponent } from 'meteor/vulcan:lib';
import React from 'react';

const FujiPostsListHeader = () => {

  return (
    <div className="posts-list-header">
      <Components.SearchForm/>
      <div className="posts-list-header-categories">
        <Components.CategoriesList />
      </div>
    </div>
  )
}

replaceComponent('PostsListHeader', FujiPostsListHeader);
