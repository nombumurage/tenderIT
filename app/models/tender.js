import DS from 'ember-data';

export default DS.Model.extend({
    agricultures: DS.hasMany('agriculture', {async: true}),
    healths: DS.hasMany('health', {async: true}),
    its: DS.hasMany('it', {async: true}),
    supplies: DS.hasMany('supply', {async: true}),
    others: DS.hasMany('other', {async: true})
});
