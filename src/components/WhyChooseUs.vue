<template>
  <div class="flex flex-col justify-center items-center w-full py-10 p-4">
    <div
      class="p-6 md:p-10 space-y-6 flex flex-col items-center justify-center text-center"
    >
      <h1 class="text-5xl font-bold text-pretty leading-[60px] text-center">
        Why Choose SourcExpet?
      </h1>
      <p class="text-base/7">
        We are committed to providing exceptional customer service. Our team of
        experts is here to help.
      </p>
    </div>
    <div
      class="p-6 md:p-10 bg-[#000000] text-white rounded-xl lg:w-[70%] space-y-4"
    >
      <div class="flex flex-col md:flex-row gap-8">
        <div
          v-for="item in firstThreeItems"
          :key="item.id"
          class="flex flex-col items-start gap-4 w-full"
        >
          <div class="w-[60px] h-[60px] flex items-center justify-center">
            <component :is="item.icon" />
          </div>
          <div class="space-y-4">
            <h1 class="text-xl font-bold">{{ item.title }}</h1>
            <p class="font-normal">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-8">
        <div
          v-for="item in lastThreeItems"
          :key="item.id"
          class="flex flex-col items-start gap-4 w-full"
        >
          <div class="w-[60px] h-[60px] flex items-center justify-center">
            <component :is="item.icon" />
          </div>
          <div class="space-y-4">
            <h1 class="text-xl font-bold">{{ item.title }}</h1>
            <p class="font-normal">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import Inventory from "../components/icons/Inventory.vue";
import OrderTracking from "../components/icons/OrderTracking.vue";
import TickMark from "../components/icons/TickMark.vue";
import Packaging from "../components/icons/Packaging.vue";
import Shipping from "../components/icons/Shipping.vue";
import Support from "../components/icons/Support.vue";

const WhyChooseSourcExpetData = [
  {
    id: 1,
    title: "Inventory Management",
    description:
      "Easily keep track of your stock levels to avoid overselling or running out of products. Our system notify you automatically, ensuring you always have the latest data for smooth business operations.",
    icon: Inventory,
  },
  {
    id: 2,
    title: "Order Tracking",
    description:
      "Get real-time updates on your order status from the moment it's placed until it's shipped. Plus, our detailed billing breakdowns help you understand all your order costs clearly.",
    icon: OrderTracking,
  },
  {
    id: 3,
    title: "Quality Assurance",
    description:
      "Ensure top quality with our rigorous quality assurance processes. We inspect your products thoroughly to maintain high standards and customer satisfaction.",
    icon: TickMark,
  },
  {
    id: 4,
    title: "Customized Packaging",
    description:
      "Surprise your customers with personalized packaging. Choose from custom boxes, mailers, stickers, thank-you cards, membership cards, and more to make each delivery feel special.",
    icon: Packaging,
  },
  {
    id: 5,
    title: "DDP Shipping",
    description:
      "Simplify shipping with Delivery Duty Paid (DDP) options. Whether it's parcel or freight, we handle all the customs and tariff details for you.",
    icon: Shipping,
  },
  {
    id: 6,
    title: "Support Portal",
    description:
      "Quickly resolve any issues through our dedicated support portal, from customer service inquiries to claims and more.",
    icon: Support,
  },
];

export default {
  name: "WhyChooseUs",
  components: {
    Inventory,
    OrderTracking,
    Packaging,
    Shipping,
    Support,
    TickMark,
  },
  setup() {
    const firstThreeItems = computed(() => WhyChooseSourcExpetData.slice(0, 3));
    const lastThreeItems = computed(() => WhyChooseSourcExpetData.slice(3));

    return {
      firstThreeItems,
      lastThreeItems,
    };
  },
};
</script>
