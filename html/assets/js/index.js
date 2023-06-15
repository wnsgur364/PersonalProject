// 기간설정
$(".selectPeriod").on("change", function() {
	var period = $(this).val();
	var today = new Date();
	var oneWeekAgo = new Date(today.getTime() - (7 * 24 * 60 * 60 * 1000));
	var oneMonthAgo = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));
	var threeMonthsAgo = new Date(today.getTime() - (90 * 24 * 60 * 60 * 1000));
	
	switch (period) {
		case "1주일":
			$(".dateStart").datepicker("setDate", oneWeekAgo);
			$(".dateFinish").datepicker("setDate", today);
			break;
		case "1개월":
			$(".dateStart").datepicker("setDate", oneMonthAgo);
			$(".dateFinish").datepicker("setDate", today);
			break;
		case "3개월":
			$(".dateStart").datepicker("setDate", threeMonthsAgo);
			$(".dateFinish").datepicker("setDate", today);
			break;
	}
});	

// 계좌선택시 잔액란에 금액 입력
$("#selectAccount").on("change", function() {
	var accountNumber = $(this).val();
	var balance = 10000; // This is just an example balance.

	$("#balance").val(balance);
});