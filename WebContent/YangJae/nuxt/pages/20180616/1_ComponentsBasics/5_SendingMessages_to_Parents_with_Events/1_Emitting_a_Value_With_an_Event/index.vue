<template>
    <div v-bind:style="{ fontSize : postFontSize + 'em' }">
       <!-- 
        <blog-post
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:post="post"
            v-on:enlarge-text="postFontSize += $event"
            >
        </blog-post>
        -->
        <blog-post
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:post="post"
            v-on:enlarge-text="onEnlargeText"
            >
        </blog-post>
    </div>
</template>

<script>
// http://localhost:3000/20180616/5_SendingMessages_to_Parents_with_Events/1_Emitting_a_Value_With_an_Event

import BlogPost from "~/components/20180616/5_SendingMessages_to_Parents_with_Events/1_Emitting_a_Value_With_an_Event/BlogPost.vue"

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
            ],
            postFontSize : 1
        }
    },
    methods : {
        onEnlargeText : function(enlargeAmount) {
            this.postFontSize += enlargeAmount
        }
    }
}
</script>
