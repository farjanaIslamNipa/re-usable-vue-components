<template>
    <div class="">
        <div id="selectWrapper" class="relative z-10">
            <button 
            id="appSelect"
            @click="toggleSelect"
            class="flex items-center justify-between transition ease-out duration-300 z-10"
            :class="dropdownExpand ? 'rounded-b-none' : 'rounded-b-md', getDropdownBtnClasses()"
            >
                <div 
                v-if="multiselect" 
                class="flex flex-wrap items-center" 
                :class="
                appSelect?.multiselect?.flexGap ? appSelect?.multiselect?.flexGap : 'gap-x-2 gap-y-2',
                appSelect?.multiselect?.fontSize ? appSelect.multiselect.fontSize : 'text-base',
                appSelect?.multiselect?.fontWeight ? appSelect.multiselect.fontWeight : 'font-medium',
                dropDownIcon ? '' : 'py-2'
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
                    <div v-else><span class="inline-block">{{ defaultOption ? selectedItem.name = defaultOption : selectedItem.name = 'Select your options' }}</span></div>
                </div>

                <!-- SINGLE SELECT SECTION -->
                <div v-else class="flex items-center gap-2">
                    <div v-if="selectedItem?.icon"><img :src="selectedItem?.icon" class="h-5" alt=""></div>
                    <span>{{ defaultOption ? selectedItem.name = defaultOption : selectedItem.name = 'Select an option'  }}</span>
                </div>
                <div v-if="dropDownIcon" class="border border-l-[#d1d1d1] border-y-0 border-r-0 pl-3 py-3 ml-1">
                    <svg :class="dropdownExpand ? 'rotate-180 transition-all ease-in-out duration-200':''" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.5" stroke="#b3b3b3" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </button>
            <div 
            id="selectDropdown"
            class="w-full app-select-dropdown transition ease-out duration-300 absolute left-0 right-0  rounded-b-md z-50"
            >
                <ul id="app-dropdown-box" class="border border-gray-200 border-t-0 rounded-md rounded-t-none text-base text-gray-600 transition ease-out duration-300 bg-white divide-y divide-gray-200 shadow-xl">
                    <li class="px-4 bg-sky-50">
                        <div class="w-full flex items-center justify-between">
                            <input v-model="itemSearch" type="text" class="py-2 bg-transparent focus:outline-none block w-full" placeholder="Search option..." >
                            <div class="inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="25px" height="25px" baseProfile="basic"><linearGradient id="-2suTD81jP2ew0CFO8L6Qa" x1="31.916" x2="25.088" y1="31.849" y2="26.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b2b2b2"/><stop offset=".999"/></linearGradient><polygon fill="url(#-2suTD81jP2ew0CFO8L6Qa)" points="29.976,27 24.451,27.176 33.95,36.778 36.778,33.95"/><path fill="#b2b2b2" d="M24.313,27c-1.788,1.256-3.962,2-6.313,2c-6.075,0-11-4.925-11-11S11.925,7,18,7s11,4.925,11,11 c0,2.659-0.944,5.098-2.515,7h4.776C32.368,22.909,33,20.53,33,18c0-8.284-6.716-15-15-15S3,9.716,3,18c0,8.284,6.716,15,15,15 c4.903,0,9.243-2.363,11.98-6H24.313z"/></svg>
                            </div>
                        </div>
                    </li>
                    <li
                    @click="item?.link ? '' : selectOption(item.name, item.icon)"
                     v-for="item in listItems" 
                     :key="item.index" 
                     class="px-4 cursor-pointer flex items-center justify-between hover:bg-[#EBEDF5] transition-all duration-300 ease-in-out">
                        <div class="flex items-center gap-3 w-full">
                            <div v-if="item?.icon">
                                <img :src="item?.icon" class="h-5" alt="">
                            </div>
                            <div class="flex items-center justify-between w-full">
                                <div class="w-full">
                                    <RouterLink @click="selectedItem.name = ''" v-if="item?.link" :to="item?.link" class="block py-3">{{ item.name }}</RouterLink>
                                    <span v-else class="block py-3">{{ item.name }}</span>
                                </div>
                                <div class="transition ease-in-out duration-600 opacity-0" :class="isSelected(item.name) ? 'opacity-100 transition ease-in-out duration-600 mr-2' : 'opacity-0'">
                                    <img src="/images/check-mark.svg" class="h-4" alt="Success">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li v-if="itemSearch !== ''" class="text-red-500 p-3">No items found</li>
                </ul>
            </div>
            <div v-if="dropdownExpand" @click="closeDropdown" class="fixed inset-0 z-30 h-full w-full cursor-default transition duration-300 ease-in-out"></div>
        </div>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const { appSelect, defaultOption, multiselect, dropDownIcon } = defineProps({
    appSelect: Object,
    defaultOption: String,
    multiselect: Boolean,
    dropDownIcon: Boolean,
})

const selectedItem = ref({name:'', icon:''})
const multipleSelectedItem = ref([])
const dropdownExpand = ref(false)
const collapsedDropdown = ref(true)
const itemSearch = ref('')

// FUNCTION TO SET DROPDOWN LIST ITEMS
const listItems = computed(() => {
    if(itemSearch === '') return appSelect.dropdownItems
    else {
        return appSelect.dropdownItems.filter(item => item.name.toLowerCase().includes(itemSearch.value))
    }
})

// FUNCTION TO TOGGLING DROPDOWN ITEMS
const toggleSelect = () => {
    if(collapsedDropdown.value ===  true){
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

// FUNCTION TO SELECT AN OPTION
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

// FUNCTION TO REMOVE MULTI SELECTED ITEMS
const removeItem = (itemIndex) => {
    multipleSelectedItem.value.splice(itemIndex, 1)
    if(multipleSelectedItem.value.length === 0){
        collapsedDropdown.value = true
    }else {
        collapsedDropdown.value = false
    
    }
}

// FUNCTION TO SHOW THE CHECK MARK FOR MULTI SELECT LIST ITEMS
const isSelected = (currentItem) => {
return multipleSelectedItem.value.includes(currentItem)
}

// FUNCTION TO CLOSE DROPDOWN ITEMS CLICKING OUTSIDE THE BOX
const closeDropdown = () => {
    const appSelectDropdown = document.getElementById('selectDropdown')
        if(appSelectDropdown.style.height > '10px'){
            appSelectDropdown.style.height = '0'
            dropdownExpand.value = false
        }
}


// FUNCTION TO SET DYNAMIC CSS
const selectValues = ref(appSelect);

const getDropdownBtnClasses = () => {
    let btnClass = {}

    selectValues.value?.dropdownBtn?.width ? btnClass.width = selectValues.value.dropdownBtn.width : btnClass.width = 'w-full',
    selectValues.value?.dropdownBtn?.border ? btnClass.border = selectValues.value.dropdownBtn.border : btnClass.border = 'border border-gray-300 rounded-md',
    selectValues.value?.dropdownBtn?.padding ? btnClass.padding = selectValues.value.dropdownBtn.padding : btnClass.padding = 'px-4 py-1',
    selectValues.value?.dropdownBtn?.fontSize ? btnClass.fontSize = selectValues.value.dropdownBtn.fontSize : btnClass.fontSize = 'text-base',
    selectValues.value?.dropdownBtn?.fontWeight ? btnClass.fontWeight = selectValues.value.dropdownBtn.fontWeight : btnClass.fontWeight = 'font-medium',
    selectValues.value?.dropdownBtn?.bgColor ? btnClass.bgColor = selectValues.value.dropdownBtn.bgColor : btnClass.bgColor = 'bg-white',
    selectValues.value?.dropdownBtn?.color ? btnClass.color = selectValues.value.dropdownBtn.color : btnClass.color = 'text-gray-600',
    selectValues.value?.dropdownBtn?.customBtn ? btnClass.customBtn = selectValues.value.dropdownBtn.customBtn : btnClass.customBtn = 'text-gray-600'

    return btnClass.width + ' ' +
    btnClass.border + ' ' +
    btnClass.padding + ' ' +
    btnClass.fontSize + ' ' +
    btnClass.fontWeight + ' ' +
    btnClass.bgColor + ' ' +
    btnClass.customBtn
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