<script setup>
import {ref,reactive} from 'vue'
import ButtonLayoutExample from './ButtonLayoutExample.vue';
import SelectLayoutExample from './SelectLayoutExample.vue';
import PrimaryDropdownLayout from './layouts/primaryDropdownLayouts.vue'
</script>

<template>

  <div class="pt-28"></div>
  <div class="py-4 md:py-6 px-4 md:px-10 lg:px-[60px] xl:px-[100px] 2xl:px-[200px]">
    <div class="flex gap-8 w-full">
      <div class="w-full">
        <ButtonLayoutExample />
      </div>
      <div class="w-full">
        <SelectLayoutExample />
      </div>
      <div class="w-full">
        <PrimaryDropdownLayout />
      </div>
    </div>
  </div>
</template>

<style>

</style>
