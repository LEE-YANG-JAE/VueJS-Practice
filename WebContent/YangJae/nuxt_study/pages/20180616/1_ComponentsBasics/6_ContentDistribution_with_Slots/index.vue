<template>
   <div>
       <alert-box>
           {{ message }}
       </alert-box>
   </div>
</template>

<script>
// http://localhost:3000/20180616/1_ComponentsBasics/6_ContentDistribution_with_Slots

import AlertBox from "~/components/20180616/1_ComponentsBasics/6_ContentDistribution_with_Slots/AlertBox"

export default {
    components : {
        AlertBox
    },
    data () {
        return {
           message : "Something bad happend."
        }
    }
}
</script>
