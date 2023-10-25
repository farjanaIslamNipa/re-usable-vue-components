<script setup>
import AppTab from './components/appTab.vue'
import {reactive} from "@vue/reactivity";
const propsArray = reactive({
  "reviews":[
    {
      reviewerName:'Al imran',
      reviewerDesignation:'Jatri user1',
      message:"“My company uses Jatri Business to plan our office!”"
    },
    {
      reviewerName:'Al imran2',
      reviewerDesignation:'Jatri user2',
      message:"“My company uses Jatri Business to plan our office pick-and-drop and corporate getaways.”"
    },
    {
      reviewerName:'Al imran3',
      reviewerDesignation:'Jatri user3',
      message:"“My company uses Jatri Business to plan our office pick-and-drop and corporate getaways. The service is seamless and quick- just the solution we needed for our company!”"
    },
  ],
  "buttons": [
    "button1", "button2", "button3"
  ]
})
    const propsButton = reactive()
</script>

<template>
  <div>
    <AppTab :options="propsArray"
    />
  </div>
</template>