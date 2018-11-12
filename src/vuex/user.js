import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

const state = {
	name: '陶越',
	age: 24,
	sex: 'male',
	description: '陶越的阉割版博客'
}

const store = new Vuex.Store({
	state,
	mutations,
	actions
});

export default store;