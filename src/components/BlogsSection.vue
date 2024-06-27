<template>
  <div class="blogs-container">
    <div class="blog-list">
      <BlogCard
        v-for="blog in blogs"
        :key="blog.id"
        :blog="blog"
        @click="goToBlogDetail(blog.id)"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import BlogCard from "./BlogCard.vue";

import { BlogData } from "../../data/BlogData.js";
export default {
  name: "BlogsSection",
  components: {
    BlogCard,
  },
  setup() {
    const router = useRouter();
    const blogs = ref(BlogData);

    const goToBlogDetail = (id) => {
      router.push({ name: "BlogDetails", params: { id: id.toString() } });
    };

    return {
      blogs,
      goToBlogDetail,
    };
  },
};
</script>

<style scoped>
.blogs-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.blog-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
}
</style>
