<template>
  <div class="overflow-hidden">
    <Banner />
    <GrowFaster />
    <HomeServiceBanner />
    <FulfillmentFlow />
    <WhyChooseUs />
    <ContactForm />
    <FAQSection />
    <Newsletter />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import GrowFaster from "../components/GrowFaster.vue";
import HomeServiceBanner from "../components/HomeServiceBanner.vue";
import FulfillmentFlow from "../components/FulfillementFlow.vue";
import WhyChooseUs from "../components/WhyChooseUs.vue";
import ContactForm from "../components/ContactForm.vue";
import FAQSection from "../components/FAQSection.vue";
import Newsletter from "../components/NewsLetter.vue";

export default {
  name: "Home",
  components: {
    Banner,
    GrowFaster,
    HomeServiceBanner,
    FulfillmentFlow,
    WhyChooseUs,
    ContactForm,
    FAQSection,
    Newsletter,
  },
};
</script>
