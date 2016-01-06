import Ember from 'ember';

export default Ember.Component.extend({

	newUser: {},

	actions: {
		add: function(customer) {

			console.log('customer-input add');
			
			this.sendAction('add', customer);

			this.set('newUser.name', null);
			this.set('newUser.isSubscribed', null);
			this.set('newUser.location', null);
		}
	}


});
