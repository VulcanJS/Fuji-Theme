import Posts from "meteor/vulcan:posts";
import Categories from "meteor/vulcan:categories";
// import Tags from 'meteor/vulcan:forms-tags';

Posts.addField([
  {
    fieldName: 'videoId',
    fieldSchema: {
      type: String,
      optional: true,
      viewableBy: ['guests'],
      insertableBy: ['admins'],
      editableBy: ['admins']
    }
  },
  {
    fieldName: 'videoUrl',
    fieldSchema: {
      type: String,
      optional: true,
      viewableBy: ['members'],
      insertableBy: ['admins'],
      editableBy: ['admins']
    }
  },
  {
    fieldName: 'duration',
    fieldSchema: {
      type: Number,
      optional: true,
      viewableBy: ['guests'],
    }
  },
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