import { Components, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';

const containsFilteringOptions = query => {
  const filteringOptions = ['view', 'after', 'before', 'cat', 'query', 'place'];
  return  _.intersection(_.keys(query), filteringOptions).length > 0;
}

const FujiPostsHome = props => {

  const terms = _.clone(props.location.query);

  return containsFilteringOptions(terms) ?

    <div className="posts-search-results">
      {terms.cat ? <Components.FujiCategoryHeading slug={terms.cat}/> : null}
      <Components.PostsList terms={terms} showHeader={false} />
    </div> : 
    
    <Components.PostsMain/>;

}

replaceComponent('PostsHome', FujiPostsHome);
