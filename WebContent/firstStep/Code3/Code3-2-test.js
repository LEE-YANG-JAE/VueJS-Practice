	new Vue({
		el : "#banana",
		components : {
			comp2 : {
				template: "<span>이건 <br> 지역변수 " +
				"<button name='e'>중간에 버튼이!</button>" +
				" 반가워요</span>"
			}
		},
		data : {
			msg : "Hello" +
			" 안녕?"
		}
	});