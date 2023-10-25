<script setup>
import { onMounted } from 'vue'


onMounted(() => {
  const busOperator = document.getElementById('busOperator').getBoundingClientRect().width
  const tripNo = document.getElementById('tripNo').getBoundingClientRect().width
  const date = document.getElementById('date').getBoundingClientRect().width
  const counter = document.getElementById('counter').getBoundingClientRect().width
  const counterType = document.getElementById('counterType').getBoundingClientRect().width
  const assignedQouta = document.getElementById('assignedQouta').getBoundingClientRect().width
  const soldSeats = document.getElementById('soldSeats').getBoundingClientRect().width
  const availableSeats = document.getElementById('availableSeats').getBoundingClientRect().width
  const qoutaRelease = document.getElementById('qoutaRelease').getBoundingClientRect().width
  const action = document.getElementById('action').getBoundingClientRect().width
  const columnOne = document.getElementById('columnOne')
  const columnTwo = document.getElementById('columnTwo')
  const columnThree = document.getElementById('columnThree')
  const columnFour = document.getElementById('columnFour')
  const columnFive = document.getElementById('columnFive')
  const columnSix = document.getElementById('columnSix')
  const columnSeven = document.getElementById('columnSeven')
  const columnEight = document.getElementById('columnEight')
  const columnNine = document.getElementById('columnNine')
  const columnTen = document.getElementById('columnTen')

  columnOne.style.width = busOperator + 'px'
  columnTwo.style.width = tripNo + 'px'
  columnThree.style.width = date + 'px'
  columnFour.style.width = counter + 'px'
  columnFive.style.width = counterType + 'px'
  columnSix.style.width = assignedQouta + 'px'
  columnSeven.style.width = soldSeats + 'px'
  columnEight.style.width = availableSeats + 'px'
  columnNine.style.width = qoutaRelease + 'px'
  columnTen.style.width = action + 'px'
})

const print = () => {
  window.print()
}
</script>

<template>
  <div class="mt-28">
    <h1 class="text-center text-3xl font-medium mb-5">Qouta Sales Report</h1>
    <div class="text-center mb-4"><button @click="print" class="bg-teal-400 text-white rounded-md px-4 pt-1 pb-2">print</button></div>

    <div id="element-to-convert">
      <div class="mx-5">
        <table class="w-full text-center text-sm font-light rounded-md">
          <thead class="bg-[#4D4D4F] uppercase">
                  <tr class=" text-white">
                    <th id="busOperator" scope="col" class="px-2 py-2 bg-red-200 font-normal w-[12%]">bus operator</th>
                    <th id="tripNo" scope="col" class="px-2 py-2 bg-red-300 font-normal w-[10%]">trip/coach no</th>
                    <th id="date" scope="col" class="px-2 py-2 bg-red-400 font-normal w-[10%]">Date</th>
                    <th id="counter" scope="col" class="px-2 py-2 bg-red-500 font-normal w-[14%]">counter</th>
                    <th id="counterType" scope="col" class="px-2 py-2 bg-red-600 font-normal w-[12%]">counter type</th>
                    <th id="assignedQouta" scope="col" class="px-2 py-2 bg-red-700 font-normal w-[6%]">assigned qouta</th>
                    <th id="soldSeats" scope="col" class="px-2 py-2 bg-red-800 font-normal w-[6%]">Sold seats</th>
                    <th id="availableSeats" scope="col" class="px-2 py-2 bg-red-900 font-normal w-[6%]">available seats</th>
                    <th id="qoutaRelease" scope="col" class="px-2 py-2 bg-red-800 font-normal w-[14%]">qouta release</th>
                    <th id="action" scope="col" class="px-2 py-2 bg-red-700 font-normal w-[10%]">Action</th>
                  </tr>
                </thead>
        </table>
        <table class="text-center text-sm font-light rounded-md">
                <tbody>
                  <tr class="border-b">
                    <td id="columnOne" class="font-medium">Desh Travels</td>
                    <td class="">
                      <table class="bg-teal-200">
                        <tbody>
                          <tr class="border">
                            <td id="columnTwo" class="bg-white">lI6dFWyA</td>
                            <td class="bg-sky-500">
                              <table class="border bg-red-100" >
                                <tbody>
                                  <tr>
                                    <td id="columnThree" class="bg-teal-500 pl-4">19 July 2022</td>
                                    <td class="bg-teal-200">
                                      <table class="">
                                        <tbody>
                                          <tr>
                                            <td id="columnFour" class="bg-sky-50 pl-4">Technical Counter</td>
                                            <td id="columnFive" class="bg-sky-100 pl-4">Own</td>
                                            <td id="columnSix" class="bg-sky-200 pl-4">10</td>
                                            <td id="columnSeven" class="bg-sky-300 pl-4">6</td>
                                            <td id="columnEight" class="bg-sky-400 pl-4">4</td>
                                            <td id="columnNine" class="bg-sky-500 pl-4">Released by Alamin</td>
                                            <td id="columnTen" class="bg-sky-600 text-center"><button class="bg-blue-500 text-white rounded-md px-5 py-2">Details</button></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
      </div>
    </div>
  </div>
</template>

<style>
@media print
{    
    body{
        width: 100% !important;
    }
    .no-print, .no-print *
    {
        display: none !important;
    }
    @page { size: auto;  margin: 0mm; }
}
</style>