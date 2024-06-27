<template>
  <div class="container mx-auto flex flex-col md:flex-row md:h-[400px]">
    <div
      class="p-6 space-y-6 flex flex-col justify-center items-center md:h-[400px] w-full"
    >
      <h1
        class="text-5xl font-bold text-pretty leading-[60px] text-center w-full md:w-1/2"
      >
        Effortless purchasing starts here
      </h1>
      <p class="text-base/7 w-full md:w-1/2 text-center">
        Take the complexity out of buying from China. SourcExpet provides
        tailored purchasing solutions, from finding reliable suppliers to
        ensuring product quality, while streamlining your operations to save
        time and energy.
      </p>
      <button
        @click="goToContactUs"
        class="border w-[250px] font-medium px-6 py-3 bg-primary text-white border-none rounded-md"
      >
        Request a quote
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "ServiceBanner",
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

<style scoped>
.text-pretty {
  color: #000000;
}

.bg-primary {
  background-color: #2eb5f7;
}
</style>
