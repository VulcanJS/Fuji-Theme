import Posts from "meteor/vulcan:posts";
import Categories from "meteor/vulcan:categories";
// import Tags from 'meteor/vulcan:forms-tags';

Posts.addField([
  // {
  //   fieldName: 'categories',
  //   fieldSchema: {
  //     type: [String],
  //     control: Tags,
  //   }
  // },
]);

Posts.removeField('url');
Posts.removeField('sticky');

Categories.addField([
  {
    fieldName: 'count',
    fieldSchema: {
      type: Number,
      optional: true,
      viewableBy: ['guests'],
    }
  }
]);