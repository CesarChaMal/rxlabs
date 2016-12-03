define([
  'backbone',
  'app/views/app',
  'app/router',
  'app/collections/contacts'
], function (Backbone, AppView, Router, ContactsCollection) {

  var initialize = function() {
    var contactsCollections =
    [
                {
                  id: 1,
                  name : 'Terrence S. Hatfield',
                  tel: '651-603-1723',
                  email: 'TerrenceSHatfield@rhyta.com',
                  image: 't2'
                },
                {
                  id: 2,
                  name : 'Chris M. Manning',
                  tel: '513-307-5859',
                  email: 'ChrisMManning@dayrep.com',
                  image: 't1'
                },
                {
                  id: 3,
                  name : 'Ricky M. Digiacomo',
                  tel: '918-774-0199',
                  email: 'RickyMDigiacomo@teleworm.us',
                  image: 'caso2'
                },
                {
                  id: 4,
                  name : 'Michael K. Bayne',
                  tel: '702-989-5145',
                  email: 'MichaelKBayne@rhyta.com',
                  image: 'radiology'
                },
                {
                  id: 5,
                  name : 'John I. Wilson',
                  tel: '318-292-6700',
                  email: 'JohnIWilson@dayrep.com',
                  image: 'radiology'

                },
                {
                  id: 6,
                  name : 'Rodolfo P. Robinett',
                  tel: '803-557-9815',
                  email: 'RodolfoPRobinett@jourrapide.com',
                  image: 't1'
                }
              ]
            ;
    //new ContactsCollection();
    var appView = new AppView();
    App.router = new Router({view: appView, collection: contactsCollections});
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
