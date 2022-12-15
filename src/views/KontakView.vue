<template>
  <div class="kontak">
    <NavbarApp />
    <div class="d-flex info align-items-center justify-content-center">
      <div class="col col-lg-8 text-center">
        <div class="tittle text-left">
          <h5>IKAMI SULSEL</h5>
          <hr />
        </div>
        <img src="img/logo.png" alt="" width="294" />
        <p class="mt-2">
          Jl. Sultan Agung No.18, Wirogunan, Pakualaman, Kota Yogyakarta, Daerah
          Istimewa Yogyakarta 55151
        </p>
        <div class="footer-social">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-youtube"></i></a>
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
  name: "KontakView",
  components: {
    NavbarApp,
    FooterApp,
  },
};
</script>

<style scoped>
.info {
  margin: 50px 0 50px 0;
}
.tittle h5 {
  font-size: 24px;
  font-weight: 800;
  color: #084a79;
}
.tittle hr {
  background: #ffcc00;
}
.footer-social a {
  display: inline-block;
  height: 40px;
  width: 40px;
  background: #434445;
  color: #ffffff;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  margin-right: 7px;
  position: relative;
  z-index: 1;
}

.footer-social a:hover:before {
  opacity: 1;
}

.footer-social a:before {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: #e7ab3c;
  content: "";
  border-radius: 50%;
  opacity: 0;
  -webkit-transition: all 0.3s;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  z-index: -1;
}
</style>