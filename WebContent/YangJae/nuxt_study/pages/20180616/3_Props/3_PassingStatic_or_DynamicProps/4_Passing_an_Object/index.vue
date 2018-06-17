<template>
    <div>
        <!-- Even though the object is static, we need v-bind to tell Vue that -->
        <!-- this is a JavaScript expression rather than a string.             -->
        <blog-post v-bind:author="{ name: 'Veronica', company: 'Veridian Dynamics' }"></blog-post>

        <!-- Dynamically assign to the value of a variable. -->
        <blog-post v-bind:author="post.author"></blog-post>
    </div>
</template>

<script>
// http://localhost:3000/20180616/3_Props/3_PassingStatic_or_DynamicProps/4_Passing_an_Object

import BlogPost from "~/components/20180616/3_Props/3_PassingStatic_or_DynamicProps/4_Passing_an_Object/BlogPost";

export default {
    components : {
        BlogPost
    },
    data () {
        return {
            post : {
                author : {
                    name : "Evan",
                    company : "Vue"
                }
            }

        }
    }
}
</script>

<style>

</style>