<script setup>
import ButtonLayoutExample from './layouts/ButtonLayoutExample.vue';
import SelectLayoutExample from './layouts/SelectLayoutExample.vue';
import PrimaryDropdownLayout from './layouts/primaryDropdownLayouts.vue'
import AccordionLayoutExample from './layouts/AccordionLayoutExample.vue';
import InputLayoutExample from './layouts/InputLayoutExample.vue';

</script>

<template>
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
    <div class="mt-20">
      <AccordionLayoutExample />
    </div>
    <div class="mt-20 w-full">
      <InputLayoutExample />
    </div>
  </div>
</template>

<style>

</style>
