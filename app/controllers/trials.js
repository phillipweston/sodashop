import Ember from 'ember';

export default Ember.Controller.extend({

	filtered: Ember.computed('model.@each.isSubscribed', 'model.[]', function() {

		return this.get('model').map(function(customer) {

			var isExpired = (Number(customer.get('expirationDate')) < Date.now());

			if ( isExpired ) {
				customer.set('isSubscribed', false);
			}

			customer.save();

			return customer;
		})
		.filterBy('isSubscribed', false)
		.sortBy('name');
		
	})

});
