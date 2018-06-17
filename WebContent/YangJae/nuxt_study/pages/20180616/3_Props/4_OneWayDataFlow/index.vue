<template>
    <div>
        <blog-post
            v-bind:initialCounter="number"
            v-bind:size="size"
            >
        </blog-post>
    </div>
</template>

<script>
// http://localhost:3000/20180616/3_Props/4_OneWayDataFlow

import BlogPost from "~/components/20180616/3_Props/4_OneWayDataFlow/BlogPost"; 

export default {
    components : {
        BlogPost
    },
    data () {
        return {
           number : 0,
           size : "M"
        }
    }
}
</script>

<style>

</style>