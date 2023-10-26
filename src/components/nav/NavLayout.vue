<script setup>
import AppNav from './AppNav.vue';

const navItems = {
// Nav link options
    navLinks: [
    {
      id:1,
      name:'Home',
      link:'/',
      icon:'',
    },
    {
      id:2,
      name:'About us',
      link:'/about-us',
      icon:'',
    },
    {
      id:3,
      name:'Career',
      link:'/career',
      icon:'',
    },
    {
      id:4,
      name:'Contact us',
      link:'/contact-us',
      icon:'',
    },
    ],
    linkClasses:{
        fontSize:'text-base',
        fontWeight:'font-medium',
        color:'text-gray-800',
        display:'block lg:inline-block',
        hoverColor:'hover:text-[#f04935]',
        activeClass:'active-nav',
        customClass:'menu-link'
    },

//  General options
    navBg:'bg-white',
    smallNavBg:'bg-white',
    navPadding: 'py-4 md:py-6 px-4 md:px-10 lg:px-[60px] xl:px-[100px] 2xl:px-[200px]',
    bottomBorder: 'border-b-2 border-gray-100',
    bottomShadow: 'shadow-md',
    logoSrc: '/images/logo.svg',
    logoAlt: 'Jatri Logo',
    logoHeight: 'h-10',
    logoWidth: 'w-auto',
    hamburgerIcon:'/images/hamburger-icon.svg',
    hamIconHeight: 'h-5',
    hamIconWidth: 'w-5',
    closeIcon: '/images/close-icon.svg',
    closeIconHeight: 'h-4',
    closeIconWidth: 'w-4',

//  Language Options
    languages: {
        lang:[
        {
          id:1,
          name:'English',
          customClass:'custom-language',
          link:'#'
        },
        {
          id:2,
          name:'বাংলা',
          customClass:'custom-language',
          link:'#'
        }
        ],
        class: {
        position: 'absolute',
        left:  'left-0', 
        zIndex: 'z-10', 
        width: 'min-w-[120px]',
        origin: 'origin-top-right',
        border: '',
        borderRadius: 'rounded-md',
        backgroundColor: 'bg-white',
        focus: 'focus:outline-none',
        margin: 'mt-6',
        customClass: 'custom-dropdown'
        }
  },

//   Special Link Options
    specialLinkOne: {
        name:'Rental', 
        icon:'/images/car-svg.svg', 
        link:'https://rental.jatri.co/',
        class: 'rounded-full border border-[#EDEDED] h-[46px] w-[117px]'
    },
    specialLinkTwo: {
        name:'Ticket', 
        icon:'/images/ticket.svg', 
        link:'https://rental.jatri.co/',
        class: 'bg-[#f04935] text-white rounded-full border border-[#EDEDED] h-[46px] w-[117px]'
    },

    // Custom classes for edit
    customClass:{
        customNav:'custom-nav',
        customLogo: 'custom-logo',
        customHamburgerIcon: 'custom-hamburger-icon',
        customCloseIcon: 'custom-close-icon',
        customSpecialLinkOne:'custom-special-link-one',
        customSpecialLinkTwo:'custom-special-link-two',
    }
}
</script>

<template>
  <!-- 
  INSTRUCTIONS TO CUSTOMIZE
  # Use 'webLanguage' as a props to set default language name
  # Use 'fromLeft' to open small device navbar from left and the props value is boolean
  # Use 'fromRight' to open small device navbar from right and the props value is boolean
  # Use 'sticky' to make the navbar sticky and the props value is boolean
  # Use 'mediaScreen' to handle small device navbar starting point and the value is "md", "lg"
  -->
  <AppNav 
  :navItems="navItems"
   webLanguage="English" 
   expandFrom="left" 
  :hasBorder="false" 
  :hasShadow="true" 
  :sticky="true"
   mediaScreen="lg"
  />
</template>

<style>
.active-nav{
  color: #f04935 !important;
  font-weight: 700 !important;
}
</style>
