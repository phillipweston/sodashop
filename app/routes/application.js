import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		add: function(params) {
			var isSubscribed = !!params.isSubscribed;
			var self = this;

			var customer = this.store.createRecord('customer', {
				name: params.name,
				location: params.location,
				isSubscribed: isSubscribed
			});

			customer.save()
				.then(function() {
					console.log('customer saved');
				})
				.catch(error => {
					console.log(error);
				});
		},

		delete: function(customer) {
			customer.destroyRecord();
		},

		toggleSubscribe: function(customer) {
			customer.set('isSubscribed', !customer.get('isSubscribed'));
			customer.save();
		}
	}

});
