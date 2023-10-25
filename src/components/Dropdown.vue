<template>
  <div>
    <div ref="root" class="flex justify-center items-center">
      <div :class="backgroundColor ? backgroundColor : 'bg-white',
       !open ? 'rounded-b-md': '',
        isBorder? (borderDesign ? borderDesign : 'border border-gray-200') : 'bg-gray-50',
        width? width : 'w-72'
        " class="shadow-sm rounded-t-md p-2 w-72 relative">
        <div :class="isBorder ? (bottomBorder ? bottomBorder : '') : ''" @click="openDropdown" class="flex justify-between items-center cursor-pointer py-2">
          <p :class="textColor ? textColor : 'text-black', fontSize ? fontSize : 'text-3xl'" class="text-xs font-semibold leading-3"><span>{{ buttonValue.length > 0 && !multiSelect ? buttonValue : title }}</span></p>
          <svg v-if="icon" :class="open ? 'rotate-180 transition-all ease-in-out duration-200':''" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="black" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>

        </div>
        <div :class="isBadge ? 'block' : 'hidden'"  class="flex flex-wrap gap-x-0.5 gap-y-0.5" v-if="open">
          <span v-for="(value,index) in buttonValue" :key="index" id="badge-dismiss-default" class="z-50 inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300">
              {{value}}
              <button @click="removeItem(index)" type="button" class="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
                  <svg aria-hidden="true" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Remove badge</span>
              </button>
          </span>
        </div>
        <div :class="open ? 'h-0 transition-all translate-y-0 ease-in-out duration-600 rotate-360' : 'translate-y-24'" class="absolute z-30 inset-0 w-full top-full">
          <div v-if="open" class="absolute w-[100%] shadow-xl">
            <input  v-model="searchString" type="text" :placeholder="placeholder" class="w-full bg-white text-black font-normal mt-2 p-2 outline-none border-b border-gray-200">
            <div class=" overflow-auto">
              <div class="divide-y divide-gray-100 p-2 cursor-pointer bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hover:bg-gray-100 hover:text-black hover:border-l-2 hover:border-red-600" v-for="option in filterItems" :key="option.name">
                <li class="flex justify-between items-center" @click="selectingValue(option.name)">
                  {{option.name }} <span v-if="isSelected(option.name)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f04935" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>

                </span>
                </li>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div v-if="open" @click="open = false"
         class="fixed inset-0 z-20 h-full w-full cursor-default transition duration-300 ease-in-out">
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "@vue/reactivity"
import { onBeforeUnmount, onMounted, watch } from "@vue/runtime-core"
const divOpen = ref(false)
const {multiSelect,placeholder, options, title, backgroundColor, textColor, icon, bottomBorder, isBorder, borderDesign, fontSize,width }
    = defineProps({
  placeholder: String,
  options: {
    type: Array,
    required: true
  },
  title: String,
  backgroundColor: String,
  textColor: String,
  icon: Boolean,
  bottomBorder: String,
  isBorder: Boolean,
  borderDesign: String,
  fontSize: String,
  width: String,
  multiSelect: String
})
const root = ref(null)
const open = ref(false)
const openDropdown = ()=>{
  open.value = !open.value
}
const searchString = ref('')
const buttonValue = ref([])
const checked = ref(false)
const isBadge = ref(false)
const selectingValue = (item)=>{
  console.log(multiSelect)
  if(multiSelect === true){
    const checkItemExist = buttonValue.value.findIndex(i => i === item)
    if(checkItemExist > -1) return;
    buttonValue.value.push(item)
  }else{
    buttonValue.value = item
    open.value = false
  }

}

const removeItem = (index)=>{
  console.log("clicked")
  buttonValue.value.splice(index,1)
}

const  filterItems = computed (()=>{
  if(searchString.value == '') {
    return options
  } else {
    return options.filter(items=> items.name.toLowerCase().includes(searchString.value))
  }
})

const isSelected = (currentItem) => {
  return buttonValue.value.includes(currentItem)
}

watch(buttonValue.value,()=>{
  if(buttonValue.value.length > 0){
    isBadge.value = true
  }else {
    isBadge.value = false
  }
})

</script>

<style scoped>
.app-select-dropdown {
  height: 0;
  overflow: hidden;
  transition: height 0.2s ease;
}
.app-select-dropdown ul li:last-child{
  border-bottom: none;
}

.show-dropdown {
  height: 500px;
}
.ease-custom {
  transition-timing-function: cubic-bezier(.61,-0.53,.43,1.43);
}
</style>