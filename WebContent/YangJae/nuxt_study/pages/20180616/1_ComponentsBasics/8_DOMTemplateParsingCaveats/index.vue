<template>
    <div>
        <table>
            <tr is="blog-post-row"></tr>
        </table>
    </div>
    <!-- This propery works on production 
    :: npm run build -> npm run start -->
</template>

<script>
// http://localhost:3000/20180616/1_ComponentsBasics/8_DOMTemplateParsingCaveats

import BlogPostRow from "~/components/20180616/1_ComponentsBasics/8_DOMTemplateParsingCaveats/BlogPostRow"
// No error in static file
export default {
    components : {
        BlogPostRow
    }
}
</script>

<style>

</style>