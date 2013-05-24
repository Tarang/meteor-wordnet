Package.describe({
  summary: "WordNet database packaged for node"
});

Npm.depends({
    "WNdb": "3.0.1"
});

Package.on_use(function (api, where) {
  api.add_files('wordnet.js', 'server');
});
