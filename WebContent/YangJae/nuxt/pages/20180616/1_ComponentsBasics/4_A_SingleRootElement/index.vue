<template>
    <div>
        <blog-post 
            v-for="post in posts" 
            v-bind:key="post.id"
            v-bind:post="post">
        </blog-post>
    </div>
    <!--
        Defining a prop for each related piece of information could become very annoying:
        <blog-post
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:title="post.title"
            v-bind:content="post.content"
            v-bind:publishedAt="post.publishedAt"
            v-bind:comments="post.comments"
        ></blog-post>
    -->
</template>

<script>
// http://localhost:3000/20180616/4_A_SingleRootElement

import BlogPost from "~/components/20180616/4_A_SingleRootElement/BlogPost.vue"

export default {
    components : {
        BlogPost
    },
    data () {
        return {
            posts: [
                { id : 1, title : "My journey with Vue" , content : "<h1>Hi There4</h1>"},
                { id : 2, title : "Blogging with Vue" , content : "<h1>Hi There2</h1>"},
                { id : 3, title : "Why Vue is so fun" , content : "<h1>Hi There1</h1>"},
                { id : 4, title : "It is good with team to start" , content : "<h1>Hi There3</h1>"}
            ]
        }
    }
}
</script>
