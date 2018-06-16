var productComponent = {
	render : function(h) {
		return h("div", this.$slots.default);
	}
};
var reviewcomponent = {
	render : function(h) {
		return h("div", this.$slots.default);
	}
};
// 컴포넌트에 집어 넣을 형식을 template 또는 render 통해 저장 가능
Vue.component("my-component", {
components : {
	ProductComponent : productComponent,
	ReviewComponent : reviewcomponent
	// my-component안의 다른 콤포넌트를 집어 넣고자 할 때 components 사용
},
props : {
	message : String,
	product : Object,
	email : {
		type : String,
		required :true,
		default : "none", // 내용이 존재 하지 않을 시 none으로 출력
		validator : function(value) {
			if ( value.length > 3 ) {
				return true;
			} /* validator의 true 조건에 맞는 것만 허용. 
			개발환경에서만 조건에 안 맞을 시 vue만의 에러 출력 */
		} 
		/* Note that props are validated before a component instance is created.
		so instance properties(e.g data, computed, etc) will not be available 
		inside default or validator functions. */ 
	}
},
// props로 전달 받을 데이터 형식을 간단히 또는 상세히 지정 가능
data : function() {
	return {
		firstName : "Vue",
		lastName : "Mastery",
		counter : 0,
		mail : this.email
	}
},
/* my-component 안에서의 data 모음. component에서는 root와 다르게, 
function() { return { } } 으로 데이터를 집어 넣는다. */
computed : {
	fullName : {
		get : function () {
			return this.firstName + " " + this.lastName;
		},
		set : function(newValue) {
			var names = newValue.split(' ');
			this.firstName = names[0];
			this.lastName = names[names.length -1];
		}		
	}
},
/* 컴포넌트 안의 데이터들을 활용하여 get으로 초기에 만들고, 
v-model.lazy="fullName" 와 같이 변화 줄 시 set 함수 동작 */
watch : {
	firstName : function (value, oldValue) {
		console.log("firstName change : " + oldValue + " => " + value);
	},
	fullName : function (value, oldValue) {
		console.log(value + " from " +oldValue);
	},
	email : function (value, oldValue) {
		if ( value.length > 3 ) {
			this.mail = value;
			// 새로운 값이 기준에 맞을 때, 현재 콤포넌트의 mail에 값을 대입한다.
		}
	}
},
/*
	컴포넌트의 기존 데이터의 변화나 computed 로 생성된 
	데이터의 현재 값과 과거 값의 변화를 보고자 할 때 watch를 사용
*/
methods : {
	countPlus : function() {
		this.counter+= 1;
		alert(this.counter);
	}
},
template : `
<div>
	<span>{{ message }}</span>
	<hr>
	<button v-on:click="countPlus">add</button>
	<hr>
	<ProductComponent>{{ product.name }}</ProductComponent>
	<hr>
	<input v-model.lazy="fullName">
	<br>
	<ReviewComponent>{{ fullName }} {{ mail }}</ReviewComponent>
	<!-- ProductComponent와 ReviewComponent는 my-component 안의 컴포넌트들이다.
	template 안에서 작동 가능 -->
</div>`
});
var vm = new Vue({
	el : "#app",
	data : {
		messageOrigin : "Hello Welcome World",
		product : {
			id : 0, name : "computer"
	},
		emailAddress : "aabbcc@com",
			counter : 0
	}
});