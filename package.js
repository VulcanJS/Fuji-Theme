Package.describe({
  name: "theme-fuji"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([

    // vulcan core
    'vulcan:core@1.3.2',

    // vulcan packages
    'vulcan:posts@1.3.2',
    'vulcan:comments@1.3.2',
    'vulcan:voting@1.3.2',
    'vulcan:accounts@1.3.2',
    'vulcan:email',
    'vulcan:forms',
    'vulcan:newsletter',
    'vulcan:notifications',
    // 'vulcan:getting-started',
    'vulcan:categories',
    'vulcan:events',
    'vulcan:embedly',
    'vulcan:api',
    'vulcan:rss',
    'vulcan:subscribe',

    'vulcan:base-components',
    'vulcan:base-styles',
    'vulcan:email-templates',
    
    'http',
    'static-html',

    'fourseven:scss@4.5.0',

    // 'vulcan:forms-tags',
  ]);

  api.addFiles("lib/head.html", "client");

  api.addFiles("lib/stylesheets/main.scss", "client");

  api.mainModule("lib/server.js", "server");
  api.mainModule("lib/client.js", "client");

});
