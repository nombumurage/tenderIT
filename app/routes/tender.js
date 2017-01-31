import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
      agricultures: this.store.findAll('agriculture'),

    });

},
actions: {
    saveAgriculture3(params) {
      var newAgriculture = this.store.createRecord('agriculture', params);
      newAgriculture.save();
      this.transitionTo('agriculture');
    }
  }
});
