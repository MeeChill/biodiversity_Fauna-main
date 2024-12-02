
const sliderItems = document.querySelectorAll('.slider-item');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(n) {
  sliderItems.forEach(item => item.style.transform = `translateX(${-n * 100}%)`);
  dots.forEach(dot => dot.classList.remove('active'));
  dots[n].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % sliderItems.length;
  showSlide(currentSlide);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});

setInterval(nextSlide, 3000);

// Data JSON
const data = {
    "pulau": {
        "nama": "Pulau Sumatra",
        "sinopsis": "Pulau Sumatra merupakan pulau terbesar keenam di Indonesia, yang dikenal dengan keanekaragaman hayati yang luar biasa. Pulau ini adalah rumah bagi beberapa spesies langka dan endemik, serta memiliki berbagai jenis ekosistem, mulai dari hutan hujan tropis hingga savana dan pesisir pantai.",
        "fauna": [
            {
                "nama": "Harimau Sumatra",
                "status": "Terancam Punah",
                "deskripsi": "Harimau Sumatra (*Panthera tigris sumatrae*) adalah subspesies harimau yang hanya ditemukan di pulau Sumatra, Indonesia. Populasinya terus menurun akibat deforestasi dan perburuan liar. Harimau Sumatra memiliki ciri khas pola garis-garis hitam yang lebih rapat dan tebal dibandingkan dengan harimau lainnya. Mereka hidup di hutan tropis lebat dan berburu hewan seperti rusa dan babi hutan. Harimau ini sangat terancam punah, dengan hanya sekitar 400-500 individu yang tersisa di alam liar.",
                "fakta_unik": [
                    "Harimau Sumatra adalah subspesies harimau terkecil di dunia.",
                    "Harimau Sumatra dapat hidup hingga 10 tahun di alam liar."
                ]
            },
            {
                "nama": "Badak Sumatra",
                "status": "Terancam Punah",
                "deskripsi": "Badak Sumatra (*Dicerorhinus sumatrensis*) adalah salah satu spesies badak yang paling terancam punah di dunia. Mereka memiliki tubuh yang lebih kecil dibandingkan dengan badak lainnya, dengan panjang sekitar 2,5-3 meter dan berat 500-800 kg. Badak Sumatra hidup di hutan tropis Sumatra dan Kalimantan, dan mereka sangat bergantung pada habitat yang kaya akan tumbuhan seperti rumput dan kulit kayu. Populasi mereka terus menurun, dengan hanya sekitar 80 individu yang tersisa.",
                "fakta_unik": [
                    "Badak Sumatra adalah satu-satunya badak dengan dua cula.",
                    "Badak Sumatra lebih aktif di malam hari dan jarang terlihat pada siang hari."
                ]
            },
            {
                "nama": "Gajah Sumatra",
                "status": "Terancam Punah",
                "deskripsi": "Gajah Sumatra (*Elephas maximus sumatranus*) adalah subspesies gajah Asia yang hanya ditemukan di Pulau Sumatra. Mereka memiliki tubuh yang lebih kecil dibandingkan dengan gajah Asia lainnya, dengan tinggi sekitar 2-3 meter dan berat 2-5 ton. Gajah Sumatra terancam punah akibat perusakan habitat dan perburuan ilegal. Gajah ini berperan penting dalam ekosistem sebagai penyebar benih tumbuhan dan pembuka jalan di hutan tropis.",
                "fakta_unik": [
                    "Gajah Sumatra memiliki bintik-bintik terang di kulitnya, yang membedakannya dari gajah Asia lainnya.",
                    "Gajah Sumatra dapat memakan hingga 150 kg makanan per hari."
                ]
            }
        ]
    },
    "ancaman": [
        {
            "ancaman": "Deforestasi",
            "img" : "Deforestasi.png",
            "deskripsi": "Deforestasi di Pulau Sumatra terjadi akibat perluasan perkebunan kelapa sawit, penebangan hutan untuk pertambangan, dan konversi hutan menjadi lahan pertanian. Menurut laporan Forest Watch Indonesia, sekitar 2,6 juta hektar hutan Indonesia hilang setiap tahunnya. Di Sumatra, hutan yang dulunya luasnya sekitar 58,9 juta hektar pada tahun 1900 kini menyusut drastis menjadi kurang dari 12 juta hektar pada tahun 2020",
            "dampak": [
                "Kehilangan habitat satwa langka",
                "Perubahan iklim global",
                "Penurunan kualitas tanah dan erosi"
            ],
            "pencegahan": {
                "judul": "Penghijauan Hutan",
                "img" : "pencegahan-deforestasi.png",
                "deskripsi": "Penghijauan atau reboisasi dengan menanam pohon-pohon endemik adalah langkah penting dalam mengatasi deforestasi. Reboisasi membantu mengembalikan habitat satwa dan menyerap karbon dioksida, yang dapat membantu mengurangi perubahan iklim.",
                "solusi": [
                    "Menanam pohon-pohon asli seperti Meranti dan Ramin.",
                    "Melibatkan masyarakat lokal dalam program penghijauan.",
                    "Mengadopsi prinsip kehutanan berkelanjutan dan regulasi yang ketat."
                ]
            }
        },
        {
            "ancaman": "Perburuan Liar",
            "img" : "perburuan-liar.png",
            "deskripsi": "Perburuan liar di Sumatra dilakukan untuk memenuhi permintaan pasar gelap internasional, dengan tujuan untuk memperoleh bagian tubuh satwa seperti kulit harimau, cula badak, dan gading gajah. Data dari TRAFFIC menunjukkan bahwa lebih dari 200 gajah Sumatra dibunuh setiap dekade terakhir.",
            "dampak": [
                "Penurunan populasi satwa langka",
                "Gangguan ekosistem alami",
                "Konflik manusia-satwa"
            ],
            "pencegahan": {
                "judul": "Konservasi Satwa",
                "img" : "konservasi.jpg",
                "deskripsi": "Konservasi satwa liar adalah kunci untuk mencegah perburuan liar yang mengancam satwa endemik di Sumatra. Pendekatan konservasi berfokus pada perlindungan habitat alami, penegakan hukum yang tegas, serta edukasi masyarakat.",
                "solusi": [
                    "Meningkatkan patroli kawasan konservasi dan penggunaan teknologi pengawasan.",
                    "Menegakkan hukum yang lebih ketat terhadap perburuan dan perdagangan satwa ilegal.",
                    "Meningkatkan kesadaran publik melalui edukasi tentang pentingnya melindungi satwa liar."
                ]
            }
        },
        {
            "ancaman": "Pencemaran Lingkungan",
            "img" : "Pencemaran.png",
            "deskripsi": "Limbah industri, sampah plastik, dan bahan kimia dari pertanian mencemari tanah, air, dan udara. Sungai-sungai besar seperti Sungai Batanghari tercatat memiliki tingkat polusi yang tinggi akibat pembuangan limbah tanpa pengolahan.    ",
            "dampak": [
                "Kualitas air yang tercemar mengancam kehidupan akuatik.",
                "Kehilangan habitat satwa akuatik dan daratan.",
                "Penurunan kesuburan tanah akibat polusi kimia."
            ],
            "pencegahan": {
                "judul": "Pengelolaan Limbah dan Kebersihan Lingkungan",
                "img" : "Pencegahan-pencemaran.jpg",
                "deskripsi": "Pencemaran lingkungan dapat dicegah dengan pengelolaan limbah yang baik, pengurangan sampah plastik, serta pemulihan kualitas air. Melalui tindakan kolektif, kita dapat mencegah pencemaran yang merusak habitat dan kehidupan satwa.",
                "solusi": [
                    "Menerapkan regulasi ketat dalam pengelolaan limbah industri dan bahan berbahaya.",
                    "Mengurangi penggunaan plastik sekali pakai dan meningkatkan daur ulang.",
                    "Melakukan restorasi ekosistem dan membersihkan sungai-sungai yang tercemar."
                ]
            }
        }
    ]
  };
  
  // Seleksi elemen pada ancaman dan pencegahan
  const threatImage = document.querySelector('#threat-img');
  const threatTitle = document.querySelector('#threat-title');
  const threatDescription = document.querySelector('#threat-description');
  const preventionImage = document.querySelector('#prevention-img');
  const preventionTitle = document.querySelector('#prevention-title');
  const preventionDescription = document.querySelector('#prevention-description');
  
  const additionalImages = document.querySelectorAll('.additional-images img');
  
  // Fungsi untuk memperbarui elemen dengan data dari JSON
  function updateContent(ancamanData) {
    threatImage.src = ancamanData.img;
    threatTitle.textContent = ancamanData.ancaman;
    threatDescription.textContent = ancamanData.deskripsi;
    
    preventionImage.src = ancamanData.pencegahan.img;
    preventionTitle.textContent = ancamanData.pencegahan.judul;
    preventionDescription.textContent = ancamanData.pencegahan.deskripsi;
  }
  
  // Event listener untuk setiap gambar tambahan
  additionalImages.forEach((image, index) => {
    image.addEventListener('click', () => {
      // Hapus tanda aktif dari semua gambar
      additionalImages.forEach(img => img.classList.remove('active'));
      
      // Tambahkan tanda aktif ke gambar yang diklik
      image.classList.add('active');
      
      // Perbarui konten berdasarkan data ancaman yang dipilih
      updateContent(data.ancaman[index]);
    });
  });
  
