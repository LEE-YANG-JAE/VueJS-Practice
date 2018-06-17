<template>
    <h1>유저 id: {{ userId }} 프로필</h1>
</template>

<script>
// http://localhost:3000/20180623/4_2/profile/_id

/* 
    http://localhost:3000/20180623/4_2/users/profile/1 숫자 id로 입력
    http://localhost:3000/20180623/4_2/users/profile/a 문자로는 접속 불가
*/
export default {
    validate ({ params }) {
        if ( !isNaN(params.id)) {
            return true
        } else {
            return false
        }
    },
    data () {
        return {
            userId : this.$route.params.id
        }
    }
}
</script>