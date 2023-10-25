<template>
     <div>
          <AppAccordion 
               :accordionData="accordionData" 
               @toggleOpen="toggleOpen"
          />
     </div>
</template>

<script setup>
import AppAccordion from '../components/AppAccordion.vue';

const accordionData = {
     content: [
          {
               heading: "Payment details- bKash, Nagad, & Bank Cards",
               details: `The Payment can be done through Nagad, bKash, visa cards or master cards.
                         <ul class='list-disc ml-5'>
                         <li class='mt-2'>If a customer has sent payment to Jatri.co but the e-ticket is not confirmed or generated, i.e., there is no transaction ID or tickets booked/reserved by the mobile number of the mobile payment account, he can claim for refund in the similar procedure as above, without the ticket number. Such refunds will be given 7 business days (excluding Friday and Saturday) AFTER the event/trip has taken place. This is applicable for eid times also.</li>
                         <li class='mt-2'>If a customer has made an excess or less payment for a ticket accidentally, he is eligible for refund but he must claim for the refund within 24 hours of making the payment.</li>
                         <li class='mt-2'>If a customer has reserved a ticket and made a payment, however, for some reason, the ticket purchase process was not successful and a ticket was not issued, a customer can claim refund as per the policy above. Ticket number is not required, but mobile # used for booking and other information are required. For refunds through mobile payment gateways (e.g. bKash), a fee is charged by the mobile payment company which will be deducted from the eligible refund amount. Similar conditions will apply if the bank charges any such additional fee.</li>
                         <li class='mt-2'>In case of card payments, the last 4 digits of the card type of card is also needed. It is to be noted that for reasons beyond Jatri.co’s control, card payment may sometimes require time to post on the payment gateway’s panel which Jatri.co uses to verify payment. Jatri.co can only verify payment after it has been posted on the said panel.</li>
                         <li class='mt-2'>In case of BKash payments, a full mobile number will be required. It is to be noted that for reasons beyond Jatri.co’s control, payment may require some time to post on the payment gateway’s panel which Jatri.co uses to verify payment. Jatri.co can only verify payment after it has been posted on the said panel.</li>
                         </ul>
                         `
          },
          {
               heading:  "How to buy Tickets via website?",
               details:  `The easiest way to buy bus tickets online through Jatri is at your door now. 
                         <ul class='list-disc ml-5'>
                         <li class='mt-2'>First, you have to go the Jatri website: <a href='https://ticket.jatri.co/' class='text-blue-500 underline'>https://ticket.jatri.co/</a></li>
                         <li class='mt-2'>Secondly, you will have to select your location, where to go, which kind of bus you need and the date of your journey.</li>
                         <li class='mt-2'>Then click the <span class='text-blackPrimary font-bold'>“book now”</span> option and provide all the information.</li>
                         <li class='mt-2'>After making the payment process you will get your tickets.</li>
                         </ul>
                         `
          },
          {
               heading:  "Customer Service",
               details:  `The customer service team of Jatri services Limited is open from 7am to 11:59pm. For any kind of help or queries or questions, you can call the customer service number 09642080808.`
          },
          {
               heading:  "Ticket Cancellation Procedures'",
               details:  `If you want to make a cancellation to your booking ticket, you must follow some rules: 
                         <ul class='list-decimal ml-5'>
                         <li class='mt-2'>First, you need to go to the search option. You need to add your phone number to search for your ticket.</li>
                         <li class='mt-2'>Click at the cancellation option. Your request will be submitted to our team.</li>
                         <li class='mt-2'>Your money will be refunded with following our refund & cancellation policy.</li>
                         </ul>
                         <br>There are few cancellation policies: <br>
                         <ul class='list-disc ml-5'>
                         <li class='mt-2'><span class='text-blackPrimary font-bold'>Auto cancellation</span> will happen if the customer fails to report at the reporting station before the departure time.</li>
                         <li class='mt-2'>If the customer <span class='text-blackPrimary font-bold'>fails to pay</span> the full amount that mentioned in the screen will not get the activated tickets.</li>
                         <li class='mt-2'>To be eligible for refund, customers need to cancel the ticket from jatri.co before the applicable time before the departure. And must report the cancelation to the support center (i.e Call 09642080808 or email to support@jatri.co) of Jatri.co</li>
                         <li class='mt-2'>Only <span class='text-blackPrimary font-bold'>during Eid time</span> , customers are eligible for refund ONLY if the operator cancels the trip and cannot provide an alternative arrangement.<span class='text-blackPrimary font-bold'> (Note:</span> Terms and conditions of refund policy might update or change from time to time without any notice)</li>
                         <li class='mt-2'><span class='text-blackPrimary font-bold'>For mobile payments</span>, it is the responsibility of the customer to input transaction ID (if applicable), PIN, OTP properly within time to confirm his ticket by himself.</li>
                         <li class='mt-2'>Jatri.co sometimes does the verification for the customer as a courtesy, but it is not jatri.co’s responsibility or service promise.Jatri.co sometimes does the verification for the customer as a courtesy, but it is not jatri.co’s responsibility or service promise.</li>
                         <li class='mt-2'>Tickets will be automatically canceled if the customer does not confirm payment within 30 minutes.</li>
                         <li class='mt-2'>For mobile payments customers must complete payment and also verify transactions within this stipulated time.</li>
                         <li class='mt-2'>During Eid sales month, Jatri.co will not do any verification on behalf of the customers.</li>
                         </ul>
                         `
          }
     ],
     // CLASSES WE CAN USE IF NEEDED
     classes: {
          accordionBg: 'bg-white',
          accordionPadding: 'p-4',
          accordionShadow: 'shadow-md',
          accordionBorder: 'rounded-sm',
          accordionMargin: 'mb-3',
          headingFont: 'text-base font-medium',
          headingColor: 'text-gray-800',
          iconHeight: 'h-4',
          iconWidth: 'w-4',
          iconColor: '#b3b3b3',
          detailsPadding: 'p-6',
          detailsMargin: 'mt-3',
          detailsFont: 'text-sm font-normal',
          detailsFontAlign: 'text-justify',
          detailsBg: 'bg-gray-100',
          detailsBorder: 'rounded-md',
          customAccordion: 'custom-accordion',
          customContent: 'custom-content',
     }
}
</script>
<style scoped>

</style>