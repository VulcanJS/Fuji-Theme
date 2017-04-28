import { Components, replaceComponent, getSetting } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import moment from 'moment';

class FujiPostsHome extends Component {
  
  constructor() {
    super();
    this.getParams = this.getParams.bind(this);
  }

  getParams() {
    const params = _.clone(this.props.location.query);
    // "scrollToTop" parameter doesn't affect view, so don't take it into account
    delete params.scrollToTop;
    return params; 
  }

  renderList() {
    const params = this.getParams();
    return <Components.PostsList terms={params}/>
  }

  renderDaily() {
    const numberOfDays = getSetting('numberOfDays', 5);
    const terms = {
      view: 'top',
      after: moment().subtract(numberOfDays - 1, 'days').format("YYYY-MM-DD"),
      before: moment().format("YYYY-MM-DD"),
    };
    return (
      <Components.PostsDailyList terms={terms} />
    )
  }

  render() {

    const showList = SidebarHelpers.containsFilteringOptions(this.getParams());

    return (
      <div className="home-list">
        <div className="home-list-main">
          {showList ? this.renderList() : this.renderDaily()}
        </div>
        <div className="home-list-sidebar">
          <Components.Sidebar/>
        </div>
      </div>
    )
  }
}

replaceComponent('PostsHome', FujiPostsHome);
