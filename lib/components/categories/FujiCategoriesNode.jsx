import { Components, getRawComponent, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

class FujiCategoriesNode extends getRawComponent('CategoriesNode') {

  constructor(props) {
    super(props);
    this.toggleChildren = this.toggleChildren.bind(this);
    this.state = {
      expanded: !!props.category.expanded
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState, props) => {
      return {expanded: nextProps.category.expanded};
    });
  }

  toggleChildren() {
    if (!!this.props.category.childrenResults) {
      this.setState({
        expanded: !this.state.expanded
      });
    }
  }

  renderCategory(category) {
    return (
      <Components.Category category={category} key={category._id} hasChildren={!!this.props.category.childrenResults} toggleChildren={this.toggleChildren} expanded={this.state.expanded} />
    )
  }

  render() {

    const category = this.props.category;
    const children = this.props.category.childrenResults;
    const classes = classNames(
      'categories-node', 
      `categories-node-level-${this.props.category.level}`, 
      {'categories-node-expanded': this.state.expanded}, 
      {'categories-node-active': this.props.category.active}
    );

    return (
      <div className={classes}>
        {this.renderCategory(category)}
        {children && this.state.expanded ? this.renderChildren(children) : null}
      </div>
    )
  }

}

replaceComponent('CategoriesNode', FujiCategoriesNode);
