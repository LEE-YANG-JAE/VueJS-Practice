<template>
   <div>
       <text-document
            v-bind:title="doc.title"
            v-on:update:title="doc.title = $event"
        ></text-document>
        <hr>
        <text-document v-bind:title.sync="doc.title"></text-document>
        <hr>
        <text-document v-bind.sync="doc"></text-document>
        <!-- This passes each property in the doc object (e.g. title) as an individual prop, 
            then adds v-on update listeners for each one. -->
   </div>
           <!-- Using v-bind.sync with a literal object, 
            such as in v-bind.sync=”{ title: doc.title }”, will not work, 
            because there are too many edge cases to consider in parsing a complex expression like this. -->
</template>

<script>
// http://localhost:3000/20180616/4_CustomEvents/4_syncModifier

import TextDocument from "~/components/20180616/4_CustomEvents/4_syncModifier/TextDocument"; 

export default {
    components : {
        TextDocument
    },
    data () {
        return {
            doc : {
                title : "The load of the ring"
            }
        }
    }
}
</script>

<style>

</style>