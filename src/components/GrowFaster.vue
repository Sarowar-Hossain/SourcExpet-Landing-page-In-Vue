<template>
  <div
    class="flex flex-col justify-center items-center w-full py-10 bg-[#402E7A] bg-opacity-5 p-4"
  >
    <div
      class="p-6 md:p-10 space-y-6 flex flex-col items-center justify-center text-center"
    >
      <h1 class="text-5xl font-bold text-pretty leading-[60px] text-center">
        Grow faster, worry Less
      </h1>
      <p class="text-base/7">
        Feeling overwhelmed with supplier issues, inventory management
        challenges, and long shipping times?
        <br />
        We're here to make things easier.
      </p>
    </div>
    <div
      class="p-6 md:p-10 bg-black text-white rounded-xl lg:w-[70%] flex flex-col md:flex-row gap-8"
    >
      <div
        v-for="(item, index) in GrowComponentData"
        :key="item.id"
        class="flex flex-col items-start gap-4 w-full"
      >
        <div class="w-[60px] h-[60px] flex items-center justify-center">
          <component :is="item.icon" />
        </div>
        <div class="space-y-4">
          <h1 class="text-xl font-bold">{{ item.title }}</h1>
          <p class="font-normal">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { GrowComponentData } from "../../data/GrowComponentData.js";

export default {
  name: "GrowFaster",
  data() {
    return {
      GrowComponentData,
    };
  },
};
</script>

<style scoped></style>
