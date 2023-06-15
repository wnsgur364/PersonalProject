(function() {

	// Easy selector helper function
	const select = (el, all = false) => {
		el = el.trim()
		if (all) {
			return [...document.querySelectorAll(el)]
		} else {
			return document.querySelector(el)
		}
	}

	// Easy event listener function
	const on = (type, el, listener, all = false) => {
		if (all) {
			select(el, all).forEach(e => e.addEventListener(type, listener))
		} else {
			select(el, all).addEventListener(type, listener)
		}
	}

    // Initiate Bootstrap validation check
  	var needsValidation = document.querySelectorAll('.needs-validation')

	Array.prototype.slice.call(needsValidation)
	.forEach(function(form) {
		form.addEventListener('submit', function(event) {
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
			}

			form.classList.add('was-validated')
		}, false)
	})

	// Initiate Datatables
  	const datatables = select('.datatable', true)
  	datatables.forEach(datatable => {
    	new simpleDatatables.DataTable(datatable);
  	})

	// checkbox 적용되는 datatables 효과 제거
	const firstThElement = document.querySelector('th:first-child');
	const aElement = firstThElement.querySelector('a');

	firstThElement.removeAttribute('data-sortable');
	firstThElement.removeAttribute('aria-sort');
	firstThElement.classList.remove('datatable-ascending');
	firstThElement.removeAttribute('style');

	if (aElement) {
	  aElement.removeAttribute('href');
	  aElement.classList.remove('datatable-sorter');
	}
	
	// checkbox all check
	document.getElementById("allCheck").addEventListener('change', function(){
		for (var i = 0; i < document.getElementsByName("checked").length; i++) {
			document.getElementsByName("checked")[i].checked = this.checked;
		}
	});	
	
})();

// datepicker
$(function() {

	$(".datepicker").datepicker({
		dateFormat: 'yy-mm-dd'
	});

});