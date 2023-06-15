(function() {
  "use strict";

  /*
	Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /*
	Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /*
    Initiate Bootstrap validation check
   */
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

  /*
	Initiate Datatables
  */
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
	
	// 레이블 텍스트 변경
	const labelElement = document.querySelector('.datatable-dropdown label');
	const selectElement = labelElement.querySelector('select');
	labelElement.removeChild(selectElement.nextSibling);
	labelElement.textContent = '페이지당 항목 수';
	// select를 페이지당 항목 수 앞으로 배치합니다.
	labelElement.insertBefore(selectElement, labelElement.firstChild);
	
	// 검색창 플레이스홀더 문구 변경
	document.querySelector('.datatable-search input').setAttribute('placeholder', '검색');
	
	const selectorElement = document.querySelector('.datatable-selector');
	const infoElement = document.querySelector('.datatable-info');

	function updateInfoText() {
		const pagination = document.querySelector('.datatable-pagination');
	  	const currentPage = pagination.querySelector('.datatable-active a').getAttribute('data-page');
	  	const totalEntries = infoElement.textContent.match(/\d+/g)[1];
	  	const entriesPerPage = selectorElement.value;

	  	const startEntry = (currentPage - 1) * entriesPerPage + 1;
	  	const endEntry = Math.min(startEntry + parseInt(entriesPerPage, 10) - 1, totalEntries);

	  	infoElement.textContent = `전체 ${totalEntries}개 중 ${startEntry}부터 ${endEntry}까지 표시`;
	}

	// select 요소의 변경 이벤트 감지
	selectorElement.addEventListener('change', updateInfoText);

	updateInfoText();
	
	
	
})();