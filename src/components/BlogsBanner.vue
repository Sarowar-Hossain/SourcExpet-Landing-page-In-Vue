<template>
  <div class="container mx-auto flex flex-col md:flex-row md:h-[250px]">
    <div
      class="p-6 space-y-6 flex flex-col justify-center items-center md:h-[250px] w-full"
    >
      <h1
        class="text-5xl font-bold text-pretty leading-[60px] text-center w-full md:w-1/2"
      >
        Blogs about Sourcing
      </h1>
      <p class="text-base/7 w-full md:w-1/2 text-center">
        Streamline your eCommerce operations with SourcExpet comprehensive
        fulfillment services. Whether it's DTC, crowdfunding, or subscription
        orders, we've got all your fulfillment needs covered in one place.
      </p>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "BlogsBanner",
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
