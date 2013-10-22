Package.describe({
    summary: "Backgrid.js is a set of components for building semantic and easily stylable data grid widgets with Backbone."
});

Npm.depends({
    'backgrid': '0.3.0-dev' // Where x.x.x is the version, e.g. 0.3.2
});

Package.on_use(function (api, where) {
    where = where || ['client'];

    api.use([
        'backbone'
    ], where);

    api.add_files([
        'backgrid.js'
    ], where);

    api.export([
        'Backgrid'
    ], where);
});

Package.on_test(function (api) {
    var where = ['client'];

    api.use([
        'backgrid'
    ], where);

    api.add_files([
        'backgrid_tests.js'
    ], where);
});
