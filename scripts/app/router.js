define([
  'jquery',
  'underscore',
  'backbone',
  'app/models/contact',
  'app/views/contacts',
  'app/views/editcontact',
  'app/views/header',
], function($, _, Backbone, ContactModel, ContactsView, EditContactView, HeaderView) {

  var Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'home': 'home',
      'contacts/new': 'newCase',
      'contacts/edit/:id': 'editContact'
    },

    initialize: function(options) {
      this.headerView = new HeaderView();
      $('.header').html(this.headerView.render().el);

      this.appView = options.view;
      this.collection = options.collection;
    //  this.collection.fetch();

      // Close the search dropdown on click anywhere in the UI
      $('body').click(function () {
            $('.dropdown').removeClass("open");
      });

      this.headerView.on('form:newCase', this.newCase.bind(this));
    },

    newCase: function() {
      console.log('new case this is? '+ this);
      var editContactsView = new EditContactView({
        model: new ContactModel()
      });
      this.appView.setViews(editContactsView);
      editContactsView.on('form:close', this.contactFormClose);
      editContactsView.on('form:submitted',this.saveCase);
    },

    home: function() {
      var contactsView = new ContactsView({
        collection: this.collection
      });
      this.appView.setViews(contactsView);
    },

    newContact: function() {
      var createContactsView = new EditContactView({
        model: new ContactModel()
      });
      this.appView.setViews(createContactsView);
      console.log('onFormSubmit router');

      createContactsView.on('form:submitted', function(attrs) {
        attrs.id = this.collection.isEmpty() ? 1 : (_.max(this.collection.pluck('id')) + 1);
        var newContact = new ContactModel(attrs);
        var modelError = newContact.isValid();
        if(modelError !== false) {
          this.collection.add(newContact);
          newContact.save();
          App.router.navigate('home', true);
        }
      }, this);

      createContactsView.on('form:close', this.contactFormClose);
    },

    editContact: function(id) {
      var contact = this.collection.get(id);
      var editContactsView = new EditContactView({
        model: contact
      });
      this.appView.setViews(editContactsView);

      editContactsView.on('form:submitted', function(attrs) {
        var modelError = contact.save(attrs, {validate:true});
        if(modelError !== false) {
          App.router.navigate('home', true);
        }
      });

      editContactsView.on('form:close', this.contactFormClose);
    },

    contactFormClose: function() {
      App.router.navigate('home', true);
    },

    saveCase: function(attrs){
      console.log('save case ...' + attrs);
    //  attrs.id = this.collection.isEmpty() ? 1 : (_.max(this.collection.pluck('id')) + 1);
      var newContact = new ContactModel(attrs);
      var modelError = newContact.isValid();
      if(modelError !== false) {
        //this.collection.add(newContact);
        newContact.save();
        App.router.navigate('home', true);
      }
    }

  });

  return Router;
});
