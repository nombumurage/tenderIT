import DS from 'ember-data';

export default DS.Model.extend({
  companyname: DS.attr(),
  details: DS.attr(),
  tender_no: DS.attr(),
  open_dates: DS.attr(),
  close_dates:DS.attr(),
  downloads:DS.attr(),
  tender: DS.belongsTo('tender', {async: true}),

});
