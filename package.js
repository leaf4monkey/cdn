Package.describe({
  name: 'leaf4monkey:cdn',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'serve meteor bundled js and css from your CDN.',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:leaf4monkey/cdn.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1');
  api.use('webapp');
  api.mainModule('cdn.js', 'server');
});
