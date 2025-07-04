<script setup lang="ts">

</script>

<template>
  <section :id="getSlug(nav.customers)" class="bg-background border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <Headline2 :title="nav.customers[0]" />
      <div data-aos="fade-up" class="w-full mb-4">
        <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div
          data-aos="zoom-in-down"
          v-for="item in 3"
          :key="item"
          class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
      >
        <div
            class="flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow"
        >
          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <p class="w-full text-gray-600 text-xs md:text-sm px-6">
              John Doe
            </p>
            <div class="w-full font-bold text-xl text-foreground/80 px-6">
              Lorem ipsum dolor sit amet.
            </div>
            <p class="text-foreground/80 text-base px-6 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </a>
        </div>
        <div
            class="flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6"
        >
          <div class="flex items-center justify-start">
            <button
                class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Action
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>