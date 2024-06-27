<template>
    <div class="flex flex-col justify-center items-center w-full py-10">
      <div class="p-6 md:p-10 space-y-6 flex flex-col items-center justify-center text-center">
        <h1 class="text-5xl font-bold text-pretty leading-[60px] text-center">Our Statistics</h1>
      </div>
      <div class="p-6 md:p-10 flex flex-col md:flex-row gap-8 w-full justify-center items-center">
        <div
          v-for="item in countDown"
          :key="item.id"
          class="flex w-full flex-col items-center justify-center bg-[#402E7A] bg-opacity-5 p-6 md:p-10 space-y-4 rounded-md"
        >
          <div class="flex items-center gap-1">
            <CountUp :endVal="item.amount" :duration="3" class="text-4xl font-bold text-primary" />
            <p class="text-4xl font-bold text-primary">+</p>
          </div>
          <p class="text-lg font-semibold text-text">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { CountUp } from 'vue-countup-v3';
  
  export default {
    name: 'CountDownSection',
    components: {
      CountUp,
    },
    setup() {
      const countDown = ref([
        { id: 1, title: "Trusted suppliers​", amount: 100 },
        { id: 2, title: "Happy Customers", amount: 500 },
        { id: 3, title: "Fulfilled Orders", amount: 35000 },
        { id: 4, title: "Years of Experience", amount: 5 },
      ]);
  
      return {
        countDown,
      };
    },
  };
  </script>
  
  <style scoped>
  .text-pretty {
    color: #402E7A;
  }
  
  .text-primary {
    color: #2eb5f7; 
  }
  
  .text-text {
    color: #1B1919;
  }
  </style>  