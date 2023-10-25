<template>
<!-- 
TO ADD ICON
------------
Add leftIcon / rightIcon as a props and image path as props value,
Add iconHeight / iconWidth to give height and width

TO ADD CUSTOM CLASS
--------------------
Add customStyle props and pass the class name as props value

USABLE PROPS AND VALUE
----------------------
btnHeight=""
btnWidth=""
bgColor=""
isBorder="" (Boolean value)
color=""
borderStyle=""
borderRadius=""
fontSize=""
fontWeight=""
textTransform=""
padding=""                
hover=""
transition=""
duration=""
focus=""
btnName=""
 -->

    <div>
        <AppButton bgColor="bg-cyan-600"  />
    </div>
</template>

<script setup>
import AppButton from './components/AppButton.vue';
</script>

<style scoped>

</style>