// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
// import { useAOS } from '../../composables/aos'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import FadeIn from '../../components/Fadein.vue'
import './style.css'

// const aos = useAOS()
export default {
  setup () {
    // aos.init({ duration: 800 })
  },
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('FadeIn', FadeIn)
  }
} satisfies Theme
