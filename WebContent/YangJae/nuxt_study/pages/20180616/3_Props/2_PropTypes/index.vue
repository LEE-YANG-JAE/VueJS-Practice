<template>
    <div>
        <blog-post 
            v-bind:title="title"
            :likes="likes"
            :isPublished="isPublished"
            :commentIds="commentIds"
            :author="author"></blog-post>
    </div>
</template>

<script>
// http://localhost:3000/20180616/3_Props/2_PropTypes

import BlogPost from "~/components/20180616/3_Props/2_PropTypes/BlogPost";

export default {
    components : {
        BlogPost
    },
    data () {
        return {
            title : "Hello",
            likes : 0,
            isPublished : true,
            commentIds : ["abc", 2, false, "e", 5],
            author : {
                name : "Yang Jae",
                live : "Suwon"
            }

        }
    }
}
</script>

<style>

</style>