define([
  'jquery',
  'underscore',
  'backbone',
  'app/collections/employees',
  'app/views/employeelist',
  'app/template',
], function($, _, Backbone,  EmployeeCollection, EmployeeListView, Templates ) {

  var HeaderView = Backbone.View.extend({
    template: Templates['header'],
    initialize: function () {
        this.searchResults = new EmployeeCollection();
        this.searchresultsView = new EmployeeListView({model: this.searchResults, className: 'dropdown-menu'});
    },

    render: function () {
        $(this.el).html(Templates['header']);
        $('.navbar-search', this.el).append(this.searchresultsView.render().el);
        return this;
    },

    events: {
        "keyup .search-query": "search",
        "keypress .search-query": "onkeypress",
        "click .btn-subir": "loadCase"
    },

    loadCase: function(){
      var attrs = {};
      this.trigger('form:newCase', attrs);
    },

    search: function () {
        var key = $('#searchText').val();
        this.searchResults.findByName(key);
        setTimeout(function () {
            $('.dropdown').addClass('open');
        });
    },

    onkeypress: function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    },

    select: function(menuItem) {
        $('.nav li').removeClass('active');
        $('.' + menuItem).addClass('active');
    }
  });

    return HeaderView;
});
