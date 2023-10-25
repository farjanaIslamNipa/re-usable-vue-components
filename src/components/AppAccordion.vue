<template>
<!-- 
  KEYWORDS TO FIND SECTIONS EASILY 

     HEADER
     ICON
     EXPANDABLE CONTENT

-->
     <div 
     v-for="(accordion, index) in accordionContent" :key="index" 
     class=""
     :class="
     props.accordionData?.classes?.accordionBg ? props.accordionData.classes.accordionBg : 'bg-white',
     props.accordionData?.classes?.accordionPadding ? props.accordionData.classes.accordionPadding : 'p-4',
     props.accordionData?.classes?.accordionMargin ? props.accordionData.classes.accordionMargin : 'mb-3',
     props.accordionData?.classes?.accordionShadow ? props.accordionData.classes.accordionShadow : 'shadow-md',
     props.accordionData?.classes?.accordionBorder ? props.accordionData.classes.accordionBorder : 'rounded-none',
     props.accordionData?.classes?.customAccordion ? props.accordionData.classes.customAccordion : ''
     "
     >
          <button @click="toggleOpen(index)" class="flex justify-between items-center w-full focus:outline-0">
          <!-- HEADER -->
               <h2 
               class="block"
               :class="
               props.accordionData?.classes?.headingFont ? props.accordionData.classes.headingFont : 'text-base font-medium',
               props.accordionData?.classes?.headingColor ? props.accordionData.classes.headingColor : 'text-gray-900'
               "
               >
               {{ accordion?.heading }}
               </h2>
               <div>
               <!-- ICON -->
                    <svg 
                    :id="'accordion-icon' + index" 
                    class="transition-all ease-in-out duration-200 down-icon" 
                    :class="
                    openAccordion ? 'rotate-180 ':'',
                    props.accordionData?.classes?.iconHeight ? props.accordionData.classes.iconHeight : 'h-4',
                    props.accordionData?.classes?.iconWidth ? props.accordionData.classes.iconWidth : 'w-4'
                    " 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" 
                    :stroke="props.accordionData?.classes?.iconColor ? props.accordionData.classes.iconColor : '#b3b3b3'">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
               </div>
          </button>

          <!-- EXPANDABLE CONTENT -->
          <div :id='"accordionBtn" + index' class="expandable-content">
               <div class="overflow-hidden">
                    <p 
                    class="block"
                    :class="
                    props.accordionData?.classes?.detailsPadding ? props.accordionData.classes.detailsPadding : 'p-6',
                    props.accordionData?.classes?.detailsMargin ? props.accordionData.classes.detailsMargin : 'mt-3',
                    props.accordionData?.classes?.detailsFont ? props.accordionData.classes.detailsFont : 'text-sm font-normal',
                    props.accordionData?.classes?.detailsFontAlign ? props.accordionData.classes.detailsFontAlign : 'text-justify',
                    props.accordionData?.classes?.detailsBg ? props.accordionData.classes.detailsBg : 'bg-gray-100',
                    props.accordionData?.classes?.detailsBorder ? props.accordionData.classes.detailsBorder : 'rounded-md',
                    props.accordionData?.classes?.customContent ? props.accordionData.classes.customContent : ''
                    "
                    v-html="accordion?.details">
                    </p>
               </div>
          </div>
	</div>
</template>

<script setup>
import {ref} from 'vue'

const openAccordion = ref(false)

const props = defineProps({
     accordionData : Object,
})
const accordionContent = ref(props.accordionData.content)

const toggleOpen = (index) => {
     const accordionBtn = document.getElementById(`accordionBtn${index}`)
     const expand = document.querySelectorAll('.expandable-content')
     const downIcon = document.querySelectorAll('.down-icon')
     const accordionIcon = document.getElementById(`accordion-icon${index}`)
     
     expand.forEach((item, itemIndex) => {
          if(itemIndex !== index){
               item.classList.remove('expand')
          }
     })
     downIcon.forEach((item, itemIndex) => {
          if(itemIndex !== index){
               item.classList.remove('toggle-icon')
          }
     })

     accordionBtn.classList.toggle('expand')
     accordionIcon.classList.toggle('toggle-icon')
}

</script>

<style>
.expandable-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 500ms;
}
.expand {
  grid-template-rows: 1fr;
}
.toggle-icon{
     transform: rotate(180deg);
}
</style>