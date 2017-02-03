export default Ember.Component.extend({
  clock: Ember.inject.service('my-shiny-new-clock'),

  iso: Ember.computed('clock.date', function() {
    return this.get('clock.date').toISOString();
  })

});
