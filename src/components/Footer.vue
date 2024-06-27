<template>
    <div class="min-h-[30vh] bg-[#F8F8F8] px-5 py-8 overflow-auto w-full">
      <div class="container mx-auto justify-between items-start md:flex gap-6">
        <div>
          <img
            src="/logo-2-01.png"
            width="300"
            height="80"
            alt="Footer logo"
            class="w-[250px] md:hidden cursor-pointer"
            @click="navigateTo('/')"
          />
          <img
            src="/SourceExpet-logo.png"
            width="180"
            height="80"
            alt="Footer logo"
            class="hidden md:block w-[180px] mt-6 cursor-pointer"
            @click="navigateTo('/')"
          />
        </div>
        <div class="md:mx-4 mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-24">
          <div class="flex flex-col gap-3">
            <p class="text-lg font-semibold">Company</p>
            <router-link
              v-for="(com, index) in FooterData.company"
              :key="index"
              :to="com.href"
              class="text-[15px]"
            >
              {{ com.label }}
            </router-link>
          </div>
          <div class="flex flex-col gap-3">
            <p class="text-lg font-semibold">Service</p>
            <router-link
              v-for="(com, index) in FooterData.Services"
              :key="index"
              :to="com.href"
              class="text-[15px]"
            >
              {{ com.label }}
            </router-link>
          </div>
          <div class="flex flex-col gap-3">
            <p class="text-lg font-semibold">Contact</p>
            <div v-for="(com, index) in FooterData.contact" :key="index" class="flex gap-2">
              <img :src="com.icon" height="20" width="20" :alt="com.label" />
              <a :href="com.href" target="_blank" class="text-nowrap">
                {{ com.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto mt-16 justify-between md:flex">
        <div class="ml-4 md:ml-0 flex justify-around items-center md:gap-10">
          <router-link to="/">Terms & Conditions</router-link>
          <router-link to="/">Privacy Policy</router-link>
        </div>
        <div class="ml-4 mt-5 flex items-center justify-center lg:justify-end gap-5 md:ml-0 md:mt-0 md:gap-8">
          <a v-for="(data, index) in FooterData.social" :key="index" :href="data.href">
            <img :src="data.icon" :alt="data.label" :height="data.height" :width="data.width" />
          </a>
        </div>
        <div class="my-4 flex justify-around items-center md:gap-10 md:hidden">
          <p>© 2023 SourcExpet</p>
        </div>
      </div>
      <div class="my-4 hidden md:flex justify-around items-center md:gap-10">
        <p>© 2023 SourcExpet</p>
      </div>
    </div>
  </template>
  
  <script>
  import { FooterData } from '../../data/FooterData.js';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Footer',
    data() {
      return {
        FooterData,
      };
    },
    methods: {
      navigateTo(path) {
        this.$router.push(path);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>