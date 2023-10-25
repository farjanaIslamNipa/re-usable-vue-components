
<template>
  <div class="mt-[100px] md:px-[100px]  md:py-[60px] font-[Inter] bg-[#F04935] bg-opacity-[6%]">
    {{options.reviews}}

    {{options.buttons}}
    {{activeReview}}
    <div class="px-[18px] md:px-0 font-[Inter] max-w-[1240px] mx-auto">
      <p class="text-[#8D8D8F] leading-[20px] md:leading-[32px] text-[14px] md:text-[24px] font-[500] pt-[26px] md:pt-[0]">What users say about us</p>
      <div class="bg-[#F04935] w-full h-[1px] mt-[24px] bg-opacity-20">
      </div>
      <div class="md:flex justify-between md:mt-[40px]">

        <Transition name="slide-fade">
          <p :key="options.reviews[activeReview].message"
              class="w-full md:w-3/4 mt-[20px] md:mt-0 leading-[36px] text-[24px] font-[400]"
          >
            {{options.reviews[activeReview].message}}
          </p>
        </Transition>
        <div class="mt-[40px] md:mt-[0] text-left md:text-right w-full md:w-1/4">
          <p class=" text-[24px] leading-[36px]  font-[500] mb-[10px]">{{options.reviews[activeReview].reviewerDesignation}}</p>
          <small class="leading-[24px]   text-[16px] font-[400] text-[#676668]">designation
          </small>
        </div>
      </div>
      <div class="bg-[#F04935] w-full h-[1px] mt-[24px] bg-opacity-20">
      </div>
      <div class="grid gird-cols-1 md:grid-cols-2 mt-6 md:mt-[30px]">
        <div></div>
        <div class="flex gap-x-[30px] md:gap-x-[60px] pb-[26px] md:pb-0">
          <div @click="clickFunc(key)" v-for="(button,key) in options.buttons" :key="key"  class="h-[54px] w-[54px] md:h-[100px] md:w-[100px] rounded-full">
            {{key}} {{ button }}
<!--            <img src="@/assets/images/svg/user/Al-imran.png" class=" cursor-pointer rounded-full h-[54px] w-[54px] md:h-[100px] md:w-[100px]" alt="" >-->
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import {ref} from "@vue/reactivity";

const{ options, tabButtons } = defineProps({
  options:{
    required : true,
    type : Array
  }
})
const activeReview = ref('0')
const opaacityActive = ref(false)

const clickFunc = (index)=>{
  activeReview.value = index
  opaacityActive.value = true
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>