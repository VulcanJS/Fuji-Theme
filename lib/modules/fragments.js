import { registerFragment, extendFragment } from 'meteor/vulcan:lib';

registerFragment(`
  fragment PostsList on Post {
    # vulcan:posts
    _id
    title
    slug
    postedAt
    createdAt
    status
    body
    htmlBody
    excerpt
    viewCount
    clickCount
    # vulcan:users
    userId
    user {
      ...UsersMinimumInfo
    }
    # vulcan:embedly
    thumbnailUrl
    # vulcan:categories
    categories {
      ...CategoriesMinimumInfo
    }
    # vulcan:comments
    commentCount
    commenters {
      ...UsersMinimumInfo
    }
    # vulcan:voting
    upvoters {
      _id
    }
    upvotes
    baseScore
    score
    duration
  }
`);

registerFragment(`
  fragment PostsPage on Post {
    ...PostsList
  }
`);