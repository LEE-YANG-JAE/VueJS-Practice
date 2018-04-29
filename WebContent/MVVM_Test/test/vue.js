var vm = new Vue({
    el : "#example",
    data : {
        test : "Success"
    },
    components: {
        "my-row": {
            render: function(h) {
                return h("tr", this.$slots.default);
            }
        },
        "my-cell": {
            render: function(h) {
                return h("td", this.$slots.default);
            }
        }
    }
});
