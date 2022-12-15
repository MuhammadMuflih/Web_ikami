<template>
  <div class="home">
    <NavbarApp/>
    <HeroApp/>
    <DokumentasiApp/>
    <RuangApp/>
    <FooterApp/>

  </div>
</template>

<script>
// @ is an alias to /src
import NavbarApp from '@/components/NavbarApp.vue'
import HeroApp from '@/components/HeroApp.vue'
import DokumentasiApp from '@/components/DokumentasiApp.vue'
import RuangApp from '@/components/RuangApp.vue'
import FooterApp from '@/components/FooterApp.vue'



export default {
  name: 'HomeView',
  components: {
    NavbarApp,
    HeroApp,
    DokumentasiApp,
    RuangApp,
    FooterApp
  }
}
</script>
