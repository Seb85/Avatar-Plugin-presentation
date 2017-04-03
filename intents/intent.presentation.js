'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../../node_modules/ava-ia/lib/helpers');

exports.default = function (state, actions) {

	if (state.isIntent) return (0, _helpers.resolve)(state);
	
	var tokens = (0, _helpers.intersect)(Config.modules.presentation.rules, state.tokens);

	if (tokens) {
		state.isIntent = true;
		if (state.debug) info('Intentpresentation'.bold.green, 'tokens:', tokens.toString().green);
		return (0, _helpers.factoryActions)(state, actions);
	} else
		return (0, _helpers.resolve)(state);
	
	
};