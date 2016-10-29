define([
  'backbone',
  'app/models/employee',
  'localstorage'
], function(Backbone, Employee) {



  var EmployeeCollection = Backbone.Collection.extend({

      model: Employee,

      url:"../api/employees",

      findByName:function (key) {
          console.log(key);
          var url = (key == '') ? '../api/employees' : "../api/employees/search/" + key;
          console.log('findByName: ' + key);
          var self = this;
          $.ajax({
              url:url,
              dataType:"json",
              success:function (data) {
                  console.log("search success: " + data.length);
                  self.reset(data);
              }
          });
      }

  });

  return EmployeeCollection;

});
