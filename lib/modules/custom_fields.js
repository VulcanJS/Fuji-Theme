import Posts from "meteor/vulcan:posts";
import Categories from "meteor/vulcan:categories";

Posts.addField([
  {
    fieldName: 'featured',
    fieldSchema: {
      type: Boolean,
      control: 'checkbox',
      optional: true,
      insertableBy: ['admins'],
      editableBy: ['admins'],
      viewableBy: ['guests'],
      group: {
        name: 'admin',
        order: 2
      }
    }
  }
]);