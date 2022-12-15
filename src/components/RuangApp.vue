<template>
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mt-1">
          <div class="tittle text-left">
            <h3>Ruang</h3>
            <h5>Ekspresi</h5>
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
  </section>
</template>

<script>

export default {
  name: "RuangApp",
};
</script>

<style scoped>
.tittle h5 {
  font-weight: 600;
  color: #084a79;
  text-transform: uppercase;
}
.tittle h3 {
  font-weight: 800;
  color: #ffcc00;
  text-transform: uppercase;
}
.tittle hr {
  background: #ffcc00;
  height: 2px;
}
.pi-pic img {
  height: 300px;
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
  .pi-text p{
    font-size: 10px !important;
    line-height: 15px;
  }
  .pi-text h5{
    font-size: 14px !important;
  }
}
</style>