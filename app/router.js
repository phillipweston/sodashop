import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sodas');
  this.route('trials');
  this.route('subscriptions');
});

export default Router;
