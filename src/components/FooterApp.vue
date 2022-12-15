<template>
  <div>
    <footer class="footer-section">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-5">
            <div class="footer-left">
              <div class="footer-logo">
                <a href="#"><img src="img/logo.png" alt="" /></a>
              </div>
              <ul>
                <li>
                  Address: Jl. Sultan Agung No.18, Wirogunan, Pakualaman, Kota
                  Yogyakarta, Daerah Istimewa Yogyakarta 55151
                </li>
                <li>Phone: +62 81230446364</li>
                <li>Email: ikamisulselyk@gmail.com</li>
              </ul>
              <div class="footer-social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="footer-widget text-left">
              <h5>Informasi</h5>
              <ul>
                <li><a href="#">Tentang Kami</a></li>
                <li><a href="#">Kegiatan</a></li>
                <li><a href="#">Berita</a></li>
                <li><a href="#">Kontak</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-reserved">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="copyright-text">
                Copyright &copy; 2022 All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterApp",
};
</script>

<style scoped>
@media (max-width: 575.98px) {
  .footer-widget {
    text-align: center !important;
  }
}
</style>