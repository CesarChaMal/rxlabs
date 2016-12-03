define([
  'jquery',
  'underscore',
  'backbone',
  'app/template'
], function($, _, Backbone, Templates) {


var EmployeeListItemView = Backbone.View.extend({

    tagName:"li",

    initialize:function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render:function () {
		//console.log(' listitemview ' + Templates['listitemview']);
        $(this.el).html('<a href=>adolfo</a>');
        return this;
    }

});
return  EmployeeListItemView;
});
