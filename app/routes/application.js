import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		add: function(params) {
			console.log('add application.js route');

			var isSubscribed = !!params.isSubscribed;
			var self = this;

			var customer = this.store.createRecord('customer', {
				name: params.name,
				location: params.location,
				isSubscribed: isSubscribed
			});

			customer.save()
				.then(function() {
					if (isSubscribed) {
						self.transitionTo('subscriptions');
					}
					if (!isSubscribed) {
						self.transitionTo('trials');
					}
				})
				.catch(error => {
					console.log(error.errors);
				})
		},

		delete: function(customer) {
			customer.destroyRecord();
		}
	}


});
