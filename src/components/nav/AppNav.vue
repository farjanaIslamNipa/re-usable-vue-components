<template>
<!-- 
  KEYWORDS TO FIND SECTIONS EASILY 

  LOGO AND HAMBURGER SECTION
  LOGO SECTION
  HAMBURGER SECTION
  NAV ITEMS SECTION
  COLLAPSIBLE SECTION LOGO
  CLOSE BUTTON OF COLLAPSIBLE SECTION
  NAV LINK SECTION
  SPECIAL LINKS SECTION
  LANGUAGE SECTION

-->
  <div id="nav-height" :class="sticky ? 'fixed top-0 w-full z-50' : 'relative'">
    <div 
    class="z-50" 
    :class="
    navItems?.navBg ? navItems.navBg : 'bg-white', 
    navItems?.navPadding ? navItems.navPadding : 'py-4 md:py-6 px-4 md:px-10 lg:px-[60px] xl:px-[100px] 2xl:px-[200px]', 
    (hasBorder ? (navItems.bottomBorder ? navItems?.bottomBorder : 'border-b-2 border-gray-100') : ''), 
    (hasShadow ? (`${navItems?.bottomShadow ? navItems.bottomShadow : 'shadow-md'} border-none`) : ''),
    navItems.customClass?.customNav ? navItems.customClass.customNav : ''
    ">
      <div class="flex items-center">

    <!-- LOGO AND HAMBURGER SECTION STARTS -->
        <div class="w-full" :class="screenSize === mediaScreen ? 'md:w-[11%]' : 'lg:w-[10%]'">
          <div class="flex justify-between items-center">
          <!-- LOGO SECTION -->
            <div>
              <router-link to="/" >
                <img class="inline-block" :class="
                      navItems.logoHeight ? navItems.logoHeight : 'h-10',
                      navItems.logoWidth ? navItems.logoWidth : 'w-auto',
                      navItems.customClass?.customLogo ? navItems.customClass?.customLogo : ''"
                      :src="navItems.logoSrc ? navItems.logoSrc : '/images/logo.svg'"
                      :alt="navItems.logoSlt ? navItems.logoSlt : 'Jatri Logo'
                      "/>
              </router-link>
            </div>

            <!-- HAMBURGER SECTION -->
            <div class="-mr-2 -my-2" :class="screenSize === mediaScreen ? 'md:hidden' : 'lg:hidden'">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                :class="navItems.customClass?.customHamburgerIcon ? navItems.customClass?.customHamburgerIcon : ''"
                @click="openNav">
                <span class="sr-only">Open menu</span>
                <img v-if="navItems?.hamburgerIcon" 
                    :class="navItems?.hamIconHeight ? navItems?.hamIconHeight : 'h-5', 
                      navItems?.hamIconWidth ? navItems?.hamIconWidth : 'w-5'" 
                      :src="navItems?.hamburgerIcon" alt="Jatri Menu">
                <svg v-else
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
    <!-- LOGO AND HAMBURGER SECTION ENDS -->

    <!-- NAV ITEMS SECTION STARTS -->
        <div 
          id="nav-items" 
          @click="closeSideNav" 
          class="bg-black/50" 
          :class="
            screenSize === mediaScreen ? 'md-nav-item-container md-full-width' : 'nav-item-container full-width',
            expandFrom === 'right' ? 'right-nav' : 'left-nav',
            navItems?.navBg ? `lg:${navItems.navBg}` : 'lg:bg-white'
            " 
          >
          <div 
          @click="preventClosing" 
          class="py-8 w-[70%] sm:w-[60%]" 
          :class="
          screenSize === mediaScreen ? 'h-screen md:h-auto' : ' h-screen lg:h-auto',
          expandFrom === 'right' ? 'ml-auto' : '',
          navItems?.smallNavBg ? `${navItems.smallNavBg}` : 'bg-white',
          screenSize === mediaScreen ? `md:${navItems.smallNavBg ? navItems.smallNavBg : 'bg-white'} md:w-full md:py-0` : `lg:${navItems.smallNavBg} lg:py-0 md:w-[40%] lg:w-full`
          ">
            <div class="block" :class="screenSize === mediaScreen ? 'md:hidden' : 'lg:hidden'">
              <div class="flex justify-between">

              <!-- COLLAPSIBLE SECTION LOGO -->
                <div class="pl-8 pb-6">
                  <router-link to="/">
                    <img :class="
                    navItems?.logoHeight ? navItems?.logoHeight : 'h-10', 
                    navItems?.logoWidth ? navItems?.logoWidth : 'w-auto',
                    navItems.customClass?.customLogo ? navItems.customClass?.customLogo : ''" 
                    :src="navItems.logoSrc ? navItems.logoSrc : '/images/logo.png'" 
                    :alt="navItems.logoSlt ? navItems.logoSlt : 'Jatri Logo'"/>
                  </router-link>
                </div>

                <!-- CLOSE BUTTON OF COLLAPSIBLE SECTION -->
                <div class="absolute right-4 md:right-9 top-6 md:top-7">
                  <button
                    type="button"
                    class="bg-white rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                    :class="navItems?.closeIcon ? 'p-2' : 'p-1', navItems.customClass?.customCloseIcon ? navItems.customClass?.customCloseIcon : ''"
                    @click="closeSideNav"
                  >
                    <span class="sr-only">Close menu</span>
                    <img v-if="navItems?.closeIcon" 
                    :class="navItems?.closeIconHeight ? navItems?.closeIconHeight : 'h-4', 
                      navItems.closeIconWidth ? navItems?.closeIconWidth : 'w-4'" 
                      :src="navItems?.closeIcon" alt="Jatri Menu">
                    <svg
                      v-else
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div 
            class="items-center pl-8 xl:pl-0" 
            :class="
            screenSize === mediaScreen ? 'md:flex' : 'lg:flex',
            (navItems?.languages || navItems?.specialLinkOne || navItems?.specialLinkTwo) ? 'justify-between' : 'justify-end'
            ">
            <!-- NAV LINK SECTION -->
              <nav class="space-y-3 space-x-0 xl:space-x-10" :class="screenSize === mediaScreen ? 'md:flex md:space-x-6 md:space-y-0' : 'lg:flex lg:space-x-6 lg:space-y-0'">
                <router-link 
                  v-for="navLink in navItems?.navLinks" 
                  :key="navLink.id" 
                  :to="navLink.link" 
                  @click="closeSideNav" 
                  :class="
                  navItems.linkClasses?.fontSize ? navItems.linkClasses.fontSize : 'text-base', 
                  navItems.linkClasses?.fontWeight ? navItems.linkClasses.fontWeight : 'font-medium', 
                  navItems.linkClasses?.color ? navItems.linkClasses.color : 'text-gray-800', 
                  screenSize === mediaScreen ? 'md:inline-block': 'lg:inline-block', 
                  navItems.linkClasses?.hoverColor, 
                  navItems.linkClasses?.customClass
                  "
                  class="transform duration-200 ease-out block"
                  :active-class="navItems?.linkClasses?.activeClass"
                  >
                  {{ navLink?.name }}
                </router-link>
              </nav>

              <!-- SPECIAL LINKS SECTION -->
              <div v-if="navItems?.languages || navItems?.specialLinkOne || navItems?.specialLinkTwo">
                <div class="gap-x-0 md:gap-x-3 xl:gap-x-6 items-center" :class="screenSize === mediaScreen ? 'md:flex' : 'lg:flex'">

                <!-- LANGUAGE SECTION STARTS -->
                  <div v-if="navItems?.languages" class="relative inline-block z-50 text-left my-4 lg:my-0">
                    <div>
                      <button
                          @click="openLang = !openLang"
                          type="button"
                          class="flex items-center gap-2 text-sm font-medium focus:outline-none"
                          id="menu-button"
                          aria-expanded="true"
                          aria-haspopup="true"
                      >
                        <span class="capitalize">{{ selectedLanguage ? selectedLanguage : 'English' }}</span>
                        <div><img src="/images/bottom-arrow.svg" alt="" /></div>
                      </button>
                    </div>
                    <div 
                        id="language-dropdown"
                        v-if="openLang"
                        :class="
                        navItems.languages.class?.position, 
                        navItems.languages.class?.left, 
                        navItems.languages.class?.zIndex, 
                        navItems.languages.class?.origin, 
                        navItems.languages.class?.border, 
                        navItems.languages.class?.borderRadius, 
                        navItems.languages.class?.focus, 
                        navItems.languages.class?.margin, 
                        navItems.languages.class?.width, 
                        navItems.languages.class?.backgroundColor, 
                        navItems.languages.class?.customClass"
                        class="custom-shadow"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabindex="-1"
                    >
                      <router-link v-for="language in navItems.languages?.lang" :key="language.id" :to="language?.link ? language?.link : '#'" class="language-item">
                        <div @click="selectLanguage(language?.name)" class="px-3 transition ease-out duration-200 cursor-pointer">
                          <span class="border-b tracking-widest block py-3 text-sm capitalize" :class="language?.customClass">{{ language?.name }}</span>
                        </div>
                      </router-link>
                    </div>
                  </div>
                <!-- LANGUAGE SECTION STARTS -->

                  <div v-if="navItems?.specialLinkOne" class="mb-3 lg:mb-0">
                    <a 
                    :href="navItems.specialLinkOne?.link" 
                    target="_blank" 
                    class="flex justify-center items-center text-base leading-6 font-medium capitalize" 
                    :class="navItems.specialLinkOne?.class, navItems.customClass?.customSpecialLinkOne">
                    <div class="flex gap-x-2 items-center">
                      <img v-if="navItems.specialLinkOne?.icon" :src="navItems.specialLinkOne.icon" :alt="navItems.specialLinkOne?.name">
                      <span>{{ navItems.specialLinkOne?.name }}</span>
                    </div>
                    </a>
                  </div>
                  <div v-if="navItems?.specialLinkTwo">
                    <a 
                    :href="navItems.specialLinkTwo.link" 
                     target="_blank" 
                     class="flex justify-center items-center text-base leading-6 font-medium capitalize" 
                    :class="navItems.specialLinkTwo?.class, navItems.customClass?.customSpecialLinkTwo">
                      <div class="flex gap-x-2">
                        <img v-if="navItems.specialLinkTwo?.icon" :src="navItems.specialLinkTwo?.icon" :alt="navItems.specialLinkTwo?.name">
                        <span>{{ navItems.specialLinkTwo?.name }}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="openLang" @click="openLang = false"
        class="fixed inset-0 z-30 h-full w-full cursor-default transition duration-300 ease-in-out">
  </div>
  </div>
  <div v-if="sticky" id="adjust-spacing"></div>
