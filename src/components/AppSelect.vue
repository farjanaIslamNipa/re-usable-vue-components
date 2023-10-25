<template>
    <div class="">
        <div class="relative">
            <button 
            id="appSelect"
            @click="toggleSelect"
            class="flex items-center justify-between transition ease-out duration-300 z-10"
            :class="
            dropdownExpand ? 'rounded-b-none' : 'rounded-b-md',
            appSelect?.dropdownBtn?.width ? appSelect.dropdownBtn.width : 'w-full',
            appSelect?.dropdownBtn?.border ? appSelect.dropdownBtn.border : 'border border-gray-300 rounded-md',
            appSelect?.dropdownBtn?.padding ? appSelect.dropdownBtn.padding : 'px-4 py-1',
            appSelect?.dropdownBtn?.fontSize ? appSelect.dropdownBtn.fontSize : 'text-base',
            appSelect?.dropdownBtn?.fontWeight ? appSelect.dropdownBtn.fontWeight : 'font-medium',
            appSelect?.dropdownBtn?.bgColor ? appSelect.dropdownBtn.bgColor : 'bg-white',
            appSelect?.dropdownBtn?.color ? appSelect.dropdownBtn.color : 'text-gray-600',
            appSelect?.dropdownBtn?.customBtn ? appSelect.dropdownBtn.customBtn : ''
            "
            >
                <div 
                v-if="multiselect" 
                class="flex flex-wrap items-center" 
                :class="
                appSelect?.multiselect?.flexGap ? appSelect?.multiselect?.flexGap : 'gap-x-2 gap-y-2',
                appSelect?.multiselect?.fontSize ? appSelect.multiselect.fontSize : 'text-base',
                appSelect?.multiselect?.fontWeight ? appSelect.multiselect.fontWeight : 'font-medium'
                ">
                    <div 
                    v-if="multipleSelectedItem.length > 0" 
                    v-for="(item, index) in multipleSelectedItem" 
                    class="flex items-center gap-2 justify-center" 
                    :class="
                    appSelect?.multiselect?.badgeBg ? appSelect?.multiselect?.badgeBg : 'bg-sky-500',
                    appSelect?.multiselect?.badgePadding ? appSelect?.multiselect?.badgePadding : 'px-2 py-1.5',
                    appSelect?.multiselect?.badgeBorder ? appSelect?.multiselect?.badgeBorder : 'rounded-md',
                    appSelect?.multiselect?.customMultiSelect ? appSelect?.multiselect?.customMultiSelect : ''
                    "
                    >
                        <p 
                        :title="item" 
                        class="inline-block"
                        :class="
                        appSelect?.multiselect?.badgeColor ? appSelect?.multiselect?.badgeColor : 'text-sky-600',
                        appSelect?.multiselect?.badgeFont ? appSelect?.multiselect?.badgeFont : 'text-sm',
                        appSelect?.multiselect?.badgeFontWeight ? appSelect?.multiselect?.badgeFontWeight : 'font-medium'
                        "
                        >
                        {{ item.length > 10 ?  item.slice(0, 10) + '...' : item }}
                        </p>
                        <div>
                            <button 
                            @click="removeItem(index)" 
                            type="button" 
                            class="flex items-center justify-center z-50 relative hover:bg-gray-100 transition ease-out duration-300"
                            :class="
                            appSelect?.multiselect?.closeIconBg ? appSelect?.multiselect?.closeIconBg : 'bg-transparent',
                            appSelect?.multiselect?.closeIconColor ? appSelect?.multiselect?.closeIconColor : 'text-sky-500',
                            appSelect?.multiselect?.closeIconPadding ? appSelect?.multiselect?.closeIconPadding : 'p-[2px]',
                            appSelect?.multiselect?.closeIconBorder ? appSelect?.multiselect?.closeIconBorder : 'rounded-md'
                            "
                            aria-label="Remove">
                                <svg 
                                aria-hidden="true" 
                                class="inline-block" 
                                :class="
                                appSelect?.multiselect?.closeIconHeight ? appSelect?.multiselect?.closeIconHeight : 'h-3.5',
                                appSelect?.multiselect?.closeIconWidth ? appSelect?.multiselect?.closeIconWidth : 'w-3.5'
                                " 
                                fill="currentColor" 
                                viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path  fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                                <span class="sr-only">Remove Item</span>
                            </button>
                        </div>
                    </div>
                    <div v-else><span class="inline-block">{{ selectedItem ? selectedItem.name : 'Select your options' }}</span></div>
                </div>
                <div v-else class="flex items-center gap-2">
                    <div v-if="selectedItem?.icon"><img :src="selectedItem?.icon" class="h-5" alt=""></div>
                    <span>{{ selectedItem ? selectedItem.name : 'Select an option' }}</span>
                </div>
                <div class="border border-l-[#d1d1d1] border-y-0 border-r-0 pl-3 py-3 ml-1">
                    <svg :class="dropdownExpand ? 'rotate-180 transition-all ease-in-out duration-200':''" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="#b3b3b3" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </button>
            <div 
            id="selectDropdown"
            class="w-full app-select-dropdown transition ease-out duration-300 absolute left-0 right-0 shadow-xl rounded-b-md"
            >
                <ul id="app-dropdown-box" class="border border-gray-200 border-t-0 rounded-md rounded-t-none text-base text-gray-600 transition ease-out duration-300 bg-white divide-y divide-gray-200">
                    <li
                    @click="item?.link ? toggleSelect() : selectOption(item.name, item.icon)"
                     v-for="item in appSelect.dropdownItems" 
                     :key="item.index" 
                     class="py-3 px-4 cursor-pointer flex items-center justify-between hover:bg-[#EBEDF5] transition-all duration-300 ease-in-out">
                        <div class="flex items-center gap-3 w-full">
                            <div v-if="item?.icon">
                                <img :src="item?.icon" class="h-5" alt="">
                            </div>
                            <div class="flex items-center justify-between w-full">
                                <div class="">
                                    <RouterLink @click="selectedItem = ''" v-if="item?.link" :to="item?.link" class="block">{{ item.name }}</RouterLink>
                                    <span v-else class="block">{{ item.name }}</span>
                                </div>
                                <div class="transition ease-in-out duration-600 opacity-0" :class="isSelected(item.name) ? 'opacity-100 transition ease-in-out duration-600 mr-2' : 'opacity-0'">
                                    <img src="/images/check-mark.svg" class="h-4" alt="Success">
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>


