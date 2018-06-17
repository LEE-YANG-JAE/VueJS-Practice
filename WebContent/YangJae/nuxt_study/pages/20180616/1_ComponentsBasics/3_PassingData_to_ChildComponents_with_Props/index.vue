<template>
    <div>
        <blog-post title="My journey with Vue"></blog-post>
        <blog-post title="Blogging with Vue"></blog-post>
        <blog-post title="Why Vue is so fun"></blog-post>
        <hr>
        <blog-post 
            v-for="post in posts" 
            v-bind:key="post.id" 
            v-bind:title="post.title">
        </blog-post>
    </div>
</template>

<script>
// http://localhost:3000/20180616/1_ComponentsBasics/3_PassingData_to_ChildComponents_with_Props

import BlogPost from "~/components/20180616/1_ComponentsBasics/3_PassingData_to_ChildComponents_with_Props/BlogPost.vue"

export default {
    components : {
        BlogPost
    },
    data () {
        return {
            posts: [
                { id : 1, title : "My journey with Vue" },
                { id : 2, title : "Blogging with Vue" },
                { id : 3, title : "Why Vue is so fun" },
                { id : 4, title : "It is good with team to start"}
            ]
            /* 
            Above, you’ll see that we can use v-bind to dynamically pass props. 
            This is especially useful when you don’t know the exact content you’re going to render ahead of time
            */
        }
    }
}
</script>
