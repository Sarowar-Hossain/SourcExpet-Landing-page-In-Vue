<template>
  <div class="container mx-auto flex flex-col md:flex-row md:h-[600px]">
    <div
      class="p-6 md:p-10 space-y-6 flex flex-col md:items-start justify-center h-full w-full"
    >
      <h1
        class="text-5xl font-bold text-pretty leading-[60px] text-center md:text-start"
      >
        Supercharge your supply chain
      </h1>
      <p class="text-base/7">
        Streamline your eCommerce operations with SourcExpet comprehensive
        purchasing and direct from China fulfillment solutions, designed to
        empower Shopify merchants to scale with confidence.
      </p>
      <button
        @click="navigateTo('/contact-us')"
        class="border font-medium px-6 py-2 bg-[#2eb5f7] text-white border-none rounded-md"
      >
        Request a quote
      </button>
    </div>
    <div class="p-6 md:p-10 w-full h-full">
      <img
        src="/home-banner.jpg"
        loading="lazy"
        alt=""
        class="w-full rounded-lg h-full object-cover"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>

</style>
