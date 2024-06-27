<template>
    <div class='w-full my-14 py-10 px-4 flex flex-col md:flex-row justify-center items-center bg-[#402E7A] bg-opacity-5 gap-6 overflow-hidden'>
      <div v-for="item in fulfillmentData" :key="item.id" class='w-full md:w-[350px] h-[450px] flex flex-col gap-4 p-4 bg-white rounded-lg'>
        <img :src="item.image" :alt="item.name" class='w-full h-[220px] object-cover rounded-lg' />
        <div class='space-y-4'>
          <span class='flex items-center gap-3'>
            <component :is="item.icon" :size="30" />
            <h1 class='text-xl font-bold text-text'>{{ item.name }}</h1>
          </span>
          <p class='font-normal'>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Truck, RefreshCw, ListTodo } from 'lucide-vue-next';
  
  const fulfillmentData = ref([
    {
      id: 1,
      name: "DTC fulfillment",
      desc: "From our warehouse to your customers around the world. With SourcExpet, you can manage your DTC fulfillment more effectively while minimizing stock risks.",
      image: "/dtc.png",
      icon: Truck,
    },
    {
      id: 2,
      name: "Crowdfunding fulfillment",
      desc: "Handle big, one-time orders from your crowdfunding success. We make sure every backer gets their order quickly and accurately.",
      image: "/croudFunding.png",
      icon: RefreshCw,
    },
    {
      id: 3,
      name: "Subscription fulfillment",
      desc: "We manage all recurring orders and make sure every box arrives on schedule, ensuring a consistent and delightful experience that keeps your customers coming back.",
      image: "/subscription.png",
      icon: ListTodo,
    },
  ]);
  
  </script>