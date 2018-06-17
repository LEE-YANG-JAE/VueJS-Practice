<template>
    <div>
        <blog-post v-bind="post"></blog-post>
        <blog-post
        v-bind:id="post.id"
        v-bind:title="post.title"
        ></blog-post>
    </div>
</template>

<script>
// http://localhost:3000/20180616/3_Props/3_PassingStatic_or_DynamicProps/5_PassingTheProperties_of_an_Object

import BlogPost from "~/components/20180616/3_Props/3_PassingStatic_or_DynamicProps/5_PassingTheProperties_of_an_Object/BlogPost";

export default {
    components : {
        BlogPost
    },
    data () {
        return {
            post: {
                id: 1,
                title: "My Journey with Vue"
            }
        }
    }
}
</script>

<style>

</style>