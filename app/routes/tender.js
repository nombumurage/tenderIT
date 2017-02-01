import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    agricultures: this.store.findAll('agriculture'),
    tenders: this.store.findAll('tender'),
    its: this.store.findAll('it'),
    supplies: this.store.findAll('supply'),
    healths: this.store.findAll('health'),
    others: this.store.findAll('other')

    });

},
actions: {
  
    saveAgriculture3(params) {
      var newAgriculture = this.store.createRecord('agriculture', params);
      newAgriculture.save();
      this.transitionTo('agriculture');
    },
    saveHealth3(params) {
      var newHealth = this.store.createRecord('health', params);
      newHealth.save();
      this.transitionTo('health');
    },
    saveSupply3(params) {
      var newSupply = this.store.createRecord('supply', params);
      newSupply.save();
      this.transitionTo('supply');
    },
    saveIt3(params) {
      var newIt = this.store.createRecord('it', params);
      newIt.save();
      this.transitionTo('it');
    },
    saveOther3(params) {
      var newOther = this.store.createRecord('other', params);
      newOther.save();
      this.transitionTo('other');
    }
  }
});
