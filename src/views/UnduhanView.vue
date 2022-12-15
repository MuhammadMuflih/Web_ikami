<template>
  <div class="unduhan">
    <NavbarApp/>
    <div class="d-flex success-checkout align-items-center justify-content-center">
        <div class="col col-lg-4 text-center">
            <h5 class="mt-4">
                Belum ada file file yang bisa diunduh
            </h5>
        </div>
    </div>
    <FooterApp/>

  </div>
</template>

<script>
import NavbarApp from "@/components/NavbarApp.vue";
import FooterApp from "@/components/FooterApp.vue";

export default {
name: 'UnduhanView',
components: {
    NavbarApp,
    FooterApp
}
}
</script>

<style>

</style>