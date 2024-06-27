<template>
  <div>
    <ServiceBanner />
    <ServicePurchasingFlow />
    <PrioritizingPurchasing />
    <FulfillmentComponent />
    <ContactForm />
    <Newsletter />
  </div>
</template>

<script>
import ServiceBanner from "../components/ServiceBanner.vue";
import ServicePurchasingFlow from "../components/ServicePurchasingFlow.vue";
import PrioritizingPurchasing from "../components/PrioritizingPurchasing.vue";
import FulfillmentComponent from "../components/FulfillmentComponent.vue";

import ContactForm from "../components/ContactForm.vue";
import Newsletter from "../components/NewsLetter.vue";

export default {
  name: "Services",
  components: {
    ServiceBanner,
    ServicePurchasingFlow,
    PrioritizingPurchasing,
    FulfillmentComponent,
    ContactForm,
    Newsletter,
  },
};
</script>
