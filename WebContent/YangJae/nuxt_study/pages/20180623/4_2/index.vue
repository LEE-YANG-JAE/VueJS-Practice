<template>
    <div>
        <h1>메인 페이지</h1>
        <ol>
            <li><nuxt-link to="/20180623/4_2">메인페이지 링크</nuxt-link></li>
            <li><nuxt-link to="/20180623/4_2/users/profile/1">1 유저</nuxt-link></li>
            <li><nuxt-link to="/20180623/4_2/users/profile/2">2 유저</nuxt-link></li>
            <li><nuxt-link to="/20180623/4_2/users/profile/잘못된 유저">잘못된 유저</nuxt-link></li>
        </ol>
        <nuxt/>
    </div>
</template>

<script>
// http://localhost:3000/20180623/4_2
export default {
    
}
</script>
