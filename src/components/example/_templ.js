export default ()=>{

 
	const block_select = document.getElementById('block_select')
	  const selects = document.querySelectorAll('.js-select-custom');
	  selects.forEach((select) => {
		  var selectItem = new CustomSelect({
			  elem: select
		  });
	  })
  
	 function CustomSelect(options) {
	  var elem = options.elem;
	  elem.onclick = function(event) {
  
	  if (event.target.className!= 'select-custom__option') {
  
		  toggle();
		} else if (event.target.className == 'select-custom__option') {
		  setValue(event.target.innerHTML, event.target.dataset.value);
		  close();
		}
	  }
  
	  var isOpen = false;
  
	  // ------ обработчики ------
  
	  // закрыть селект, если клик вне его
	  function onDocumentClick(event) {
		if (!elem.contains(event.target)) close();
	  }
  
	  // ------------------------
  
	  function setValue(title, value) {
		  elem.querySelector('input').value = value
		  elem.querySelector('.select-custom__trigger').innerHTML = '<span class="select-custom__trigger-span">'+title + '</span><svg class="icon-arrow-select"><use xlink:href="#down-arrow"></use></svg>';
		  var widgetEvent = new CustomEvent('select', {
			  bubbles: true,
			  detail: {
			  title: title,
			  value: value
			  }
		  });
  
		  elem.dispatchEvent(widgetEvent);
  
	  }
  
	  function toggle() {
		if (isOpen) close()
		else open();
	  }
  
  
	  function open() {
		elem.classList.add('is_open');
		elem.querySelector('.select-custom__trigger').classList.add('is-picked');
		document.addEventListener('click', onDocumentClick);
		isOpen = true;
	  }
  
	  function close() {
		elem.classList.remove('is_open');
		//elem.querySelector('.select-custom__trigger').add('is-picked');
		document.removeEventListener('click', onDocumentClick);
		isOpen = false;
	  }
  
	}
  }