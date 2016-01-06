import Ember from 'ember';


// methods
// defined ouside of controller
const fixSubscription = (customer) => {

	var isExpired = (Number(customer.get('expirationDate')) < Date.now());

	if ( isExpired ) {
		customer.set('isSubscribed', false);
	}

	customer.save();
	
	return customer;
};


// controller
// may call methods above
export default Ember.Controller.extend({

	filtered: Ember.computed('model.@each.isSubscribed', 'model.[]', function() {
		
		return this.get('model')
			.map(function(customer) {
				return fixSubscription(customer);
			})
			.filterBy('isSubscribed', true)
			.sortBy('name');
	})

});
