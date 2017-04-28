import { Components, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';

const containsFilteringOptions = query => {
  const filteringOptions = ["view", "after", "before", "cat", "query"];
  return  _.intersection(_.keys(query), filteringOptions).length > 0;
}

class FujiPostsHome extends Component {

  getTerms() {
    // clone query since it will be passed as terms and might be modified later
    return _.clone(this.props.location.query);
  }

  renderSearch() {
    return (
      <div className="posts-search">
        {this.getTerms().cat ? <Components.FujiCategoryHeading slug={this.getTerms().cat}/> : null}
        <Components.PostsList terms={this.getTerms()} showHeader={false} />
      </div>
    )
  }

  renderHome() {
    return (
      <div className="posts-home">

        <h3>Recent</h3>
        <Components.PostsList terms={{view: 'new', limit: 5}} showHeader={false} showLoadMore={false}/>

        <h3>Trending</h3>
        <Components.PostsList terms={{view: 'top', limit: 5}} showHeader={false} showLoadMore={false}/>

      </div>
    )
  }

  render() {
    return containsFilteringOptions(this.getTerms()) ? this.renderSearch() : this.renderHome();
  }
}

replaceComponent('PostsHome', FujiPostsHome);
