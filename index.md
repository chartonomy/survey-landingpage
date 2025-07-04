---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "selbsttest.org"
  text: "Verlässliche anonyme Selbsttests für Ihr Team"
  tagline: Probieren Sie es gleich aus!
  image:
    src: ./assets/undraw_website-builder.svg
    alt: Selbsttest Grafik
  actions:
    - theme: brand
      text: DEMO ausprobieren
      link: https://app.selbsttest.org/umfrage/los/MZuv99fPiTsod5Bde?previewId=xJ5bRJatKLqyBE54c
      target: _blank
    - theme: alt
      text: Mehr erfahren
      link: /about

features:
  - title: Flexible Fragebögen
    icon: 📔
    details: Wählen Sie aus bekannten Vorlagen oder erstellen Sie Ihren ganz individuellem Fragebogen.
    link: /about
  - title: Individuelle Rückmeldung
    icon: ✅
    details: Unsere Auswertungsengine ermöglicht ein flexibles Scoring. So können Sie Ihren Usern immer die passende Rückmeldung geben.  
    link: /about
  - title: Anonym bis Analytics
    icon: 🛡️
    link: /about
    details: Definieren Sie das Level an Datenschutz ganz individuell nach Ihrem Anwendungsfall.
  - title: Made in Germany
    icon: 🇩🇪
    link: /about
    details: selbsttest.org wird in Deutschland entwickelt und auf Servern in Deutschland betrieben.
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/152927?v=4',
    name: 'Mark Heckmann',
    title: 'Co-Founder',
    links: [
      { icon: 'github', link: 'https://github.com/markheckmann' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/markheckmann/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/1135285?v=4',
    name: 'Jan Küster',
    title: 'Co-Founder',
    links: [
      { icon: 'github', link: 'https://github.com/jankapunkt' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/jan-kuester/' }
    ]
  },
]
</script>


## Unser Team

<FadeIn>
    <VPTeamMembers size="small" :members />
</FadeIn>
