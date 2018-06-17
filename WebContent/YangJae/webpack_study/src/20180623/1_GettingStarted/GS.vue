<template>
    <div>
        <!-- use router-link component for navigation. -->
        <!-- specify the link by passing the `to` prop. -->
        <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
        <router-link to="/gs2">Go to test</router-link>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
        <input v-model="test">
        <button v-on:click="paramChange">Change and go</button>
        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import GS2 from "./GS2"

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: "/gs2/:username", component : GS2, name : "gs2" }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

export default {
    router,
    name : "GS",
    data () {
        return {
            test : ""
        }
    },
    methods : {
        paramChange () {
            router.push({ name : "gs2", params: { username: this.test }})
        }
    }
    
}
</script>

