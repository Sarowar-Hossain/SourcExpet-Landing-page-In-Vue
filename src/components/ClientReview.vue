<template>
    <div class="my-20 mx-5">
      <p class="text-5xl font-bold text-pretty leading-[60px] text-center mb-8">
        Our happy customers say about us
      </p>
      <div class="container relative mx-auto flex flex-col review py-4">
        <VueSlickCarousel v-bind="settings" class="w-[calc(100%)-330px] z-10 py-10 min-w-[95%] max-w-[95%] sm:min-w-[100%] sm:max-w-[100%] md:min-w-[95%] md:max-w-[95%] xl:min-w-[95%] xl:max-w-[95%] mx-auto">
          <div v-for="(item, index) in ClientReviewData" :key="index" class="px-2">
            <div class="relative mx-auto h-[350px] sm:h-[330px] max-w-[380px] p-5 flex flex-col justify-between shadow-md bg-white">
              <div>
                <span class="flex">
                  <Star v-for="star in item.rating" :key="star" class="text-[#FCD34D]" fill="#FCD34D" />
                </span>
                <p class="py-4 text-ellipsis overflow-hidden">
                  {{ item.review.slice(0, 200) }}
                </p>
              </div>
              <div class="flex items-center gap-4">
                <div class="w-12 h-12">
                  <img
                    :src="item.image"
                    :alt="'user-image'"
                    class="rounded-full object-cover w-full h-full"
                    :class="{ 'blur': !item.image }"
                  />
                </div>
                <div>
                  <p class="text-lg font-bold">{{ item.name }}</p>
                  <p class="text-[#52525B]">{{ item.title }}-{{ item.company }}</p>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
        <div
          class="absolute inset-0 mx-auto w-[241px] md:w-[320px] lg:w-[768px] h-[100%]"
          :style="{
            opacity: '0.3',
            background: '#E2EFFF',
          }"
        ></div>
      </div>
    </div>
  </template>
  
  <script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import { ClientReviewData } from '../../data/ClientReviewData.js'
  import { Star } from 'lucide-vue-next'
  
  export default {
    components: {
      VueSlickCarousel,
      Star
    },
    data() {
      return {
        ClientReviewData,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1450,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 882,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 570,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        }
      }
    }
  }
  </script>