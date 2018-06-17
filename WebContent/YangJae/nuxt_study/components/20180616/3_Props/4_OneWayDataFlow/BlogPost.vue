<template>
    <div>
        <p>{{ counter }}</p>
        <p>{{ normalizedSize }}</p>
    </div>
</template>

<script>
export default {
    props: [ "initialCounter", "size" ],
    data () {
        return {
            counter : this.initialCounter
            /*
                The prop is used to pass in an initial value; 
                the child component wants to use it as a local data property afterwards. 
                In this case, it’s best to define a local data property that uses the prop as its initial value
            */
        }
    },
    computed : {
        normalizedSize: function () {
            return this.size.trim().toLowerCase()
            /*
                The prop is passed in as a raw value that needs to be transformed. 
                In this case, it’s best to define a computed property using the prop’s value:
            */
        }
    }
}
</script>

<style>

</style>

