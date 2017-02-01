import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('about');
  this.route('tender');
  this.route('display', {path:'/agriculture/:agriculture_id'})
  this.route('agriculture');
  this.route('health');
  this.route('it');
  this.route('supplies');
  this.route('others');
  this.route('display-health',{path:'health/:health_id'});
  this.route('display-it',{path:'it/:it_id'});
  this.route('display-supply',{path:'supply/:supply_id'});
  this.route('display-other',{path:'other/other_id'});
});

export default Router;
