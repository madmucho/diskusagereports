define([
	'underscore',
	'marionette'
], function(_, Marionette) {
	"use strict";

	return Marionette.ItemView.extend({
		className: 'du-error alert alert-danger',
		template: _.template('<%-message%>'),
		serializeData: function() {
			return this.options;
		}
	});
});
