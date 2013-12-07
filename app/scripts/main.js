/*global yeomanBackbone, $*/


window.yeomanBackbone = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        new this.Views.TodosView({
            collection: new this.Collections.TodosCollection()
        })
    }
};

$(document).ready(function () {
    'use strict';
    yeomanBackbone.init();
});
