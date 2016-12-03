define([
  'jquery',
  'underscore',
  'backbone',
  'app/collections/employees'
], function($, _, Backbone, EmployeeCollection) {

var Employee = Backbone.Model.extend({

    urlRoot:"../api/employees",

    initialize:function () {
       // this.reports = new EmployeeCollection();
       // this.reports.url = '../api/employees/' + this.id + '/reports';
    }

});

  return Employee;
});
