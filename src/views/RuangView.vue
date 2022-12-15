<template>
  <div class="ruang">
    <NavbarApp />
    <div class="container mt-3">
      <div class="row">
        <div class="p-3 mb-3">
          <div class="tittle text-left">
            <h5>Ruang Ekspresi</h5>
            <hr />
          </div>
          <div class="related-products spad">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-sm-6">
                  <div class="product-item">
                    <div class="foto-bidang">
                      <img src="img/hero-4.jpg" alt="" />
                    </div>
                    <router-link to="/ruang/Ruang_1">
                    <div class="pi-text">
                      <h5 class="text-left">HARLAH IKAMI SULSEL KE 61, SAATNYA TAUBAT NASUHA BERJAMAAH</h5>
                      <p class="text-justify">
                        30 September 1961 ditetapkan sebagai berdirinya IKAMI SULSEL diawali dengan penyatuan dan kebulatan tekad 8 wadah otonom pelajar/mahasiswa sulawesi selatan yang tersebar di pulau jawa. 
                      </p>
                    </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterApp />
  </div>
</template>

<script>
import NavbarApp from "@/components/NavbarApp.vue";
import FooterApp from "@/components/FooterApp.vue";

export default {
  name: "RuangView",
  components: {
    NavbarApp,
    FooterApp,
  },
};
</script>

<style scoped>
.foto-bidang img {
  width: 100%;
  height: 250px;
}
.tittle h5 {
  font-size: 24px;
  font-weight: 800;
  color: #084a79;
}
.tittle hr {
  background: #ffcc00;
}
</style>