<template>
    <div>
        <my-component
            :propA="a"
            :propB="b" 
            :propC="c"
            :propD="d" 
            :propE="e"
            :propF="f"   
            >
        </my-component>
    </div>
</template>

<script>
// http://localhost:3000/20180616/3_Props/5_PropValidation

import MyComponent from "~/components/20180616/3_Props/5_PropValidation/MyComponent"; 

export default {
    components : {
        MyComponent
    },
    data () {
        return {
            a : 3,
            b : "10",
            c : "C",
            d : 20,
            e : {
                value : "Nice"
            },
            f : "success"
        }
    }
}
</script>

<style>

</style>