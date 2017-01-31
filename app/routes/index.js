import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
      tenders: this.store.findAll('tender'),
      its: this.store.findAll('it'),
      supplies: this.store.findAll('supply'),
      agricultures: this.store.findAll('agriculture'),
      healths: this.store.findAll('health'),
      others: this.store.findAll('other')
    });
},
});
