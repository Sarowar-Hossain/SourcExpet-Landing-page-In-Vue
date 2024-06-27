<template>
  <div>
    <div v-if="loading" class="loader-container">
      <Loader class="flex justify-center items-center text-black" />
    </div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <div v-else-if="blog" class="blog-detail">
      <img :src="blog.coverImage" :alt="blog.title" class="blog-image" />
      <h1 class="text-3xl font-semibold my-4">{{ blog.title }}</h1>
      <p class="blog-date">{{ formatDate(blog.date) }}</p>
      <div class="blog-content text-lg">{{ blog.desc }}</div>
    </div>
    <Newsletter />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Newsletter from "../components/NewsLetter.vue";
import Loader from "../components/icons/Loader.vue";

export default {
  name: "BlogDetail",
  components: {
    Newsletter,
    Loader,
  },
  setup() {
    const route = useRoute();
    const blog = ref(null);
    const loading = ref(true);
    const error = ref(null);

    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const fetchBlog = async (id) => {
      try {
        const response = await axios.get(`http://localhost:8080/api/blog/${id}`);
        blog.value = response.data;
      } catch (err) {
        error.value = "An error occurred while fetching the blog. Please try again later.";
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
      const blogId = route.params.id;
      fetchBlog(blogId);
    });

    return {
      blog,
      loading,
      error,
      formatDate,
    };
  },
};
</script>

<style scoped>
.blog-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.blog-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

.blog-date {
  color: #666;
  margin-bottom: 20px;
}

.blog-content {
  line-height: 1.6;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader {
  text-align: center;
  font-size: 18px;
  margin-top: 50px;
}

.error {
  text-align: center;
  font-size: 18px;
  margin-top: 50px;
  color: red;
}
</style>