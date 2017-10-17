import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Connect } from 'uport-connect'

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.uport = new Connect('MyApp');
  this.uport.requestCredentials().then((credentials) => {
   console.log(credentials)
  });
});
 
Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
