<template>
  <div v-if="blog" class="blog-detail">
    <img :src="blog.coverImage" :alt="blog.title" class="blog-image" />
    <h1 class="text-3xl font-semibold my-4">{{ blog.title }}</h1>
    <p class="blog-date">{{ formatDate(blog.date) }}</p>
    <div class="blog-content text-lg">{{ blog.desc }}</div>
  </div>
  <Newsletter />
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { BlogData } from "../../data/BlogData.js";
import Newsletter from "../components/NewsLetter.vue";

export default {
  name: "BlogDetail",
  setup() {
    const route = useRoute();
    const blog = ref(null);

    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    onMounted(() => {
      const blogId = parseInt(route.params.id);
      blog.value = BlogData.find((b) => b.id === blogId);
    });

    return {
      blog,
      formatDate,
    };
  },
  components: {
    Newsletter,
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
</style>
