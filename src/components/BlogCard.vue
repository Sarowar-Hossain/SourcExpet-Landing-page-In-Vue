<template>
  <div class="rounded-lg blog-card">
    <img :src="blog.coverImage" :alt="blog.title" class="blog-image" />
    <div class="blog-content">
      <h2 class="font-medium text-lg mb-4">{{ blog.title }}</h2>
      <p class="text-lg mb-4 text-pretty">
        {{ truncateDescription(blog.desc) }}
      </p>
      <p class="font-medium mb-3">Release Date: {{ formatDate(blog.date) }}</p>
      <button @click="$emit('click')" class="continue-reading font-medium">
        Continue Reading
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    truncateDescription(desc) {
      return desc.length > 100 ? desc.slice(0, 100) + "..." : desc;
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.blog-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.blog-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.blog-content {
  padding: 15px;
}

.continue-reading {
  background-color: #2eb5f7;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
