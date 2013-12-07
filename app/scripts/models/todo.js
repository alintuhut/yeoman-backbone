/*global yeomanBackbone, Backbone*/

yeomanBackbone.Models = yeomanBackbone.Models || {};

(function () {
    'use strict';

    yeomanBackbone.Models.TodoModel = Parse.Object.extend({

        className: "Todo",

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
