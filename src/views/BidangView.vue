<template>
  <div class="bidang">
    <NavbarApp />
    <div class="container mt-3">
      <div class="row">
        <div class="p-3 mb-3">
          <div class="tittle text-left">
            <h5>Kegiatan Bidang</h5>
            <hr />
          </div>
          <div class="related-products spad">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-sm-6">
                  <router-link to="/dokumentasi/dokumentasi_1">
                    <div class="product-item">
                    <div class="foto-bidang">
                      <img src="img/hero-6.jpeg" alt="" />
                    </div>
                    <div class="pi-text">
                      <h5 class="text-left">DISKUSI BUDAYA “ KOSMOLOGI MANUSIA SULAWESI SELATAN” </h5>
                      <p class="text-justify">
                        IKAMI (jelaskan) Sulsel cabang Yogyakarta melaksanakan diskusi budaya pada hari Jumat, 24 Juni 2022. Diskusi dimulai sekitar pukul 20.00 WIB
                      </p>
                    </div>
                  </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-sm-6">
                  <router-link to="/dokumentasi/dokumentasi_2">
                    <div class="product-item">
                    <div class="foto-bidang">
                      <img src="img/hero-5.jpg" alt="" />
                    </div>
                    <div class="pi-text">
                      <h5 class="text-left">IKAMI SULSEL DIY RESMI GELAR POS SE-SULAWESI 2022</h5>
                      <p class="text-justify">
                        Pekan Olahraga dan Seni (POS) Se-Sulawesi IKAMI SULSEL Daerah Istimewa Yogyakarta 2022 telah resmi dibuka
                      </p>
                    </div>
                  </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-sm-6">
                  <router-link to="/dokumentasi/dokumentasi_3">
                    <div class="product-item">
                    <div class="foto-bidang">
                      <img src="img/hero-7.jpeg" alt="" />
                    </div>
                    <div class="pi-text">
                      <h5 class="text-left">Pererat Persaudaraan di Perantauan, IKAMI Sul-Sel DIY Gelar Buka Puasa Bersama</h5>
                      <p class="text-justify">
                        Ikatan Pelajar Mahasiswa Indonesia (IKAMI) Daerah Istimewa Yogyakarta menggelar acara buka puasa bersama di Asrama Mahasiswa Wisma Sawerigading, Selasa (20/4/2022). 
                      </p>
                    </div>
                  </div>
                  </router-link>
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
  name: "BidangView",
  components: {
    NavbarApp,
    FooterApp,
  },
};
</script>

<style scoped>
.pi-pic img {
  height: 300px;
}
.tittle h5 {
  font-size: 24px;
  font-weight: 800;
  color: #084a79;
}
.tittle hr {
  background: #ffcc00;
}

.pi-text h5{
  text-transform: uppercase;
}

.foto-bidang img{
  height: 250px;
  width: 400px;
}

@media (max-width: 575.98px) {
  .tittle h5 {
    font-size: 16px !important;
  }
  .tittle h3 {
    font-size: 20px !important;
  }
  .pi-pic img {
    height: 100px;
  }
  .pi-text .category-name,
  .pi-text p {
    font-size: 10px !important;
    line-height: 15px;
  }
  .pi-text h5 {
    font-size: 14px !important;
  }
}
</style>