<template>
    <div>
        <!-- Including the prop with no value will imply `true`. -->
        <blog-post is-published></blog-post> <!-- but not send to lower component -->

        <!-- Even though `false` is static, we need v-bind to tell Vue that -->
        <!-- this is a JavaScript expression rather than a string.          -->
        <blog-post v-bind:is-published="false"></blog-post>

        <!-- Dynamically assign to the value of a variable. -->
        <blog-post v-bind:is-published="post.isPublished"></blog-post>
    </div>
</template>

<script>
// http://localhost:3000/20180616/3_Props/3_PassingStatic_or_DynamicProps/2_Passing_a_Boolean

import BlogPost from "~/components/20180616/3_Props/3_PassingStatic_or_DynamicProps/2_Passing_a_Boolean/BlogPost";

export default {
    components : {
        BlogPost
    },
    data () {
        return {
            post : {
                isPublished : true
            }

        }
    }
}
</script>

<style>

</style>