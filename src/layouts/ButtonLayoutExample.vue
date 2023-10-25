<template>
<!-- 

TO ADD CUSTOM CLASS
--------------------
Add customBtn props and pass the class name as props value

USABLE PROPS VALUE
----------------------
    btnName: ''
    btnBg : ''
    btnColor: ''
    btnBorder: ''
    btnHeight: ''
    btnWidth: ''
    btnFont: ''
    btnFw: ''
    textTransform: ''
    btnPadding: ''
    btnHover: ''
    btnFocus: ''
    customBtn: ''

    TO ADD ICON
-----------------
    icon: true,
    iconPosition: 'right',
    iconSrc: '/images/send.png',
    iconHeight: 'h-6',
    iconWidth: 'w-6',
    customBtnIcon: 'button-icon'
 -->


    <div>
        <AppButton :buttonProps="buttonProps"  />
    </div>
</template>

<script setup>
import AppButton from '../components/AppButton.vue';

const buttonProps = {
    btnName: 'Submit',
    btnBg : 'bg-cyan-200',
    btnColor: 'text-cyan-700',
    btnBorder: 'border border-cyan-400 rounded-md',
    btnHeight: 'h-9 md:h-10',
    btnWidth: 'min-w-[80px] md:min-w-[120px]',
    btnFont: 'text-base md:text-lg',
    btnFw: 'font-medium',
    textTransform: 'capitalize',
    btnPadding: 'py-1 md:py-[6px] px-4 md:px-6',
    btnHover: 'hover:bg-white hover:text-cyan-800 hover:border hover:border-cyan-600',
    btnFocus: 'focus:none',
    btnCustom: 'custom-button',
}
</script>

<style scoped>

</style>