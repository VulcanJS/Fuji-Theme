import { replaceComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Dropdown, MenuItem } from 'react-bootstrap';

const FujiPostsCategories = ({post, showAll = false}) => {

  const categoriesDisplayed = 3;

  if (post.categories.length <= categoriesDisplayed || showAll) {
    return (
      <div className="posts-categories">
        {post.categories.map(category => 
          <Link className="posts-category" key={category._id} to={{pathname: "/", query: {cat: category.slug}}}>{category.name}</Link>
        )}
      </div>
    )
  } else {
    return (
      <div className="posts-categories">
        {_.first(post.categories, categoriesDisplayed).map(category => 
          <Link className="posts-category" key={category._id} to={{pathname: "/", query: {cat: category.slug}}}>{category.name}</Link>
        )}
        <Dropdown className="categories-dropdown" id="categories-dropdown">
          <Dropdown.Toggle>
            <a className="posts-category">...</a>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {_.rest(post.categories, categoriesDisplayed).map(category => 
              <LinkContainer key={category._id} to={{pathname: "/", query: {cat: category.slug}}}>
                <MenuItem className="dropdown-item" eventKey="1">{category.name}</MenuItem>
              </LinkContainer>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
};

FujiPostsCategories.displayName = "FujiPostsCategories";

replaceComponent('PostsCategories', FujiPostsCategories);