<template>
  <!--
  TO ADD CUSTOM CLASS
  --------------------
  Add customStyle props and pass the class name as props value

  USABLE PROPS AND VALUE
  ----------------------
placeholder= "String"
options= "String"
title= "String"
backgroundColor= "String"
textColor= "String"
icon= "Boolean"
bottomBorder= "String"
isBorder= "Boolean"
borderDesign= "String"
fontSize= "String"
width= "String"
  -->

  <div>
    <Dropdown
        :multiSelect = false
        :options="options"
        :placeholder="propsPlaceholder"
        title="Select an option"
        backgroundColor="bg-white"
        textColor = "text-gray-600"
        icon = true
        isBorder= true
        borderDesign="border border-gray-200"
        fontSize = "text-lg"
        width = "w-96"
    />
  </div>
</template>

<script setup>
import Dropdown from '../components/Dropdown.vue';
import {reactive, ref} from "vue";
const options = reactive([
  {
    option:"apple",
    name:"apple"
  },
  {
    option:"bananna",
    name:"bananna"
  },
  {
    option:"mango",
    name:"mango"
  },
  {
    option:"jackfruits",
    name:"jackfruits"
  },
  {
    option:"watermelon",
    name:"watermelon"
  },
  {
    option:"pineapple",
    name:"pineapple"
  }
])
const propsPlaceholder = ref("Enter a string")
</script>

<style scoped>

</style>