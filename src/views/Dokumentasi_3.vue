<template>
  <div>
    <NavbarApp />
    <div class="dokumentasi-content mt-3">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="product-item">
              <div class="foto-bidang">
                <img src="img/hero-7.jpeg" alt="" />
              </div>
              <div class="pi-text">
                <h5 class="text-justify">
                  Pererat Persaudaraan di Perantauan, IKAMI Sul-Sel DIY Gelar
                  Buka Puasa Bersama
                </h5>
                <p class="text-justify">
                  Ikatan Pelajar Mahasiswa Indonesia (IKAMI) Daerah Istimewa
                  Yogyakarta menggelar acara buka puasa bersama di Asrama
                  Mahasiswa Wisma Sawerigading, Selasa (20/4/2022). Kegiatan
                  buka bersama tersebut dihadiri oleh Alumni IKAMI Yogyakarta,
                  Kerukunan Keluarga Sulawesi Selatan (KKSS) DIY, Asrama
                  Provinsi Sulawesi Selatan, Serta IKPM Kabupaten/Kota SulSel
                  Se-DIY. Ketua Ikatan Pelajar Mahasiswa Indonesia (IKAMI)
                  Daerah Istimewa Yogyakarta, Miftahul Awal Rahman mengatakan
                  kegiatan buka puasa bersama merupakan kegiatan perdana IKAMI
                  Sul-Sel setelah dilantik sebagai pemantik kegiatan-kegiatan
                  kedepannya. "Bukber ini merupakan kegiatan perdana kami
                  sebagai pemantik untuk kegiatan-kegiatan selanjutnya,"
                  Miftahul Awal berharap buka puasa bersama ini dapat
                  menumbuhkan kekeluargaan dan persaudaraan yang
                  pelajar/mahasiswa asal Sulsel yang sedang menimbah ilmu di
                  Daerah Istimewa Yogyakarta. "Bukber ini kita harapkan mampu
                  menjadi penguat kekeluargaan bagi seluruh mahasiswa pelajar
                  sulsel yang sedang menimbah ilmu di kota pendidikan," harap
                  Miftahul.
                </p>
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
  name: "Dokumentasi_3",
  components: {
    NavbarApp,
    FooterApp,
  },
};
</script>
    
    <style scoped>
.pi-text h5 {
  font-size: 24px;
  text-transform: uppercase;
}
.foto-bidang img{
  height: 600px;
  width: 500px
}

@media (max-width: 575.98px) {
  .pi-text h5 {
    font-size: 18px;
  }
  .pi-text p {
    font-size: 14px;
  }
}
</style>