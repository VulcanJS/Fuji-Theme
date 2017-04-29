import { ModalTrigger, Components, replaceComponent, getRawComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { withRouter } from 'react-router'
import Categories from 'meteor/vulcan:categories';
import { Link } from 'react-router';
import classNames from 'classnames';

class FujiCategory extends getRawComponent('Category') {

  render() {

    const {category, index, router} = this.props;

    // const currentQuery = router.location.query;
    const currentCategorySlug = router.location.query.cat;
    const newQuery = _.clone(router.location.query);
    newQuery.cat = category.slug;

    return (
      <div className={classNames('category-menu-item dropdown-item', {'category-menu-item-expanded': this.props.expanded}, {'category-menu-item-active': this.props.category.active})} onClick={this.props.toggleChildren}>
        <div className="category-menu-item-left">
          <Link className="category-menu-item-title" to={{pathname:"/", query: newQuery}}>
            {/*currentCategorySlug === category.slug ? <Components.Icon name="voted"/> :  null*/}
            {category.name}
          </Link>
          <Components.ShowIf check={Categories.options.mutations.edit.check} document={category}>{this.renderEdit()}</Components.ShowIf>
        </div>
        {this.props.hasChildren ? <a className="category-menu-expand">{this.props.expanded ? <Components.Icon name="collapse"/> : <Components.Icon name="expand"/>}</a> : null}
      </div>
    )
  }
}

replaceComponent('Category', FujiCategory);
