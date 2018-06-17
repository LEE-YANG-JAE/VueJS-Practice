<template>
    <div>
        <p>{{ title }}</p>
        <p>{{ likes }}</p>
        <p>{{ isPublished }}</p>
        <p>{{ commentIds }}</p>
        <p>{{ author }}</p>
    </div>
</template>

<script>
export default {
    props: { 
        title : String, 
        likes : Number,
        isPublished : Boolean,
        commentIds: Array, 
        author : Object }
}
</script>

<style>

</style>