import { ref } from 'vue';

const dropdownExpand = ref(false)

const { appSelect, defaultOption, multiselect } = defineProps({
    appSelect: Object,
    defaultOption: String,
    multiselect: Boolean,
})

const selectedItem = ref({name:defaultOption ? defaultOption : 'Select Option', icon:''})
const multipleSelectedItem = ref([])


const showDropdown = ref(true)
const toggleSelect = () => {
if(showDropdown.value ===  true){
    const appSelectDropdown = document.getElementById('selectDropdown')
    const appDropdownBox = document.getElementById('app-dropdown-box')
    const appSelect = document.getElementById('appSelect')
    const dropdownBoxHeight = appDropdownBox.getBoundingClientRect().height
    if(appSelectDropdown.getBoundingClientRect().height === 0) {
        if(dropdownBoxHeight >= 500){
            appSelectDropdown.style.height = 390 + 'px'
            appSelectDropdown.style.overflow = 'hidden'
            appSelectDropdown.style.overflowY = 'auto'
        }else {
            appSelectDropdown.style.height = dropdownBoxHeight + 'px'
        }
        
        appDropdownBox.style.top = appSelect.getBoundingClientRect().height + 'px'
        dropdownExpand.value = true
    }else{
        appSelectDropdown.style.height = 0
        dropdownExpand.value = false
    }
}
}

const selectOption = (optionName, optionIcon) => {
    if(multiselect === false){
        if (arguments.length > 1){
        selectedItem.value.name = optionName
        selectedItem.value.icon = optionIcon
        toggleSelect()
        }else{
            selectedItem.value = optionName
            toggleSelect()
        }
    }else{
        const itemIndex = multipleSelectedItem.value.findIndex(option => option === optionName)
        if(itemIndex > -1) return;
        multipleSelectedItem.value.push(optionName)
        console.log(multipleSelectedItem.value);
    }

}

const removeItem = (itemIndex) => {
     multipleSelectedItem.value.splice(itemIndex, 1)
    if(multipleSelectedItem.value.length === 0){
        showDropdown.value = true
    }else {
        showDropdown.value = false
     
    }

}

const isSelected = (currentItem) => {
  return multipleSelectedItem.value.includes(currentItem)
}
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
.app-select-dropdown::-webkit-scrollbar {
  width: 0.5em;
}
 
.app-select-dropdown::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 0 0 5px 0;
}
 
.app-select-dropdown::-webkit-scrollbar-thumb {
  background-color: rgb(187, 187, 187);
  border-radius: 10px;
}
</style>