</template>

<script setup>
import { ref } from 'vue';

const { navItems, fromLeft, expandFrom, border, shadow, mediaScreen, sticky, webLanguage, hasBorder, hasShadow } = defineProps({
  navItems: Object,
  webLanguage: String,
  fromLeft: Boolean,
  expandFrom: String,
  border: Boolean,
  shadow: Boolean,
  mediaScreen: String,
  sticky: Boolean,
  hasBorder: Boolean,
  hasShadow: Boolean
})

const openLang = ref(false)
const selectedLanguage = ref(webLanguage)
const screenSize = ref('md')

const openNav = () => {
      const sideNav = document.getElementById("nav-items");
      sideNav.style.width = "100%";
    }

const preventClosing = (event) => {
  event.stopPropagation();
}

const closeSideNav = () =>{
      const sideNav = document.getElementById("nav-items");
      if(sideNav.style.width === "100%") {sideNav.style.width = "0" }
  }

const selectLanguage = (name) => {
  selectedLanguage.value = name
  openLang.value = false
}

window.onload = function() {
if(sticky === true){
    const navHeight = document.getElementById('nav-height').getBoundingClientRect().height
    document.getElementById('adjust-spacing').style.height = navHeight + 'px'
  }
};
</script>

<style scoped>
.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
}

.language-item:last-child div span{
  border-bottom: none !important;
}

@media(min-width:1024px){
 .full-width{
  width: 90% !important;
  height: auto;
 }
}
@media(max-width:1023px){
  .nav-item-container{
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 9999999;
    top: 0;
    overflow-x: hidden;
    transition: 0.3s;
    white-space: nowrap;
  }
  .left-nav{
    left: 0;
  }
  .right-nav{
    right: 0;
  }
}

@media(min-width:768px){
 .md-full-width{
  width: 89% !important;
  height: auto;
 }

}
@media(max-width:767px){
  .md-nav-item-container{
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 999999;
    top: 0;
    overflow-x: hidden;
    transition: 0.3s;
    white-space: nowrap;
  }
}

</style>