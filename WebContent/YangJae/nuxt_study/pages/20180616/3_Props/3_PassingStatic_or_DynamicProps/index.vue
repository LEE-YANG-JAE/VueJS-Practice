<template>
    <div>
        <blog-post title="My journey with Vue"></blog-post>
        <!-- Dynamically assign the value of a variable -->
        <blog-post v-bind:title="post.title"></blog-post>
        
        <!-- Dynamically assign the value of a complex expression -->
        <blog-post v-bind:title="post.title + ' by ' + post.author.name"></blog-post>
    </div>
</template>

<script>
// http://localhost:3000/20180616/3_Props/3_PassingStatic_or_DynamicProps

import BlogPost from "~/components/20180616/3_Props/3_PassingStatic_or_DynamicProps/BlogPost";

export default {
    components : {
        BlogPost
    },
    data () {
        return {
            post : {
                title : "Hello Vue", 
                author : {
                    name : "Evan"
                }
            }

        }
    }
}
</script>

<style>

</style>