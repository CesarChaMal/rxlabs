define([
  'jquery',
  'underscore',
  'backbone',
  'app/template',
], function($, _, Backbone, Templates) {


var EmployeeListItemView = Backbone.View.extend({

    tagName:"li",

    initialize:function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render:function () {
        $(this.el).html(Templates['listitemview']);
        return this;
    }

});
return  EmployeeListItemView;
});
