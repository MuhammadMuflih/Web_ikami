<template>
  <div>
    <NavbarApp />
    <div class="dokumentasi-content mt-3">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="product-item">
              <div class="foto-bidang">
                <img src="img/hero-5.jpg" alt="" />
              </div>
              <div class="pi-text">
                <h5 class="text-justify">
                    IKAMI SULSEL DIY RESMI GELAR POS SE-SULAWESI 2022
                </h5>
                <p class="text-justify">
                    Pekan Olahraga dan Seni (POS) Se-Sulawesi IKAMI SULSEL Daerah Istimewa Yogyakarta 2022 telah resmi dibuka yang ditandai dengan pemukulan gong dan pelepasan balon oleh Dewan Pembima KKSS DIY pada Minggu (10/09) di Lapangan Nologaten, Sleman, DI Yogyakarta. 

Adapun pihak-pihak yang hadir dalam acara tersebut adalah Pembina BPW KKSS DIY, Ketua Umum IKAMI SULSEL DIY, Ketua IKPMD Provinsi se-Sulawesi, Ketua IKPMD Kabupaten/Kota se-Sulawesi serta seluruh mahasiswa daerah se-Sulawesi. 

POS se-Sulawesi akan dilaksanakan selama sepekan mulai dari 10 September 2022 hingga 17 September 2022. Adapun cabang olahraga yang dilombakan yaitu futsal, badminton, voli, basket, takraw catur, domina dan e-sport (Mobile Legends). Untuk cabang seni yang dilombakan yaitu cover lagu daer dan puisi. 

Ketua Panitia, Ahmad Jaelani mengatakan bahwa agenda POS merupakan kegiatan rutin Bidang Olahraga IKAMI sebagai wadah mengembangkan minat dan bakat mahasiswa daerah asal sulawesi. 

“POS merupakan kegiatan rutin yang kami laksanakan untuk mengembangkan minat dan bakat mahasiswa daerah yang sedang menempuh pemdidikan di Daerah Istimewa Yogyakarta." ujar jaelani 

Pembina BPW KKSS DIY, Husain Kasim dalam sambutannya menyampaikan bahwa kegiatan seperti harus dipertahankan dan dikembamgkan agar menjadi wadah silaturahmi mahasiswa asal sulawesi yang sedang menuntuk ilmu di Yogyakarta. 

"Kegiatan ini harus dipertahankan dan dikembangkan sebagai ruang silaturahmi walaupun dengan semangat kompetisi yang tinggi," Ucap Husain Kasim

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
  name: "Dokumentasi_2",
  components: {
    NavbarApp,
    FooterApp,
  },
};
</script>
  
  <style scoped>
.pi-text h5 {
  font-size: 24px;
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