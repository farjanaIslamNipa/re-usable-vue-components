<script setup>
import AppSelect from './AppSelect.vue';

const appSelect = {
dropdownItems: [
    {
        id: 1,
        name: 'Option one for select',
        icon: '/images/flag.png'
    },
    {
        id: 2,
        name: 'Option two for select',
        icon: '/images/flag-1.png'
    },
    {
        id: 3,
        name: 'Option three for select',
        icon: '/images/flag.png'
    },
    {
        id: 4,
        name: 'Option four for select',
        icon: '/images/flag-2.png'
    },
    {
        id: 5,
        name: 'Option five for select',
        icon: '/images/flag-3.png'
    },
    {
        id: 6,
        name: 'Option six for select',
        link: '/about-us',
        icon: '/images/flag-1.png'
    }
],
dropdownBtn: {
    width: 'w-full',
    border: 'border border-gray-300 rounded-md',
    padding: 'px-4 py-1',
    fontSize: 'text-sm',
    fontWeight: 'font-medium',
    bgColor: 'bg-white',
    color: 'text-gray-600',
    customBtn: 'custom-dropdown-btn'
},
multiselect: {
    fontSize: 'text-sm',
    fontWeight: 'font-normal',
    flexGap: 'gap-x-2 gap-y-2',
    badgeBg: 'bg-sky-100',
    badgeBorder: 'rounded-md',
    badgePadding: 'px-2 py-1.5',
    badgeColor: 'text-sky-600',
    badgeFont: 'text-xs',
    badgeFontWeight: 'font-medium',
    closeIconBg: 'bg-blue-50',
    closeIconColor: 'text-sky-500',
    closeIconBorder: 'rounded-sm',
    closeIconHeight: 'h-3.5',
    closeIconWidth: 'w-3.5',
    closeIconPadding: 'p-[2px]',
    checkMarkHeight: '16px',
    checkMarkWidth: '16px',
    checkMarkColor: '#2ac2d2',
    customMultiSelect: 'custom-multi-select-btn'
},
item: {
  itemFont: 'text-sm',
  itemColor: 'text-gray-500',
  itemFontWeight: 'font-normal',
  hoverText: 'hover:text-sky-600',
  hoverBg: '',
  itemPadding: 'px-4 py-3',
  iconHeight: 'h-5',
  iconWidth: '',
  iconRadius: ''
},
dropBox: {
  boxShadow: 'shadow-lg'
}
}
</script>

<template>
<div class="pt-20">
  <div class="max-w-[500px] mx-auto">
    <AppSelect 
    :appSelect="appSelect" 
    defaultOption="Select an Option" 
    :multiselect="true" 
    :dropDownIcon="true" 
    :search="true" />
  </div>
</div>
</template>

<style scoped>

</style>
