var vm = new Vue({
	el : "#app",
	data : {
		count :0,	
		products : [{ name : "Computer", count : 0, price : 100, value : 0},
					{ name : "Notebook", count : 0, price : 120, value : 0 },
					{ name : "SmartPhone", count : 0, price : 90, value : 0 } ],
		product : "",
		addToCart : function() {
			vm.count += 1;
		},
		addToCart2 : function(product) {
			for ( var i = 0; i < vm.products.length; i++ ){
				if(vm.products[i].name == product ){
					vm.products[i].count += 1
				}
			}
		}
	},
	created: function(){
		this.product = this.products[1].name; // 라이프 사이클의 beforeMount, mounted 까지 가능
	},
	computed : {
		sum : function() {
			var sum = 0;
			for ( var i = 0; i < this.products.length; i++ ){
				this.products[i].value = this.products[i].count * this.products[i].price
				sum += this.products[i].value
			}
			return sum;
		}
	},
	watch : {
		sum : function(new_val, old_val) {
			console.log("before :" + old_val);
			console.log("after :" +  new_val);
		}
	}
});