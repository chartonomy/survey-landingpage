<script setup>
import { ref } from 'vue'
import Headline2 from '../common/Headline2.vue'
import Fadein from '../common/Fadein.vue'

const links = {
  mbi: 'https://duckduckgo.com'
}
const demoType = ref("mbi")
const targetType = ref("blank")
const showEmbedded = ref(false)
</script>

<template>
  <div class="container max-w-5xl mx-auto m-8">
    <Headline2 title="Probieren Sie es selbst aus!"/>

    <Fadein vdir="up" hdir="right" class="flex flex-wrap">
      <div>
        <p class="text-foreground/60 mb-8">
          Probieren Sie ganz unverbindlich und unkompliziert unsere Beispielfragebögen aus.
          Es werden keine Daten erhoben und Sie können beliebig viele Durchläufe erproben.
        </p>

        <div v-if="showEmbedded" class="text-end">
          <button @click="showEmbedded=false" class="text-foreground/60 hover:underline">&times; Schließen</button>
          <iframe :src="links[demoType]" width="1000" height="600" />
        </div>

        <div class="flex flex-col text-foreground/60" v-else>
          <label for="demo_select">Fragebogen wählen</label>
          <select id="demo_select" v-model="demoType" class="w-full text-foreground/60" title="Fragebogen auswählen">
            <option disabled>Fragebogen auswählen</option>
            <option selected value="mbi">Maslach Burnout Inventory (MBI)</option>
          </select>

          <label for="target_select">Darstellung wählen</label>
          <select id="target_select" v-model="targetType" class="w-full text-foreground/60" title="Darstellung auswählen">
            <option disabled>Darstellung auswählen</option>
            <option value="blank" selected>Eigenes Tab / Fenster</option>
            <option value="embed">Eingebettet via iFrame</option>
          </select>

          <a
              v-if="targetType === 'blank'"
              :href="links[demoType]"
              target="_blank"
              rel="noreferrer noopener nofollow"
              class="text-center mx-auto lg:mx-0 hover:underline bg-primary text-primary-foreground font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out mt-4"
          >
            Demo starten
          </a>

          <button
              v-if="targetType === 'embed'"
              @click="showEmbedded = true"
              rel="noreferrer noopener nofollow"
              class="text-center mx-auto lg:mx-0 hover:underline bg-primary text-primary-foreground font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out mt-4"
          >
            Demo starten
          </button>
        </div>
      </div>
      </Fadein>
  </div>
</template>


<style scoped>

</style>