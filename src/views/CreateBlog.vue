<template>
  <div class="container mx-auto my-12 min-h-[60vh]">
    <h2 class="text-2xl font-bold mb-4">Create Blog Post</h2>
    <form
      @submit.prevent="submitForm"
      class="space-y-4 flex items-start justify-center gap-10 w-full"
    >
      <div class="space-y-4 w-full">
        <div class="mt-4">
          <label
            for="coverImage"
            class="block text-lg font-medium text-gray-700"
            >Cover Image URL</label
          >
          <input
            type="text"
            id="coverImage"
            v-model="formData.coverImage"
            class="w-full border border-text border-opacity-30 rounded px-2 py-2 focus:outline-primary mt-2"
            placeholder="Enter cover image URL"
          />
        </div>
        <div>
          <label for="title" class="block text-lg font-medium text-gray-700"
            >Blog Title</label
          >
          <input
            type="text"
            id="title"
            v-model="formData.title"
            class="w-full border border-text text-lg border-opacity-30 rounded px-2 py-2 focus:outline-primary mt-2"
            placeholder="Enter blog title"
          />
        </div>
      </div>

      <div class="space-y-4 w-full">
        <div>
          <label for="desc" class="block text-lg font-medium text-gray-700"
            >Blog Description</label
          >
          <textarea
            id="desc"
            v-model="formData.desc"
            rows="10"
            class="w-full col border border-text text-lg border-opacity-30 rounded px-2 py-2 focus:outline-primary mt-2"
            placeholder="Enter blog description"
          ></textarea>
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="w-[200px] bg-[#2eb5f7] text-white py-2 px-4 rounded-md font-semibold"
            :disabled="isLoading"
          >
            {{ isLoading ? "Submitting..." : "Create Blog Post" }}
          </button>
        </div>
        <div v-if="errorMessage" class="mt-4 text-red-600">
          {{ errorMessage }}
        </div>
        <div v-if="successMessage" class="mt-4 text-green-600">
          {{ successMessage }}
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { useRouter } from "vue-router";

export default {
  name: "CreateBlog",
  data() {
    return {
      formData: {
        coverImage: "",
        title: "",
        desc: "",
      },
      isLoading: false,
      errorMessage: "",
      successMessage: "",
      toast: null,
      router: null,
    };
  },
  created() {
    this.toast = useToast();
    this.router = useRouter();
  },
  methods: {
    async submitForm() {
      this.errorMessage = "";
      this.successMessage = "";

      // Check if any field is empty
      if (
        !this.formData.coverImage ||
        !this.formData.title ||
        !this.formData.desc
      ) {
        this.errorMessage = "Please fill in all fields";
        return;
      }

      this.isLoading = true;
      const data = {
        coverImage: this.formData.coverImage,
        title: this.formData.title,
        desc: this.formData.desc,
      };
      try {
        const response = await axios.post(
          "http://localhost:8080/api/blog/create-blog",
          data
        );
        if (response.status === 200) {
          this.toast.success("Blog post created successfully!", {
            position: "top",
          });
          this.formData = { coverImage: "", title: "", desc: "" };
          this.router.push("/blog");
        }
      } catch (error) {
        this.toast.error(
          error.response?.data?.message ||
            "An error occurred while creating the blog post",
          { position: "top" }
        );
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
