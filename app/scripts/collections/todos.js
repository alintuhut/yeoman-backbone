/*global yeomanBackbone, Backbone*/

yeomanBackbone.Collections = yeomanBackbone.Collections || {};

(function () {
    'use strict';

    yeomanBackbone.Collections.TodosCollection = Parse.Collection.extend({

        initialize: function() {
            this.model = yeomanBackbone.Models.TodoModel;
        }

    });

})();