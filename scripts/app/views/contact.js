define([
  'jquery',
  'underscore',
  'backbone',
  'app/template',
], function($, _, Backbone, Templates) {

  var ContactView = Backbone.View.extend({
    tagName: 'li',
    className: 'media col-md-12 col-sm-12',
    template: Templates['contact2'],

    events: {
      'click .delete-contact': 'onClickContactDelete'
    },

    initialize: function() {
    //  this.listenTo(this.model, 'remove', this.remove)
    },

    render: function() {
      var html = this.template(this.model);
      this.$el.append(html);
      return this;
    },

    onClickContactDelete: function(e) {
      e.preventDefault();
      var confirmDelete = window.confirm('Do you want to delete the contact ?');
      if(confirmDelete) {
        this.model.destroy();
      }
    }
  });

  return ContactView;
});
