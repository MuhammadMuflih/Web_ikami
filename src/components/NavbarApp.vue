<template>
  <div class="container">
    <nav
      class="navbar navbar-expand-lg navbar-light"
      v-bind:class="{ navbarOpen: show }"
    >
      <a class="navbar-brand" href="#">
        <img src="img/logo.png" width="70" height="60" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        @click.stop="toggleNavbar()"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        v-bind:class="{ show: show }"
      >
        <ul class="navbar-nav ml-lg-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profil">profil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bidang">bidang</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/unduhan">unduhan</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ruang">ruang</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/kontak">kontak</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarApp",
  data() {
    return {
      show: true,
    };
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.nav-item {
  font-weight: 800;
  text-transform: uppercase;
  background-color: transparent !important;
}

.navbar-light .navbar-nav .nav-item .nav-link:hover,
.navbar-light .navbar-nav .nav-item .nav-link.router-link-exact-active {
  text-align: left;
  width: 100%;
  background: #ffcc00;
  color: #fff;
}

.navbar-light .navbar-nav .nav-item .nav-link {
  padding: 5px 15px;
}
</style>