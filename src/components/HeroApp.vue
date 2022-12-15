<template>
  <div>
    <section class="hero-section">
        <carousel class="hero-items" :items="1" :nav="false">
            <div class="single-hero-items set-bg" style="background-image: url('img/hero-4.png');">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 text-center sambutan">
                            <span>SELAMAT DATANG</span>
                            <h1>WEBSITE IKAMI</h1>
                            <p>
                                Official website resmi IKAMI tahun 2022
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-hero-items set-bg" style="background-image: url('img/massikola.png');">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 text-center sambutan">
                            <span>KADERISASI</span>
                            <h1>MASSIKOLA</h1>
                            <p>
                                Semangat Kolaboratif Pelajar Sulsel di Era Society 5.0
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </carousel>
    </section>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
    name: 'HeroApp',
    components: {
        carousel
    }

}
</script>

<style scoped>


@media (max-width: 575.98px){
}

</style>