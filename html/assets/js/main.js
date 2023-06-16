(function() {
	"use strict";
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
	
	
	// checkbox all check
	document.getElementById("allCheck").addEventListener('change', function(){
		for (var i = 0; i < document.getElementsByName("checked").length; i++) {
			document.getElementsByName("checked")[i].checked = this.checked;
		}
	});	
	
	// 검색 컨테이너를 숨김 처리
	const searchContainer = document.querySelector('.datatable-search');
	searchContainer.style.display = 'none';
	
	// HTML 요소 가져오기
	const datatableTop = document.querySelector('.datatable-top');
	const datatableDropdown = document.querySelector('.datatable-dropdown');
	
	// 스타일 설정하여 오른쪽에 붙도록 변경
	datatableTop.style.display = 'flex';
	datatableTop.style.justifyContent = 'flex-end';
	datatableDropdown.style.marginRight = '10px';
	
	// 벨리데이션 관련	
	const forms = document.querySelectorAll('.needs-validation')
	
	document.getElementById('submitForm').addEventListener('click', event => {
		for (const form of forms) {
	    	if (!form.checkValidity()) {
	      		for (const input of form.querySelectorAll('input[required]')) {
	        		if (input.value.trim() === '') {
	          			input.style.borderColor = 'red';
	        			input.parentElement.querySelector('.invalid-feedback').classList.add('d-block')
	          			break;
	        		} else {
	          			input.style.borderColor = '';
	       				input.parentElement.querySelector('.invalid-feedback').classList.remove('d-block')
	        			}
				}
	      		break;
			}
		}
	}, false)
	
})();