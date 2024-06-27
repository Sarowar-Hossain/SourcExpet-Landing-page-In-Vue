<template>
  <header class="w-full drop-shadow bg-white text-black sticky top-0 z-[100]">
    <div class="flex container mx-auto justify-between items-center px-5 py-3">
      <div class="w-full flex items-center justify-between">
        <router-link to="/" class="flex-shrink-0">
          <img class="w-[300px]" src="/logo-2-01.png" alt="Logo" />
        </router-link>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <router-link
            to="/services"
            class="cursor-pointer flex gap-3 items-center hover:text-[#2eb5f7]"
            active-class="text-[#2eb5f7] font-semibold"
          >
            Services
          </router-link>
          <router-link
            to="/about"
            class="cursor-pointer flex gap-3 items-center hover:text-[#2eb5f7]"
            active-class="text-[#2eb5f7] font-semibold"
          >
            About
          </router-link>
          <router-link
            to="/blog"
            class="cursor-pointer flex gap-3 items-center hover:text-[#2eb5f7]"
            active-class="text-[#2eb5f7] font-semibold"
          >
            Blog
          </router-link>
          <router-link
            to="/contact"
            class="bg-[#2eb5f7] text-white px-4 py-2 font-semibold rounded-md"
            active-class="bg-[#1d9ac5]"
          >
            Contact Us
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
