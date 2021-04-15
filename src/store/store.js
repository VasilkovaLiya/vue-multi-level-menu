import Vue from 'vue';
import Vuex from 'vuex';
import bx from '../components/core/bitrix';

import net from '../components/core/net';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
	},
	mutations:{
		// showLoader(state){
		// 	state.isLoading = true;
		// },
	},
	actions:{
		// Вызов мутации в зависимости от ответа юзера в модальном окне
		// mwUserConfirm({commit},confrim){
		// 	let mwin = this.state.mwin;
		// 	if(confrim){
		// 		commit(mwin.action);
		// 	}
		// 	mwin.show=false;
		// },
	}
});