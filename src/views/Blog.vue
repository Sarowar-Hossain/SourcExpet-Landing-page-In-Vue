<template>
  <div class="mb-10">
    <BlogsBanner />
    <BlogsSection />
  </div>
</template>

<script>
import BlogsSection from "../components/BlogsSection.vue";
import BlogsBanner from "../components/BlogsBanner.vue";

export default {
  name: "Blog",
  components: {
    BlogsSection,
    BlogsBanner,
  },
};
</script>
