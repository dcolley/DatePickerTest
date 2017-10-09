
import Vue from 'vue'
import Vuex from 'vuex'
// import VueResource from 'vue-resource'
// import createPersistedState from 'vuex-persistedstate'
import search from './modules/search';

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex);
// Vue.use(VueResource);

const store = new Vuex.Store({
		modules: {
			search,
		},
		plugins: [],
		strict: debug,
		state: {
		},
		getters: {
		},
		mutations: {
		},
		actions: {
			// browserInit( context, payload ) {
			// 	console.debug('[DEBUG] src/vuex/store.js browserInit firing...');
			// },
  	},
});

export { store };