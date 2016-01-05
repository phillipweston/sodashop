import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		deleteCustomer: function(customer) {

			console.log('delete in customer-list.js')
			this.sendAction('deleteCustomer', customer);
		}	
	}

});
