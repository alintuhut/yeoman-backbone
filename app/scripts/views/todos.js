/*global yeomanBackbone, Backbone, JST*/

yeomanBackbone.Views = yeomanBackbone.Views || {};

(function () {
    'use strict';

    yeomanBackbone.Views.TodosView = Backbone.View.extend({

        el: '#todo-app',

        template: JST['app/scripts/templates/todos.ejs'],

        events: {
            'submit': 'createTodo'
        },

        initialize: function () {
            this.render();

            this.listenTo(this.collection, 'add', this.addTodoItem);
            this.listenTo(this.collection, 'reset', this.addAllTodoItems); 

            this.collection.query = new Parse.Query(yeomanBackbone.Models.TodoModel);
            this.collection.query.equalTo("user", Parse.User.current());
            this.collection.fetch();
 
        },

        render: function () {
            this.$el.html(this.template());

            return this;
        },

        createTodo: function (event) {
            event.preventDefault();

            var title = this.$('#new-todo').val().trim();

            if (title) {
                this.collection.create(new yeomanBackbone.Models.TodoModel({
                    title: title
                }));

                $('#new-todo').val('');
            }
        },

        addTodoItem: function (todo) {
            var view = new yeomanBackbone.Views.TodoView({ model: todo });
            this.$('ul').append(view.render().el);
        },

        addAllTodoItems: function () {
            this.collection.each(this.addTodoItem, this);
        }

    });

})();
