 <script  setup lang="ts">
 import {onMounted, ref} from "vue";
import LayoutNav from './components/layout/Nav.vue'
import LayoutFooter from './components/layout/Footer.vue'
import { getSlug } from "./utils/getSlug";
import CallToAction from "./components/blocks/CallToAction.vue";
import GDPR from "./components/blocks/GDPR.vue";
import WavesUpwards from "./components/layout/WavesUpwards.vue";
import WavesDownwards from "./components/layout/WavesDownwards.vue";
import { useAOS} from "./composables/aos.js";
import config from '../data/config.json';
 import Demo from "./components/blocks/Demo.vue";

const { demo } = config;
const navRaw = config.nav;
const nav = ref(navRaw.entries);
const AOS = useAOS()

onMounted(() => {
AOS.init({ duration: 800})
})
</script>
<template>
  <div class="leading-normal tracking-normal text-white gradient">
    <LayoutNav />

    <div data-aos="fade-up" class="pt-24">
      <div
          class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <div
            class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
        >
          <p class="uppercase tracking-loose w-full">selbsttest.org</p>
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Verlässliche Selbsttests für Ihre Mitarbeiter und Kunden!
          </h1>
          <p class="leading-normal text-2xl mb-8">
            Einfach, verständlich und ohne Installation Tests anlegen und durchführen.
          </p>
          <a
              class="mx-auto lg:mx-0 hover:underline bg-background text-foreground/80 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              href="#demo"
          >
            Jetzt ausprobieren
          </a>
        </div>

        <div class="w-full md:w-3/5 py-6 text-center">
          <img class="w-full md:w-4/5 z-50" alt="titelbild selbsttest.org" src="/imgs/hero.png" />
        </div>
      </div>
    </div>
    <div class="relative -mt-12 lg:-mt-24">
      <WavesDownwards />
    </div>
    <section id="demo" class="bg-background border-b py-8">
      <Demo />
    </section>


      <GDPR :id="getSlug(nav.gdpr)"  :title="nav.gdpr[0]"/>

    <WavesUpwards />
    <section
        :id="getSlug(nav.contact)"
        data-aos="zoom-in-up"
        class="container mx-auto text-center py-6 mb-12"
    >
      <CallToAction />
    </section>
    <LayoutFooter />
  </div>
</template>

