import { ModalTrigger, Components, replaceComponent, getRawComponent } from "meteor/vulcan:core";
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Categories from 'meteor/vulcan:categories';
import { withApollo } from 'react-apollo';

class FujiCategoriesList extends getRawComponent('CategoriesList') {

  render() {

    const nestedCategories = this.getNestedCategories();

    return (
      <div>
          <div className="category-menu-item category-menu-item-all dropdown-item">
            <Link className="category-menu-item-title" to={{pathname:"/"}}>
              <FormattedMessage id="categories.all"/>
            </Link>
          </div>
          {
            // categories data are loaded
            !this.props.loading ?
              // there are currently categories
              nestedCategories && nestedCategories.length > 0 ?
                nestedCategories.map((category, index) => <Components.CategoriesNode key={index} category={category} index={index} currentCategorySlug={this.props.router.location.query.cat} />)
              // not any category found
              : null
            // categories are loading
            : <Components.Loading />
          }
          <Components.ShowIf check={Categories.options.mutations.new.check}>
            <div className="categories-new-button category-menu-item dropdown-item">
              <ModalTrigger title={<FormattedMessage id="categories.new"/>} component={<Button bsStyle="primary"><FormattedMessage id="categories.new"/></Button>}>
                <Components.CategoriesNewForm/>
              </ModalTrigger>
            </div>
          </Components.ShowIf>
      </div>
    )

  }
}

replaceComponent('CategoriesList', FujiCategoriesList, withApollo);
