<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-5xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(item, index) in FAQData" :key="index" class="bg-gray-100 rounded-lg p-4">
          <div class="flex items-center justify-between cursor-pointer" @click="toggleAnswer(index)">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
              </svg>
              <h2 class="text-lg font-medium">{{ item.question }}</h2>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" :class="{ 'transform rotate-45': openIndex === index }" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div v-if="openIndex === index" class="mt-2">
            <p class="text-gray-600">{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { FAQData } from '../../data/FAQData.js';
  
  export default {
    name: 'FAQSection',
    setup() {
      const openIndex = ref(null);
  
      const toggleAnswer = (index) => {
        openIndex.value = openIndex.value === index ? null : index;
      };
  
      return {
        FAQData,
        openIndex,
        toggleAnswer,
      };
    },
  };
  </script>