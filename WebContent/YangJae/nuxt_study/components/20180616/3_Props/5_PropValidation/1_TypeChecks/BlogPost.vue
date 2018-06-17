<template>
    <div>
        <p>{{ author.firstName }} {{ author.lastName }}</p>
        <p>{{ author2.firstName }} {{ author2.lastName }}</p>
    </div>
</template>

<script>
function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

export default {
    props: {
        author : Person,
        author2 : Person
    }
}
/*
    The type can be one of the following native constructors:

    String
    Number
    Boolean
    Array
    Object
    Date
    Function
    Symbol
*/
</script>

<style>

</style>

