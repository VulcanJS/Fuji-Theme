import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';
import Categories from 'meteor/vulcan:categories';
import { withApollo } from 'react-apollo';
import { Link } from 'react-router';

const CategoryItem = ({category}) =>
  <div className="category-heading-item category-heading-item-parent">
    <Link to={{pathname:"/", query: {cat: category.slug}}}>{category.name}</Link>
  </div>

const FujiCategoryHeading = (props, context) => {
  
  const category = Categories.findOneInStore(props.client.store, {slug: props.slug});
  const parents = Categories.getParents(category, props.client.store);

  return (
    <div className="category-heading">
      {parents.reverse().map(category => <CategoryItem category={category} key={category.slug} />)}
      <div className="category-heading-item category-heading-item-active">{category && category.name}</div>
    </div>
  )
}


registerComponent('FujiCategoryHeading', FujiCategoryHeading, withApollo);
