<template>
  <div class="container mx-auto flex flex-col md:flex-row md:h-[250px]">
    <div
      class="p-6 space-y-6 flex flex-col justify-center items-center md:h-[250px] w-full relative"
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
      <button
        @click="goToCreateBlogPage"
        class="absolute top-0 left-[12%] font-medium underline cursor-pointer border border-[#2eb5f7] px-4 py-2 rounded-md bg-[#2eb5f7] text-white"
      >
        Write a Blog
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "BlogsBanner",
  setup() {
    const router = useRouter();
    const goToCreateBlogPage = () => {
      router.push("/create-blog");
    };
    return {
      goToCreateBlogPage,
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
