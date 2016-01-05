import Ember from 'ember';

export default Ember.Component.extend({

	newUser: {},

	actions: {
		submit: function(customer) {

			this.sendAction('newCustomer', customer);

			this.set('newUser.name', null);
			this.set('newUser.isSubscribed', null);
			this.set('newUser.location', null);

		}
	}


});
