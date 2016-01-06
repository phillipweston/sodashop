import Ember from 'ember';

export default Ember.Component.extend({

	newUser: {},

	actions: {
		add: function(customer) {

			var route = this.container.lookup("router:main").get('currentRouteName');

			customer.isSubscribed = (route === 'subscriptions');

			this.sendAction('add', customer);

			this.set('newUser.name', null);
			this.set('newUser.location', null);
		}
	}


});
