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
          class="w-full bg-[#2eb5f7] text-white py-2 px-4 rounded-md"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
export default {
  name: "ContactUs",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        organization: "",
        product: "",
        quantity: "",
        destination: "",
        message: "",
      },
      errors: {},
      fields: [
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
      ],
    };
  },
  methods: {
    handleSubmit() {
      this.errors = {};
      let valid = true;
      const $toast = useToast();

      for (let field in this.form) {
        if (!this.form[field]) {
          this.errors[field] = `${
            this.fields.find((f) => f.name === field).label
          } is required.`;
          valid = false;
        }
      }

      if (valid) {
        $toast.success("Form submitted successfully!", {
          position: "top",
        });
        console.log(this.form);
        // Handle form submission logic here
      } else {
        $toast.error("Please fill out all required fields.", {
          position: "top",
        });
      }
    },
  },
};
</script>
