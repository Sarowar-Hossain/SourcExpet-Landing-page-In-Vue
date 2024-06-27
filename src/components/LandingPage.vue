<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0">
              <img class="w-[250px]" src="/logo-2-01.png" alt="Logo" />
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >Services</a
              >
              <a
                href="#"
                class="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >About</a
              >
              <a
                href="#"
                class="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >Blog</a
              >
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <div class="relative bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div
            class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
          >
            <main
              class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
            >
              <div class="sm:text-center lg:text-left">
                <h1
                  class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                >
                  <span class="block xl:inline"
                    >Supercharge your supply chain</span
                  >
                </h1>
                <p
                  class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                >
                  Streamline your eCommerce operations with SourcExpet
                  comprehensive purchasing and direct from China fulfillment
                  solutions, designed to empower Shopify merchants to scale with
                  confidence.
                </p>
                <div
                  class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                >
                  <div class="rounded-md shadow">
                    <a
                      href="#"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                      >Request a quote</a
                    >
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <!-- Additional Content -->
      <div class="bg-gray-50">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span class="block">Grow faster, worry less</span>
          </h2>
          <p class="mt-4 text-lg leading-6 text-gray-500">
            Feeling overwhelmed with supplier issues, inventory management
            challenges, and long shipping times? We're here to make things
            easier.
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped></style>
