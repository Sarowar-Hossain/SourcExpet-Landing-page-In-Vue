<template>
  <div class="w-full bg-[#402E7A] bg-opacity-5 my-20">
    <div
      class="w-full flex flex-col md:flex-row md:h-[600px] container mx-auto"
    >
      <div
        class="p-6 md:p-10 space-y-6 flex flex-col md:items-start justify-center h-full w-full"
      >
        <h1
          class="text-5xl font-bold text-pretty leading-[60px] text-center md:text-start"
        >
          Prioritizing your purchasing safety
        </h1>
        <p class="text-base/7">
          Enjoy a safe and worry-free sourcing journey by:
        </p>

        <div class="w-full h-full inline md:hidden">
          <img
            src="/clientMeeting.png"
            loading="lazy"
            alt=""
            class="w-full rounded-lg h-full object-cover"
          />
        </div>

        <div class="w-full my-6">
          <ul class="space-y-3 font-medium">
            <li
              v-for="(item, index) in listItems"
              :key="index"
              class="flex items-center gap-2"
            >
              <span>
                <CheckMark class="text-white fill-black" />
              </span>
              <p>{{ item }}</p>
            </li>
          </ul>
        </div>

        <button
          @click="goToContactUs"
          class="border font-medium px-6 py-2 bg-[#2eb5f7] text-white border-none rounded-md"
        >
          Request a quote
        </button>
      </div>
      <div class="p-6 md:p-10 w-full h-full hidden md:inline">
        <img
          src="/clientMeeting.png"
          loading="lazy"
          alt=""
          class="w-full rounded-lg h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import CheckMark from "../components/icons/TickMark.vue";

export default {
  name: "PrioritizingPurchasing",
  components: {
    CheckMark,
  },
  setup() {
    const router = useRouter();

    const listItems = [
      "Overcoming language and cultural barriers with a team fluent in English and Chinese",
      "Personalized 1-on-1 service at every step of your purchasing process",
      "Done-for-you purchase planning to avoid overstocking or running out of stock",
      "All shipments come with Delivered Duty Paid (DDP) options, handling all customs and tariffs for you",
    ];

    const goToContactUs = () => {
      router.push("/contact");
    };

    return {
      listItems,
      goToContactUs,
    };
  },
};
</script>
