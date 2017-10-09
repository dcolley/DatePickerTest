// src/vuex/modules/user/index.js

import store from './../store'
import moment from 'moment';

// initial state
const initialState = {
	startDate: moment(),
	endDate: moment(),
}

// getters
const getters = {
}

// mutations
const mutations = {
	SEARCH_DATE_RANGE( state, payload ) {
		state.startDate = payload.startDate;
		state.endDate = payload.endDate;
	},

};

// actions
const actions = {
	searchDateRange( state, payload ) {
		state.commit('SEARCH_DATE_RANGE', payload );
	},

}

export default {
	state: { ...initialState },
	getters,
	mutations,
	actions,
	loaded: function (){
		console.debug('src/vuex/module/search.js: loaded...');
	},
};
