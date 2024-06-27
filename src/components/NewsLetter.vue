<template>
  <div class="px-5 overflow-hidden my-10">
    <div :class="s.root">
      <div :class="s.body">
        <template v-if="!emailSubmit">
          <form @submit.prevent="onSubmit" class="w-full">
            <div
              class="flex flex-col md:flex-row justify-between gap-10 md:gap-16 lg:gap-24 xl:gap-32"
            >
              <div class="md:w-[50%] space-y-3">
                <h1 class="font-semibold text-2xl lg:text-4xl">
                  Join our Newsletter & stay updated
                </h1>
                <p class="text-base">
                  Receive the latest news, updates, and many other news every
                  week.
                </p>
              </div>
              <div class="w-full md:w-[50%] space-y-4">
                <input
                  v-model="email"
                  id="userEmail"
                  class="block w-full py-2 px-2 bg-transparent border text-center outline-none"
                  placeholder="Enter your email address"
                  type="email"
                  @input="validateEmail"
                />
                <p v-if="emailError" class="text-red-500" role="alert">
                  {{ emailError }}
                </p>
                <button
                  type="submit"
                  class="border font-semibold px-10 bg-white text-[#151837] container mx-auto py-2 hover:bg-slate-300 flex items-center justify-center"
                >
                  <template v-if="loading">
                    <div class="w-6 h-6 animate-spin">
                      <Loader />
                    </div>
                  </template>
                  <template v-else> Subscribe Now </template>
                </button>
              </div>
            </div>
          </form>
        </template>
        <template v-else>
          <div class="flex flex-col items-center gap-5 w-full">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="106"
                height="106"
                viewBox="0 0 106 106"
                fill="none"
              >
                <circle cx="53" cy="53" r="53" fill="white" />
                <path
                  d="M53.5 9C29.6073 9 10 28.6073 10 52.5C10 76.3927 29.6073 96 53.5 96C77.3927 96 97 76.3927 97 52.5C97 28.6073 77.3927 9 53.5 9ZM48.2356 72.2857L29.1866 53.2368L36.395 46.0284L48.5692 58.2026L73.0096 35.985L79.8695 43.5269L48.2356 72.2857Z"
                  fill="url(#paint0_linear_262_3933)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_262_3933"
                    x1="10"
                    y1="9"
                    x2="107.549"
                    y2="23.12"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6DDCFF" />
                    <stop offset="1" stop-color="#7F60F9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="">
              <h2 class="text-center">
                Thank You for Subscribing! We've Received Your Email for
                Newsletter Updates.
              </h2>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { Loader } from "lucide-vue-next";
import s from "./Newsletter.module.css";

export default {
  name: "Newsletter",
  components: {
    Loader,
  },
  setup() {
    const emailSubmit = ref(false);
    const loading = ref(false);
    const email = ref("");
    const emailError = ref("");

    const validateEmail = () => {
      const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!email.value) {
        emailError.value = "Email Address is required";
      } else if (!emailRegex.test(email.value)) {
        emailError.value = "Please enter a valid email";
      } else {
        emailError.value = "";
      }
    };

    const onSubmit = async () => {
      validateEmail();
      if (!emailError.value) {
        loading.value = true;
        try {
          await axios.post(
            "http://localhost:8080/api/newsletter/send-newsletter",
            {
              email: email.value,
            }
          );
          emailSubmit.value = true;
          email.value = "";
        } catch (error) {
          emailError.value =
            "An error occurred while submitting your email. Please try again later.";
        } finally {
          loading.value = false;
        }
      }
    };

    return {
      emailSubmit,
      loading,
      email,
      emailError,
      validateEmail,
      onSubmit,
      s,
    };
  },
};
</script>

<style module></style>
