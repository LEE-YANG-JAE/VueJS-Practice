<template>
    <div>
        <blog-post
            v-bind:author="author"
            v-bind:author2="author2"
        ></blog-post>
    </div>
</template>

<script>
// http://localhost:3000/20180616/3_Props/5_PropValidation/1_TypeChecks

import BlogPost from "~/components/20180616/3_Props/5_PropValidation/1_TypeChecks/BlogPost"; 

function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
var author = new Person("Yang Jae","Lee");
console.log(author instanceof Person); // true
var author2 = {
    firstName : "Yang Jae",
    lastName : "Lee2"
};
// Both hava an error of 'Vue warn'
export default {
    components : {
        BlogPost
    },
    data () {
        return {
            author : author,
            author2 : author2
        }
    }
}
</script>

<style>

</style>