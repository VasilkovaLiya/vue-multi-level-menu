import $ from 'jquery';

// Подключение компонентов
import block_select from './example/_templ.js';

class Components{
	constructor(){
		this.collection = new Map();
	}

	init(){
		let app = this;

		$(function () {
			app.add('#block_select', block_select);
		});
	}
	/**
	 * Подключение модулей компонентов
	 * @param {String} el
	 * @param {Function} component
	 */
	add(el,component){
		if($(el).length){
			this.collection.set(el,component);
			component(el);
		}
	}
}

export default new Components();