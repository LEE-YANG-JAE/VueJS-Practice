<template>
    <div>
        <!-- Even though the array is static, we need v-bind to tell Vue that -->
        <!-- this is a JavaScript expression rather than a string.            -->
        <blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>

        <!-- Dynamically assign to the value of a variable. -->
        <blog-post v-bind:comment-ids="post.commentIds"></blog-post>
    </div>
</template>

<script>
// http://localhost:3000/20180616/3_Props/3_PassingStatic_or_DynamicProps/3_Passing_an_Array

import BlogPost from "~/components/20180616/3_Props/3_PassingStatic_or_DynamicProps/3_Passing_an_Array/BlogPost";

export default {
    components : {
        BlogPost
    },
    data () {
        return {
            post : {
                commentIds : [ 4 , 8 , 3]
            }

        }
    }
}
</script>

<style>

</style>