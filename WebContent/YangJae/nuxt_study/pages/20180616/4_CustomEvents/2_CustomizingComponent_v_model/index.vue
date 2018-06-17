<template>
    <div>
        <base-checkbox v-model="lovingVue"></base-checkbox>
        <button v-on:click="checkBoxChange">Change checkbox status</button>
    </div>
</template>

<script>
// http://localhost:3000/20180616/4_CustomEvents/2_CustomizingComponent_v_model

import BaseCheckbox from "~/components/20180616/4_CustomEvents/2_CustomizingComponent_v_model/BaseCheckbox"; 

export default {
    components : {
        BaseCheckbox
    },
    data () {
        return {
            lovingVue : true
        }
    },
    methods : {
        checkBoxChange () {
            if ( this.lovingVue ) this.lovingVue = false;
            else this.lovingVue = true;
        }
    }

}
</script>

<style>

</style>