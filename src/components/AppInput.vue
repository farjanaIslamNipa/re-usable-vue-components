<template>
    <div class="relative w-full">
    <!-- LABEL -->
        <label 
        v-if="props.label" for=""
        class="flex items-center gap-2 w-full"
        :class="defaultLabelStyle()"
        >
        <span class="inline-block" v-if="props.inputProperties.label.iconSrc">
            <img 
            :src="props.inputProperties.label.iconSrc"  
            class="inline-block" 
            :class="
            props.inputProperties?.label?.iconHeight ? props.inputProperties.label.iconHeight : 'h-5',
            props.inputProperties?.label.iconWidth ? props.inputProperties.label.iconWidth : 'w-5'
            "
            alt=""
            >
        </span>
        <span class="inline-block">{{ props.labelText }}</span>
        </label>

    <!-- INPUT -->
        <input
        :value="props.modelValue"
        @input="updateValue"
        :name="props.name"
        :type="props.togglePasswordVisibility ? passwordType : inputType"
        :placeholder="!props.floatingLabel ? props.placeHolder ? props.placeHolder : '' : ' '"
        :style=" (props?.isShadow) && props.inputProperties?.boxShadow ? props.inputProperties.boxShadow : ''"
        class="w-full rounded-md py-2 px-3 focus:outline-none focus:border-sky-200 floating-input"
        :class="defaultInputStyle(), props.type === 'text' ? 'capitalize' : ''"
        >
        <label 
        v-if="!props.label && props.floatingLabel" for="" 
        class="absolute inline-block floating-label transition-all ease-out duration-200"
        :class="setFloatingLabel()"
        >
        {{ props.labelText }}
        </label>

    <!-- FOR SEARCH INPUT -->
        <div v-if="props.searchInput && !props.togglePasswordVisibility">
            <button 
            v-if="props.inputProperties.searchIcon.src" 
            class="absolute" 
            :class="
            props.inputProperties?.searchIcon?.positionRight ? props.inputProperties?.searchIcon.positionRight : 'right-2.5',
            props.inputProperties?.searchIcon?.positionBottom ? props.inputProperties?.searchIcon.positionBottom : 'bottom-3'
            "
            >
                <img 
                class="inline-block" 
                :class="
                props.inputProperties?.searchIcon?.height ? props.inputProperties?.searchIcon.height : 'h-6',
                props.inputProperties?.searchIcon?.width ? props.inputProperties?.searchIcon.width : 'w-6'
                " 
                :src="props.inputProperties?.searchIcon?.src" 
                alt="Search">
            </button>
            <button v-else 
            class="absolute" 
            :class="
            props.inputProperties?.searchIcon?.positionRight ? props.inputProperties?.searchIcon.positionRight : 'right-2.5',
            props.inputProperties?.searchIcon?.positionBottom ? props.inputProperties?.searchIcon.positionBottom : 'bottom-2.5'
            " >
                <svg :class="props.inputProperties?.searchIcon?.height ? props.inputProperties?.searchIcon.height : 'h-5', props.inputProperties?.searchIcon?.width ? props.inputProperties?.searchIcon.width : 'w-5'
                "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="22px" height="22px" baseProfile="basic"><linearGradient id="-2suTD81jP2ew0CFO8L6Qa" x1="31.916" x2="25.088" y1="31.849" y2="26.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b2b2b2"/><stop offset=".999"/></linearGradient><polygon fill="url(#-2suTD81jP2ew0CFO8L6Qa)" points="29.976,27 24.451,27.176 33.95,36.778 36.778,33.95"/><path fill="#b2b2b2" d="M24.313,27c-1.788,1.256-3.962,2-6.313,2c-6.075,0-11-4.925-11-11S11.925,7,18,7s11,4.925,11,11 c0,2.659-0.944,5.098-2.515,7h4.776C32.368,22.909,33,20.53,33,18c0-8.284-6.716-15-15-15S3,9.716,3,18c0,8.284,6.716,15,15,15 c4.903,0,9.243-2.363,11.98-6H24.313z"/></svg>
            </button>
        </div>

        <!-- FOR INPUT TYPE PASSWORD -->
        <div @click="props.modelValue !== '' && (passwordType === 'password' ? passwordType = 'text' : passwordType = 'password')" v-if="props.togglePasswordVisibility" class="absolute right-3 bottom-1">
            <button v-if="passwordType === 'password'">
                <svg :class="props.modelValue !== '' ? 'opacity-100' : 'opacity-50'" xmlns="http://www.w3.org/2000/svg" fill="#5e5e5e" width="22px" height="22px" viewBox="0 0 512 512"><rect x="240.44" y="0.03" width="31.11" height="511.95" transform="translate(-106.04 256) rotate(-45)"/><path d="M259.34,192.09l60.57,60.57A64.07,64.07,0,0,0,259.34,192.09Z"/><path d="M252.66,319.91l-60.57-60.57A64.07,64.07,0,0,0,252.66,319.91Z"/><path d="M256,352a96,96,0,0,1-92.6-121.34L94.33,161.58C66.12,187.42,39.24,221.14,16,256c26.42,44,62.56,89.24,100.2,115.18C159.38,400.92,206.33,416,255.76,416A233.47,233.47,0,0,0,335,402.2l-53.61-53.6A95.84,95.84,0,0,1,256,352Z"/><path d="M256,160a96,96,0,0,1,92.6,121.34L419.26,352c29.15-26.25,56.07-61.56,76.74-96-26.38-43.43-62.9-88.56-101.18-114.82C351.1,111.2,304.31,96,255.76,96a222.92,222.92,0,0,0-78.21,14.29l53.11,53.11A95.84,95.84,0,0,1,256,160Z"/></svg>
            </button>
            <button v-if="passwordType !== 'password'">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#5e5e5e" width="22px" height="22px" viewBox="0 0 512 512"><circle cx="256" cy="256" r="64"/><path d="M490.84,238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349,110.55,302,96,255.66,96c-42.52,0-84.33,12.15-124.27,36.11C90.66,156.54,53.76,192.23,21.71,238.18a31.92,31.92,0,0,0-.64,35.54c26.41,41.33,60.4,76.14,98.28,100.65C162,402,207.9,416,255.66,416c46.71,0,93.81-14.43,136.2-41.72,38.46-24.77,72.72-59.66,99.08-100.92A32.2,32.2,0,0,0,490.84,238.6ZM256,352a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,352Z"/></svg>
            </button>
        </div>
        <p 
        v-if="props.registered" 
        class="block"
        :class="
        props.inputProperties?.error?.fontSize ? props.inputProperties.error.fontSize : 'text-sm',
        props.inputProperties?.error?.fontWeight ? props.inputProperties.error.fontWeight : '',
        props.inputProperties?.error?.color ? props.inputProperties.error.color : 'text-red-600',
        props.inputProperties?.error?.margin ? props.inputProperties.error.margin : 'ml-1 mt-1'
        "
        >
        {{ error }}
        </p>
    </div>

</template>

<script setup>
import {ref, watch} from 'vue'
const props = defineProps({
    modelValue: String,
    name: String,
    type: String,
    labelText: String,
    placeHolder: String,
    label: Boolean,
    borderNone: Boolean,
    isShadow: Boolean,
    searchInput: Boolean,
    floatingLabel: Boolean,
    togglePasswordVisibility: Boolean,
    inputProperties: Object,
    registered: Boolean,
    errorText: String
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
}


const inputType = ref(props.type)
const passwordType = ref('password')

const defaultInputStyle = () => {
    let inputStyle = {}

    props.inputProperties?.bgColor          ? inputStyle.bgColor            = props.inputProperties.bgColor : inputStyle.bgColor = 'bg-white',
    props.inputProperties?.inputFontSize    ? inputStyle.inputFontSize      = props.inputProperties.inputFontSize : inputStyle.inputFontSize = 'text-base',
    props.inputProperties?.inputFontWeight  ? inputStyle.inputFontWeight    = props.inputProperties.inputFontWeight : inputStyle.inputFontWeight = 'font-normal',
    props.inputProperties?.inputColor       ? inputStyle.inputColor         = props.inputProperties.inputColor : inputStyle.inputColor = 'text-gray-600',
    props.inputProperties?.padding          ? inputStyle.padding            = props.inputProperties.padding : inputStyle.padding = 'px-3 py-2',
    props.inputProperties?.margin           ? inputStyle.margin             = props.inputProperties.margin : inputStyle.margin = '',
    props.inputProperties?.placeholderFont  ? inputStyle.placeholderFont    = props.inputProperties.placeholderFont : inputStyle.placeholderFont = 'placeholder:text-sm'
    props.inputProperties?.placeholderColor ? inputStyle.placeholderColor   = props.inputProperties.placeholderColor : inputStyle.placeholderColor = 'placeholder:text-gray-400',

    !props.borderNone ? props.inputProperties?.border ? inputStyle.border = props.inputProperties.border : inputStyle.border = 'border border-gray-200' : 'border-none'

    return inputStyle.border + ' ' +
    inputStyle.bgColor + ' ' +
    inputStyle.inputFontSize + ' ' +
    inputStyle.inputFontWeight + ' ' +
    inputStyle.inputColor + ' ' +
    inputStyle.padding + ' ' +
    inputStyle.margin + ' ' +
    inputStyle.placeholderFont + ' ' +
    inputStyle.placeholderColor

}

const defaultLabelStyle = () => {
    let labelStyle ={}

    props.inputProperties?.label?.fontSize      ? labelStyle.fontSize       = props.inputProperties.label.fontSize      : labelStyle.fontSize = 'text-base',
    props.inputProperties?.label?.fontWeight    ? labelStyle.fontWeight     = props.inputProperties.label.fontWeight    : labelStyle.fontWeight = 'font-normal',
    props.inputProperties?.label?.color         ? labelStyle.color          = props.inputProperties.label.color         : labelStyle.color = 'text-gray-500',
    props.inputProperties?.label?.margin        ? labelStyle.margin         = props.inputProperties.label.margin        : labelStyle.margin = 'mb-1',
    props.inputProperties?.label?.padding       ? labelStyle.padding        = props.inputProperties.padding.padding     : labelStyle.padding = 'p-0',
    props.inputProperties?.label?.textTransform ? labelStyle.textTransform  = props.inputProperties.label.textTransform : labelStyle.textTransform = '',
    props.inputProperties?.label?.iconGap       ? labelStyle.iconGap        = props.inputProperties.label.iconGap       : labelStyle.iconGap = 'gap-2',
    props.inputProperties?.label?.customLabel   ? labelStyle.customLabel    = props.inputProperties.label.customLabel   : labelStyle.customLabel = ''

   return labelStyle.fontSize + ' ' +
   labelStyle.fontWeight + ' ' +
   labelStyle.color + ' ' +
   labelStyle.margin + ' ' +
   labelStyle.padding + ' ' +
   labelStyle.textTransform + ' ' +
   labelStyle.iconGap + ' ' +
   labelStyle.customLabel

}

const setFloatingLabel = () => {
    let floatingLabelStyle ={}

    props.inputProperties?.floatingLabel?.fontSize      ?  floatingLabelStyle.fontSize       = props.inputProperties.floatingLabel.fontSize      : floatingLabelStyle.fontSize = 'text-base',
    props.inputProperties?.floatingLabel?.fontWeight    ?  floatingLabelStyle.fontWeight     = props.inputProperties.floatingLabel.fontWeight    : floatingLabelStyle.fontWeight = 'font-normal',
    props.inputProperties?.floatingLabel?.bgColor       ?  floatingLabelStyle.bgColor        = props.inputProperties.floatingLabel.bgColor       : floatingLabelStyle.bgColor = 'bg-gray-900',
    props.inputProperties?.floatingLabel?.color         ?  floatingLabelStyle.color          = props.inputProperties.floatingLabel.color         : floatingLabelStyle.color = 'text-gray-600',
    props.inputProperties?.floatingLabel?.padding       ?  floatingLabelStyle.padding        = props.inputProperties.floatingLabel.padding       : floatingLabelStyle.padding = 'px-1',
    props.inputProperties?.floatingLabel?.top           ?  floatingLabelStyle.top            = props.inputProperties.floatingLabel.top           : floatingLabelStyle.top = 'top-2',
    props.inputProperties?.floatingLabel?.left          ?  floatingLabelStyle.left           = props.inputProperties.floatingLabel.left          : floatingLabelStyle.left = 'left-3',
    props.inputProperties?.floatingLabel?.textTransform ?  floatingLabelStyle.textTransform  = props.inputProperties.floatingLabel.textTransform : floatingLabelStyle.textTransform = '',
    props.inputProperties?.floatingLabel?.customLabel   ?  floatingLabelStyle.customLabel    = props.inputProperties.floatingLabel.customLabel   : floatingLabelStyle.customLabel = ''

   return floatingLabelStyle.fontSize + ' ' +
   floatingLabelStyle.fontWeight + ' ' +
   floatingLabelStyle.bgColor + ' ' +
   floatingLabelStyle.color + ' ' +
   floatingLabelStyle.padding + ' ' +
   floatingLabelStyle.top + ' ' +
   floatingLabelStyle.left + ' ' +
   floatingLabelStyle.textTransform + ' ' +
   floatingLabelStyle.customLabel
 
}

const error = ref('')

const validateEmail = () => {
    let emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
    return emailFormat.test(props.modelValue);
}

const validateNumber = () => {
    let numberFormat = /^\d+$/;
    return numberFormat.test(props.modelValue)
}

// FOR ERROR MESSAGES
watch(() => props.modelValue, currentValue => {
    if(props.registered){
        if(currentValue === ''){
            error.value = props.errorText ? props.errorText : 'This field is required'
        }else{
            error.value = ''
        }
        if(props.type === 'email' && currentValue !== '' && !validateEmail()){
            error.value = 'Please enter a valid email address'
        }else if(currentValue !== '' && validateEmail()){
            error.value = ''
        }

        if((props.name.includes('phone') || props.name.includes('mobile') || props.name.includes('number')) && currentValue !== '' && !validateNumber()){
            console.log('yes');
            error.value = 'Please enter a valid number'
        }
    }
});
</script>

<style scoped>
.floating-label {
    pointer-events:none;
}
.floating-input:focus ~ .floating-label{
    top: -12px;
    font-size:13px;
}

.floating-input:not(:placeholder-shown) ~ .floating-label {
    top: -12px;
    font-size:13px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>