/*global yeomanBackbone, Backbone*/

yeomanBackbone.Models = yeomanBackbone.Models || {};

(function () {
    'use strict';

    yeomanBackbone.Models.TodoModel = Backbone.Model.extend({

        defaults: {
            title: '',
            completed: false
        },

        toggle: function() {
            this.save({
                completed: !this.get('completed')
            });
        }

    });

})();
