<template>
  <div
    class="my-8 flex min-h-[65vh] w-full items-center justify-center overflow-hidden px-4"
  >
    <div>
      <h1
        class="poppins-text relative flex flex-col gap-1 text-center text-5xl font-semibold"
      >
        Get started
      </h1>
      <p
        class="relative my-6 md:my-10 flex flex-col gap-1 text-center text-lg md:text-2xl text-pretty"
      >
        Fill out the form below and someone from our team will contact you.
        <br />
        We look forward to speaking with you!
      </p>
      <form @submit.prevent="handleSubmit">
        <div v-for="(field, index) in fields" :key="index" class="mb-4">
          <label
            :for="field.name"
            class="block text-sm font-medium text-gray-700"
            >{{ field.label }}</label
          >
          <input
            v-if="field.type !== 'textarea'"
            :type="field.type"
            :id="field.name"
            v-model="form[field.name]"
            class="w-full border border-text border-opacity-30 rounded px-2 py-2 focus:outline-primary"
          />
          <textarea
            v-else
            :id="field.name"
            v-model="form[field.name]"
            class="w-full border border-text border-opacity-30 rounded px-2 py-2 focus:outline-primary"
          ></textarea>
          <span v-if="errors[field.name]" class="text-red-500 text-sm">{{
            errors[field.name]
          }}</span>
        </div>
        <button
          type="submit"
          class="w-full bg-[#2eb5f7] text-white py-2 px-4 rounded-md flex items-center justify-center"
        >
          <template v-if="loading">
            <div class="w-6 h-6 animate-spin">
              <Loader />
            </div>
          </template>
          <template v-else> Send Message </template>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { useRouter } from "vue-router";
import { Loader } from "lucide-vue-next";

export default {
  name: "ContactUs",
  components: {
    Loader,
  },
  setup() {
    const form = ref({
      name: "",
      email: "",
      phone: "",
      organization: "",
      product: "",
      quantity: "",
      destination: "",
      message: "",
    });
    const errors = ref({});
    const fields = ref([
      { name: "name", label: "Your Name", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "phone", label: "Phone No", type: "text" },
      {
        name: "organization",
        label: "Organization / Company Name",
        type: "text",
      },
      { name: "product", label: "Type of product", type: "text" },
      { name: "quantity", label: "Approx product quantity", type: "text" },
      { name: "destination", label: "Shipping destination", type: "text" },
      { name: "message", label: "Your Message", type: "textarea" },
    ]);
    const loading = ref(false);
    const toast = useToast();
    const router = useRouter();

    const handleSubmit = async () => {
      errors.value = {};
      let valid = true;

      fields.value.forEach((field) => {
        if (!form.value[field.name]) {
          errors.value[field.name] = `${field.label} is required.`;
          valid = false;
        }
      });

      if (valid) {
        loading.value = true;
        try {
          await axios.post(
            "http://localhost:8080/api/contact/send-message",
            form.value
          );
          toast.success("Form submitted successfully!", {
            position: "top",
          });
          form.value = {
            name: "",
            email: "",
            phone: "",
            organization: "",
            product: "",
            quantity: "",
            destination: "",
            message: "",
          };
          router.push("/");
        } catch (error) {
          toast.error(
            "An error occurred while submitting the form. Please try again later.",
            {
              position: "top",
            }
          );
        } finally {
          loading.value = false;
        }
      } else {
        toast.error("Please fill out all required fields.", {
          position: "top",
        });
      }
    };

    return {
      form,
      errors,
      fields,
      loading,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
/* Your styles here */
</style>