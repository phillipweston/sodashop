import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		add: function(params) {
			
			var customer = this.store.createRecord('customer', {
				name: params.name,
				location: params.location,
				isSubscribed: params.isSubscribed,
				subscriptionDuration: params.isSubscribed ? 1 : 0
			});

			customer.save();
		},

		delete: function(customer) {
			customer.destroyRecord();
		},

		toggleSubscribe: function(customer) {
			customer.set('isSubscribed', !customer.get('isSubscribed'));

			if (customer.get('isSubscribed')) {
				customer.set('subscriptionDuration', 1); // 1 month
				customer.set('subscriptionDate', new Date());
			}
			else {
				customer.set('subscriptionDuration', 0); 
			}

			customer.save();
		}
	}

});
