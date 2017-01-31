import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
      agricultures: this.store.findAll('agriculture'),

    });

},
});
