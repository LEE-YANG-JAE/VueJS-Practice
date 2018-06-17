<template>
    <div>
        <!-- Even though `42` is static, we need v-bind to tell Vue that -->
        <!-- this is a JavaScript expression rather than a string.       -->
        <blog-post v-bind:likes="42"></blog-post>

        <!-- Dynamically assign to the value of a variable. -->
        <blog-post v-bind:likes="post.likes"></blog-post>
    </div>
</template>

<script>
// http://localhost:3000/20180616/3_Props/3_PassingStatic_or_DynamicProps/1_Passing_a_Number

import BlogPost from "~/components/20180616/3_Props/3_PassingStatic_or_DynamicProps/1_Passing_a_Number/BlogPost";

export default {
    components : {
        BlogPost
    },
    data () {
        return {
            post : {
                likes : 7
            }

        }
    }
}
</script>

<style>

</style>