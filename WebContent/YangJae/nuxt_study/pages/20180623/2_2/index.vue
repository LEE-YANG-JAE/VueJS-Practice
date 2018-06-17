<template>
    <div>
        <h1>메인 페이지</h1>
        <h2>유저</h2>
        <p>{{ test }}</p>
    </div>
</template>

<script>
// http://localhost:3000/20180623/2_2
export default {
    data () {
        return {
            title : "Hello world",
            test : "blabla"
        }
    },
    head () {
        return {
            title : this.title,
            meta : [
                { hid : "1", name : "멍개", content : "멍개는 제 별명 입니다." }
            ]
        }
    },
    scrollToTop : false
}
</script>

<style>
h1 {
    color : red;
}
h2 {
    font-size: 15px;
}
</style>

