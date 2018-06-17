<template>
   <div>
    <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
    >{{ tab }}</button>

    <component
        v-bind:is="currentTabComponent"
        class="tab"
    ></component>
   </div>
</template>

<script>
// http://localhost:3000/20180616/1_ComponentsBasics/7_DynamicComponents

import TabHome from "~/components/20180616/1_ComponentsBasics/7_DynamicComponents/TabHome"
import TabArchive from "~/components/20180616/1_ComponentsBasics/7_DynamicComponents/TabArchive"
import TabPosts from "~/components/20180616/1_ComponentsBasics/7_DynamicComponents/TabPosts"

export default {
    components : {
        TabHome, TabArchive, TabPosts
    },
    data () {
        return {
          currentTab : "Home",
          tabs : ["Home", "Posts", "Archive"]
        }
    },
    computed : {
        currentTabComponent : function() {
            return "tab-" + this.currentTab.toLowerCase();
        }
    }
}
</script>

<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>