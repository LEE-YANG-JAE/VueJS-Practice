const BoardComp = {
	template : `<div>게시판 컴포넌트입니다.
		<router-view>중첩라우팅은 여기에 표시됩니다.</router-view></div>`
}
const Comp = {
		template : `<div>vue {{ no }}</div>`,
		props : ["no"]
}

import Test from "./Test.vue"; // failed to load

const router = new VueRouter({
	mode : "history",
	routes : [{
		path : '/board', name : "board", component : BoardComp, children :[
			{ path : ":no", name : "article", component : Comp, props : true }
		]
	},
	{ path : "/test", name : "test", component : Test }
	]
});

const app = new Vue({
	el : "#app",
	router : router,
	data : {
		article : [
			{ no : 1, title: "Vue.js 책이 출간되었어요."},
			{ no : 2, title: "이중민 과장님 수고 많았어요.."},
			{ no : 3, title: "시간은 길지 않아요."},
		]
	}
});