import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string', {defaultValue: null }),
    location: DS.attr('string', {defaultValue: null }),
    signupDate: DS.attr('date', { defaultValue: new Date()}),
    isSubscribed: DS.attr('boolean', {defaultValue: false }),
    subscriptionDate: DS.attr('date', {defaultValue: new Date()}),
    subscriptionDuration: DS.attr('number', {defaultValue: 0}),
   
    expirationDate: Ember.computed('subscriptionDate', 'subscriptionDuration', function() {
      return moment(this.get('subscriptionDate')).add(this.get('subscriptionDuration'), 'months');
    })

});
