<template>
  <div class="blogs-container min-h-[60vh]">
    <div
      v-if="loading"
      class="loader animate-spin flex justify-center items-center"
    >
      <Loader class="flex justify-center items-center text-black" />
    </div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <div v-else class="blog-list">
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
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import BlogCard from "./BlogCard.vue";
import Loader from "../components/icons/Loader.vue";

export default {
  name: "BlogsSection",
  components: {
    BlogCard,
    Loader,
  },
  setup() {
    const router = useRouter();
    const blogs = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/blog/get-blogs"
        );
        blogs.value = response.data;
      } catch (err) {
        error.value =
          "An error occurred while fetching blogs. Please try again later.";
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchBlogs();
    });

    const goToBlogDetail = (id) => {
      router.push({ name: "BlogDetails", params: { id: id.toString() } });
    };

    return {
      blogs,
      loading,
      error,
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

.loader,
.error {
  text-align: center;
  font-size: 50px;
  margin-top: 50px;
}

.error {
  color: red;
}
</style>
