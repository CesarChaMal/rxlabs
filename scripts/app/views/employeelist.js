define([
  'jquery',
  'underscore',
  'backbone',
  'app/template',
  'app/views/employeelistitem'
], function($, _, Backbone, Templates,EmployeeListItemView) {


var EmployeeListView = Backbone.View.extend({

    tagName:'ul',

    className:'nav nav-list',

    initialize:function () {
        var self = this;
        this.model.bind("reset", this.render, this);
        this.model.bind("add", function (employee) {
            $(self.el).append(new EmployeeListItemView({model:employee}).render().el);
        });
    },

    render:function () {
        $(this.el).empty();
        _.each(this.model.models, function (employee) {
            $(this.el).append(new EmployeeListItemView({model:employee}).render().el);
        }, this);
        return this;
    }
});

return EmployeeListView;
});
