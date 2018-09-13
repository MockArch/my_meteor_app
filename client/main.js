import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

if(Meteor.isClient){

  //Session.setDefault('page', 'home');

  UI.body.helpers({
      isPage: function(page){
          return Session.equals('page', page)
      }
  })

  UI.body.events({
      'click .clickChangesPage': function(event, template){
          Session.set('page', event.currentTarget.getAttribute('data-page'))
      },
      'click .myclass' : function(event, template){
        Session.set('page', event.currentTarget.getAttribute('data-page'))
      }
  })

}