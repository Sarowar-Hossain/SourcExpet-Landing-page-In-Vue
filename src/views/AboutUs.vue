<template>
  <div class="overflow-hidden space-y-14">
    <AboutUsBanner />
    <WhyChooseUs />
    <FAQSection />
    <Newsletter />
  </div>
</template>

<script>
import AboutUsBanner from "../components/AboutUsBanner.vue";
import WhyChooseUs from "../components/WhyChooseUs.vue";
import FAQSection from "../components/FAQSection.vue";
import Newsletter from "../components/NewsLetter.vue";

export default {
  name: "AboutUs",
  components: {
    AboutUsBanner,
    WhyChooseUs,
    FAQSection,
    Newsletter,
  },
};
</script>
