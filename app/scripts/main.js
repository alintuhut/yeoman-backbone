/*global yeomanBackbone, $*/


window.yeomanBackbone = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';

        Parse.$ = jQuery;

        // Initialize Parse with your Parse application javascript keys
        Parse.initialize("your-application-id",
                         "your-javascript-key");

        new this.Views.TodosView({
            collection: new this.Collections.TodosCollection()
        })
    }
};

$(document).ready(function () {
    'use strict';
    yeomanBackbone.init();
});
