<template>
  <div class="bg-[#F8FAFC] w-full h-full my-16 py-8">
    <div
      class="container mx-auto flex flex-col lg:flex-row justify-center items-center w-full h-full gap-10"
    >
      <div class="w-full lg:w-[50%]">
        <div class="w-[95%] md:w-[80%] mx-auto space-y-6">
          <h2
            class="text-2xl sm:text-3xl text-center md:text-start md:text-5xl text-black font-bold"
          >
            How Can We Help You?
          </h2>
          <p
            class="text-black text-base text-center md:text-start leading-[30px]"
          >
            Need professional help to import from China? Tell us your needs in
            the form below and our professionals will get back to you within 24
            hrs.
          </p>
        </div>
      </div>
      <div class="w-full lg:w-[50%] shadow-lg rounded-2xl">
        <form @submit.prevent="handleSubmit" class="flex flex-col p-4 border bg-white border-[#E6E6E6] rounded-xl">
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
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { Loader } from "lucide-vue-next";
import { useRouter } from "vue-router";

export default {
  name: "ContactForm",
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
/* Add any additional styling here */
</style>