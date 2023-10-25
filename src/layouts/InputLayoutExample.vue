<template>
    <div class="flex gap-3 items-start w-full">
        <AppInput
            v-model="nameValue"
            name="name"
            type="text"
            :label="false"
            :borderNone="false"
            :isShadow="false"
            :searchInput="false"
            :floatingLabel="false"
            :togglePasswordVisibility="false"
            :inputProperties="inputProperties"
            :registered="true"
            errorText="Name field cannot be empty"
            labelText="Your name"
            placeHolder="Enter your name"
            />
            <!-- <AppInput
            v-model:modelValue="emailValue"
            name="email"
            type="email"
            :label="false"
            :borderNone="false"
            :isShadow="false"
            :searchInput="false"
            :floatingLabel="false"
            :togglePasswordVisibility="false"
            :inputProperties="inputProperties"
            :registered="true"
            labelText="Your email"
            placeHolder="Enter your email address"
            />
            <AppInput
            v-model:modelValue="phoneValue"
            name="mobileNumber"
            type="text"
            :label="false"
            :borderNone="false"
            :isShadow="false"
            :searchInput="false"
            :floatingLabel="false"
            :togglePasswordVisibility="false"
            :inputProperties="inputProperties"
            :registered="true"
            errorText="Number field cannot be empty"
            labelText="Phone Number"
            placeHolder="Enter your phone number"
            /> -->
        <div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import AppInput from '../components/AppInput.vue';

const nameValue = ref('')
const emailValue = ref('')
const phoneValue = ref('')

const inputProperties = {
    registered: true,
    flexLabel: true,
    bgColor: 'bg-white',
    border: 'border border-gray-200',
    inputFontSize: 'text-base',
    inputFontWeight: 'font-normal',
    inputColor: 'text-gray-600',
    padding: 'px-3 py-2',
    margin: '',
    placeholderFont: 'placeholder:text-sm',
    placeholderColor: 'placeholder:text-gray-400',
    boxShadow: 'box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
    inputIcon: '',
    label: {
        fontSize: 'text-base',
        fontWeight: 'font-medium',
        textTransform: '',
        color: 'text-gray-500',
        padding: '',
        margin: 'mb-1',
        iconSrc: '',
        iconHeight: 'h-5',
        iconWidth: 'w-5',
        iconGap: 'gap-2',
        customLabel: 'custom-label',
    },
    floatingLabel: {
        fontSize: 'text-base',
        fontWeight: '',
        textTransform: '',
        color: 'text-gray-700',
        bgColor: 'bg-white',
        padding: 'px-1',
        top: 'top-2',
        left: 'left-3',
        customLabel: 'custom-label',
    },
    searchIcon: {
        src: '',
        height: 'h-5',
        width: 'w-5',
        positionRight: 'right-2.5',
        positionBottom: 'bottom-2.5'
    },
    showPassIcon: '',
    hidePassIcon: '',
    error: {
        fontSize: 'text-sm',
        fontWeight: '',
        textTransform: '',
        color: 'text-red-600',
        margin: 'mt-1 ml-1'
    }
}

</script>

<style>

</style>