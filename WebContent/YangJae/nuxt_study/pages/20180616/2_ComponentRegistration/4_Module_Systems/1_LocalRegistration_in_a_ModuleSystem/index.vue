<template>
    <div>
        <component-a></component-a>
        <component-b></component-b>
    </div>
</template>

<script>
// http://localhost:3000/20180616/2_ComponentRegistration/4_Module_Systems/1_LocalRegistration_in_a_ModuleSystem

import ComponentA from "~/components/20180616/2_ComponentRegistration/3_LocalRegistration/ComponentA";
import ComponentB from "~/components/20180616/2_ComponentRegistration/4_Module_Systems/1_LocalRegistration_in_a_ModuleSystem/ComponentB";

export default {
    components : {
        ComponentA,ComponentB
    }
}
</script>

<style>

</style>