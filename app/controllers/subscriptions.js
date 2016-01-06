import Ember from 'ember';

export default Ember.Controller.extend({

	filtered: Ember.computed('model.@each.isSubscribed', 'model.[]', function() {
		return this.get('model').filterBy('isSubscribed', true);
	})

});
