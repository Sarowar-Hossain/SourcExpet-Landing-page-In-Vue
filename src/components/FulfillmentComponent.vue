<template>
  <div
    class="container mx-auto flex flex-col md:flex-row-reverse md:h-[600px] my-20"
  >
    <div
      class="p-6 md:p-10 space-y-6 flex flex-col md:items-start justify-center h-full w-full"
    >
      <h1
        class="text-5xl font-bold text-pretty leading-[60px] text-center md:text-start"
      >
        E-commerce fulfillment
      </h1>
      <p class="text-base/7">
        Merge your purchasing and fulfillment into a streamlined process. From
        DTC to crowdfunding and subscription orders, we handle all your
        fulfillment needs in one place, so you can focus on what you do best -
        growing your business.
      </p>

      <div class="w-full h-full inline md:hidden">
        <img
          src="/fulfilment.png"
          loading="lazy"
          alt=""
          class="w-full rounded-lg h-full object-cover"
        />
      </div>

      <button
        @click="goToContactUs"
        class="border font-medium px-6 py-2 bg-[#2eb5f7] text-white border-none rounded-md"
      >
        Contact Us
      </button>
    </div>
    <div class="p-6 md:p-10 w-full h-full hidden md:inline">
      <img
        src="/fulfilment.png"
        loading="lazy"
        alt=""
        class="w-full rounded-lg h-full object-cover"
      />
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "FulfillmentComponent",
  setup() {
    const router = useRouter();

    const goToContactUs = () => {
      router.push("/contact");
    };

    return {
      goToContactUs,
    };
  },
};
</script>
