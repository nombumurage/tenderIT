import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
      its: this.store.findAll('it'),

    });

},
});
