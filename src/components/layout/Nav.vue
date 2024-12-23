<template>
  <nav id="header"
       :class="cn(
         'fixed w-full z-30 top-0 text-white',
         minimize && 'bg-white navbar-active'
       )">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center">
        <a
          :class="cn(
              'no-underline hover:no-underline font-bold text-2xl lg:text-4xl',
              minimize ? 'text-primary' : 'text-primary-foreground'
              )"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-8 inline"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
            />
          </svg>
          LANDING
        </a>
      </div>
      <div class="block lg:hidden pr-4">
        <button
          @click="mobileSidebar = !mobileSidebar"
          id="nav-toggle"
          :class="cn(
            'flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out',
            minimize ? 'text-foreground' : 'text-secondary-foreground'
          )"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="mobileSidebar ? '' : 'hidden'"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-foreground p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <a
              class="inline-block uppercase py-2 px-4 font-medium no-underline"
              href="#"
              >Home</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block uppercase no-underline font-medium hover:text-gray-800 hover:text-underline py-2 px-4"
              href="#about"
              >About</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block uppercase no-underline font-medium hover:text-gray-800 hover:text-underline py-2 px-4"
              href="#customers"
              >Customers</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block uppercase no-underline font-medium hover:text-gray-800 hover:text-underline py-2 px-4"
              href="#pricing"
              >Pricing</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block uppercase no-underline font-medium hover:text-gray-800 hover:text-underline py-2 px-4"
              href="#contact"
              >Contact</a
            >
          </li>
        </ul>
        <button
          id="navAction"
          :class="cn(
            'mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out',
            minimize
              ? 'gradient text-white'
              : 'bg-white text-foreground',
          )"
        >
          Action
        </button>
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import { cn } from '../../utils/cn.js';

const scrollY = ref(0)
const mobileSidebar = ref(false)
const minimize = ref(false)
const handleScroll = () => {
  scrollY.value = window.scrollY;
}

onMounted(() => {
  scrollY.value = window.scrollY;
  // Listen to the scroll event to update the scrollY property dynamically
  window.addEventListener("scroll", handleScroll);
})

watch(scrollY, (newValue: number) => {
  if (newValue > 10 && !minimize.value) {
    minimize.value = true;
  }
  if (newValue <= 10 && minimize.value) {
    minimize.value = false
  }
})
</script>

<style scoped>
a {
  font-weight: 600;
  font-style: normal !important;
}

.navbar-active ul li a{
  color: #170F4F;
}
</style>
