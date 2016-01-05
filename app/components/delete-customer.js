import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		submit: function(customer) {
			console.log('delete', customer);
			
			this.sendAction('deleteCustomer', customer);
		}
	}
});
