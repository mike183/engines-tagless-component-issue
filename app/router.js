import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("route-one");
  this.route("route-two");
  this.mount('routeless-engine');
});

export default Router;
