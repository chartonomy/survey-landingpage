<template>
    <div class="container mx-auto px-2 pt-4 pb-12 text-foreground/80">
      <h2
          data-aos="fade-up"
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-foreground/80"
      >
        {{title}}
      </h2>
      <div data-aos="fade-up" class="w-full mb-4">
        <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div
          class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4"
      >
        <div
            data-aos="zoom-out-down"
            class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4"
        >
          <div
              class="flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
          >
            <div class="p-8 text-3xl font-bold text-center">
              {{ pricing.free.title }}
            </div>
            <div class="w-full text-sm text-center text-foreground/80 border-b-4">
              {{pricing.free.description}}
            </div>
            <ul class="w-full text-center text-sm">
              <li class="border-b py-4" v-for="feature in pricing.free.features">{{feature}}</li>
            </ul>
          </div>
          <div
              class="flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
            <div
                class="w-full pt-6 text-3xl text-gray-600 font-bold text-center"
            >
              {{pricing.free.price}}
              <span class="text-base">/ {{pricing.free.unit}}</span>
            </div>
            <div class="flex items-center justify-center">
              <button
                  class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div
            data-aos="zoom-out-down"
            class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10"
        >
          <div
              class="flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow"
          >
            <div class="w-full p-8 text-3xl font-bold text-center">
              {{pricing.basic.title}}
            </div>
            <div class="w-full text-sm text-center text-foreground/80">
              {{pricing.basic.description}}
            </div>
            <div class="h-1 w-full gradient my-0 py-0 rounded-t"></div>
            <ul class="w-full text-center text-base font-bold">
              <li class="border-b py-4" v-for="feature in pricing.basic.features">{{feature}}</li>
            </ul>
          </div>
          <div
              class="flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
            <div class="w-full pt-6 text-4xl font-bold text-center">
              {{pricing.basic.price}}
              <span class="text-base">/ {{pricing.basic.unit}}</span>
            </div>
            <div class="flex items-center justify-center">
              <button
                  class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div
            data-aos="zoom-out-down"
            class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4"
        >
          <div
              class="flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow"
          >
            <div class="p-8 text-3xl font-bold text-center">
              {{pricing.pro.title}}
            </div>
            <div class="w-full text-sm text-center text-foreground/80 border-b-4">
              {{pricing.pro.description}}
            </div>
            <ul class="w-full text-center text-sm">
              <li class="border-b py-4" v-for="feature in pricing.pro.features">{{feature}}</li>
            </ul>
          </div>
          <div
              class="flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6"
          >
            <div
                class="w-full pt-6 text-3xl text-gray-600 font-bold text-center"
            >
              {{pricing.pro.price}}
              <span class="text-base" v-if="pricing.pro.unit">/ {{pricing.pro.unit}}</span>
            </div>
            <div class="flex items-center justify-center">
              <button
                  class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import pricing from '../../../data/plans.json'
defineProps({
  title: String
})
</script>

<style scoped>

</style>