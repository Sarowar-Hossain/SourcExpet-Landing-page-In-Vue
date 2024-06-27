<template>
    <div class="service-purchasing-flow">
      <div v-for="item in data" :key="item.id" class="service-card">
        <img :src="item.image" :alt="item.name" class="service-image">
        <div class="service-content">
          <span class="service-title">
            <component :is="item.icon" :size="30" />
            <h2>{{ item.name }}</h2>
          </span>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import OrderTracking from './icons/OrderTracking.vue'
  import Shopping from './icons/Shopping.vue'
  import InspectionPanel from './icons/InspectionPanel.vue'
  
  export default {
    name: 'ServicePurchasingFlow',
    components: {
      OrderTracking,
      Shopping,
      InspectionPanel
    },
    setup() {
      const data = ref([
        {
          id: 1,
          name: "Sourcing",
          desc: "Dive into the extensive Chinese supplier market with our support. We handle the hard parts, perform detailed audits, and use our local connections to find the ideal supplier for you.",
          image: "/sourcing.png",
          icon: OrderTracking,
        },
        {
          id: 2,
          name: "Purchasing",
          desc: "We manage your orders with suppliers from crafting purchase plans to tracking every detail, ensuring a seamless purchasing process.",
          image: "/purchasing.png",
          icon: Shopping,
        },
        {
          id: 3,
          name: "Inspection",
          desc: "Quality is our first priority. We conduct meticulous inspections to identify and resolve issues early on, keeping your standards high and your customers happy.",
          image: "/inspection.png",
          icon: InspectionPanel,
        },
      ])
  
      return {
        data
      }
    }
  }
  </script>
  
  <style scoped>
  .service-purchasing-flow {
    @apply w-full my-14 py-10 px-4 flex flex-col md:flex-row justify-center items-center bg-[#402E7A] bg-opacity-5 gap-6 overflow-hidden;
  }
  
  .service-card {
    @apply w-full md:w-[350px] h-[450px] flex flex-col gap-4 p-4 bg-white rounded-lg;
  }
  
  .service-image {
    @apply w-full h-[220px] object-cover rounded-lg;
  }
  
  .service-content {
    @apply space-y-4;
  }
  
  .service-title {
    @apply flex items-center gap-3;
  }
  
  .service-title h2 {
    @apply text-xl font-bold text-[#000000];
  }
  </style>