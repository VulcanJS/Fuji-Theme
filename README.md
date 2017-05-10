# Fuji-Theme
A Vulcan theme for showcasing videos and photos

![https://d3vv6lp55qjaqc.cloudfront.net/items/231m2T1E0z3P1O270I2f/fuji-screenshot.jpg?X-CloudApp-Visitor-Id=d40749865873d7b5ab32c80852150f74&v=979cb39b](https://d3vv6lp55qjaqc.cloudfront.net/items/231m2T1E0z3P1O270I2f/fuji-screenshot.jpg?X-CloudApp-Visitor-Id=d40749865873d7b5ab32c80852150f74&v=979cb39b)

![https://d3vv6lp55qjaqc.cloudfront.net/items/0l1z2c1W3p3W171G0K3Z/fuji-mobile-screenshot.jpg?X-CloudApp-Visitor-Id=d40749865873d7b5ab32c80852150f74&v=f284f34f](https://d3vv6lp55qjaqc.cloudfront.net/items/0l1z2c1W3p3W171G0K3Z/fuji-mobile-screenshot.jpg?X-CloudApp-Visitor-Id=d40749865873d7b5ab32c80852150f74&v=f284f34f)

### Install

```
meteor add vulcan:theme-fuji
```

### Features

- Featured post section (and `featured` custom field).

### Colors

You can override the main color with the following SCSS code in your own child theme:

```scss

$new-primary-color: #A1DAEA;

a{
  &:hover{
    color: $new-primary-color;
  }
}
.users-account-menu, .users-menu{
  .dropdown-toggle{
    &:hover, &:active, &:focus{
      color: $new-primary-color
    }
  }
}
.dropdown-item:focus, .dropdown-item:hover{
  background: $new-primary-color;
}
.posts-categories{
  .posts-category, .dropdown-item a{
    &:hover{
      background: $new-primary-color;
      border-color: $new-primary-color;
    }
  }
}
.category-heading-item{
  &.category-heading-item-parent:hover{
    background: $new-primary-color;
    &:after{
      border-left-color: $new-primary-color;
    }
  }
}

.btn-primary, .btn-primary.active, button{
  background-color: $new-primary-color;
}
.dropdown-item{
  &.active, &.active:hover{
    background: $new-primary-color;
  }
}
.nav-user, .nav-new-post{
  @include small{
    .btn:hover{
      background: $new-primary-color;
    }
  }
}
.sidebar-toggle:hover{
  background: $new-primary-color;
}
.newsletter{
  background: $new-primary-color;
}
.posts-load-more{
  background: $new-primary-color;
}
```
