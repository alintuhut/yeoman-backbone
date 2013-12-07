/*global yeomanBackbone, Backbone*/

yeomanBackbone.Collections = yeomanBackbone.Collections || {};

(function () {
    'use strict';

    yeomanBackbone.Collections.TodosCollection = Backbone.Collection.extend({

        localStorage: new Backbone.LocalStorage('yeoman-backbone-play'),

        initialize: function() {
            this.model = yeomanBackbone.Models.TodoModel;
        }

    });

})();