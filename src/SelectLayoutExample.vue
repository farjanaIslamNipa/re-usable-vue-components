<script setup>
import AppSelect from './components/AppSelect.vue';
const appSelect = {
dropdownItems: [
    {
        id: 1,
        name: 'Option one for select',
        link: '',
        icon: '/images/flag.png'
    },
    {
        id: 2,
        name: 'Option two for select',
        link: '/about-us',
        icon: '/images/flag-1.png'
    },
    {
        id: 3,
        name: 'Option three for select',
        link: '',
        icon: '/images/flag.png'
    },
    {
        id: 4,
        name: 'Option four for select',
        link: '',
        icon: '/images/flag-2.png'
    },
    {
        id: 5,
        name: 'Option five for select',
        link: '',
        icon: '/images/flag-3.png'
    },
    {
        id: 6,
        name: 'Option six for select',
        link: '',
        icon: '/images/flag-1.png'
    },
],
dropdownBtn: {
    width: 'w-full',
    border: 'border border-gray-300 rounded-md',
    padding: 'px-4 py-1',
    fontSize: 'text-base',
    fontWeight: 'font-medium',
    bgColor: 'bg-white',
    color: 'text-gray-600',
    customBtn: 'custom-dropdown-btn'
},
multiselect: {
    color: 'text-gray-600',
    fontSize: 'text-base',
    fontWeight: 'font-medium',
    flexGap: 'gap-x-2 gap-y-2',
    badgeBg: 'bg-sky-100',
    badgeBorder: 'rounded-md',
    badgePadding: 'px-2 py-1.5',
    badgeColor: 'text-sky-600',
    badgeFont: 'text-sm',
    badgeFontWeight: 'font-medium',
    closeIconBg: 'bg-blue-50',
    closeIconColor: 'text-sky-500',
    closeIconBorder: 'rounded-sm',
    closeIconHeight: 'h-3.5',
    closeIconWidth: 'w-3.5',
    closeIconPadding: 'p-[2px]',
    customMultiSelect: 'custom-multi-select-btn'
},

}


</script>
<template>
    <div class="">
        <AppSelect :appSelect="appSelect" defaultOption="Select an option" :multiselect="true" />
    </div>
</template>

<style scoped>

</style>