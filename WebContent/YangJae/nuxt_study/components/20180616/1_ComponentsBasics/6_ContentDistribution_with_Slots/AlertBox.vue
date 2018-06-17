<template>
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot> Others are happend!</slot>
    </div>
</template>

<script>
export default {
    props : [ "post"]
}
</script>

<style>
.demo-alert-box {
    border: 1px black solid;
    width: 300px;
    margin : 30px;
    padding : 10px;
    background-color:lightcoral;
}
</style>

