import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TodoEmberENV.locationType
});

Router.map(function() {
  this.resource('todos');
});

export default Router;
