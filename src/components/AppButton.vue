<template>
    <button class="flex items-center justify-center gap-2" 
    :class="
    btnHeight ? btnHeight : 'h-10',
    btnWidth ? btnWidth : 'min-w-[120px]',
    isBorder ? (borderStyle ? borderStyle : 'border border-[#f04935]') : '',
    bgColor ? bgColor : 'bg-[#f04935]',
    color ? color : 'text-white', 
    borderRadius ? borderRadius : 'rounded-md', 
    fontSize ? fontSize : 'text-base md:text-lg', 
    fontWeight ? fontWeight : 'font-medium', 
    textTransform ? textTransform : 'py-1 md:py-[6px] px-4 md:px-6', 
    padding ? padding : '', 
    hover ? hover : 'hover:bg-white hover:text-[#f04935] hover:border hover:border-[#f04935]', 
    transition ? transition : 'ease-in-out', 
    duration ? duration : 'duration-300', 
    focus ? focus : '',
    customStyle ? customStyle : ''
    ">
    <div v-if="leftIcon"><img :src="leftIcon" :class="iconHeight, iconWidth" alt="Jatri Button"></div>
    <span>{{ btnName ? btnName : 'Button' }}</span>
    <div v-if="rightIcon"><img :src="rightIcon" :class="iconHeight, iconWidth" alt="Jatri Button"></div>
    </button>
</template>

<script setup>
const {btnName, bgColor, color, borderStyle, borderRadius, fontSize, fontWeight, textTransform, padding, hover, transition, duration, focus, leftIcon, rightIcon, iconHeight, iconWidth, isBorder, btnHeight, btnWidth, customStyle } 
    = defineProps({
        btnName: String,
        bgColor: String,
        color: String,
        borderStyle: String,
        borderRadius: String,
        fontSize: String,
        fontWeight: String,
        textTransform: String,
        padding: String,
        hover: String,
        transition:String,
        duration:String,
        focus: String,
        leftIcon:String,
        rightIcon:String,
        iconHeight:String,
        iconWidth:String,
        isBorder: Boolean,
        btnHeight: String,
        btnWidth: String,
        customStyle: String,
    })

</script>

<style scoped>

</style>