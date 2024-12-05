// Data JSON
const data = {
    "pulau1": {
        "nama": "Pulau Jawa",
        "sinopsis": "Pulau Jawa memiliki fauna endemik seperti Macan Tutul Jawa, Badak Jawa, dan Merak Hijau. Keanekaragaman ini terancam oleh deforestasi, menjadikan konservasi penting untuk melestarikan ekosistemnya.",
        "fauna": [
        {
            "nama": "Macan Tutul Jawa",
            "img": "macan-tutul-jawa.jpg",
            "status": "Macan tutul Jawa dikategorikan sebagai *Critically Endangered* (Kritis) oleh IUCN. Ancaman utamanya adalah perusakan habitat, perburuan, dan konflik dengan manusia.",
            "deskripsi": "Macan tutul Jawa adalah salah satu subspesies macan tutul (Panthera pardus) yang endemik di Pulau Jawa. Macan tutul ini merupakan puncak rantai makanan di ekosistem hutan Jawa dan memiliki peran penting dalam menjaga keseimbangan ekologi.",
            "ciri_fisik": [
                "Panjang tubuh: 90–140 cm (tanpa ekor), panjang ekor sekitar 60–90 cm.",
                "Berat tubuh: Jantan 40–60 kg, betina 30–40 kg.",
                "Ciri khusus: Tubuh ramping dengan cakar yang kuat untuk memanjat pohon.",
                "Warna bulu: Biasanya berwarna kuning keemasan dengan pola roset hitam. Beberapa individu memiliki warna hitam (melanistik) yang sering disebut *macan kumbang*.",
            ],
            "habitat": "Macan tutul Jawa hidup di berbagai jenis habitat, mulai dari hutan hujan tropis, hutan pegunungan, hingga semak belukar. Mereka sering ditemukan di kawasan Taman Nasional seperti Taman Nasional Gunung Gede Pangrango dan Taman Nasional Meru Betiri.",
            "fakta_unik": [
                "Adaptasi unik: Selain berburu di darat, macan tutul Jawa adalah pemanjat pohon yang ulung, sering membawa hasil buruannya ke pohon untuk menghindari pencurian oleh hewan lain seperti anjing liar atau macan tutul lainnya.",
                "Melanisme: Sekitar 50% populasinya memiliki warna hitam atau disebut melanistik, yang memberikan keuntungan kamuflase di habitat hutan lebat.",
                "Karnivora oportunistik: Selain mangsa besar seperti rusa dan babi hutan, mereka juga memangsa hewan kecil seperti ayam hutan dan reptil.",
                "Komunikasi: Mereka menggunakan suara menggeram, mendengus, atau mengaung untuk menandai wilayah dan berkomunikasi."
            ]
        },
            {
                "nama": "Banteng Jawa",
                "img" : "banteng-jawa.jpg",
                "status": "Banteng Jawa dikategorikan sebagai *Endangered* (Terancam) oleh IUCN. Ancaman utamanya meliputi: Perusakan habitat: Akibat deforestasi dan konversi lahan menjadi perkebunan atau pemukiman, Perburuan liar: Diburu untuk daging, tanduk, dan kulitnya, Penyakit: Infeksi penyakit yang ditularkan oleh ternak domestik.",
                "deskripsi": "Banteng Jawa adalah subspesies banteng yang endemik di Indonesia, khususnya Pulau Jawa dan Bali. Hewan ini merupakan salah satu bovidae liar yang paling ikonik di Asia Tenggara dan memiliki peran penting dalam ekosistem hutan tropis. Selain sebagai satwa liar, banteng Jawa juga menjadi nenek moyang sapi Bali yang dibudidayakan di berbagai wilayah Indonesia.",
                "ciri_fisik": [
                    "Ukuran tubuh: Panjang tubuh mencapai 190–225 cm, dengan tinggi bahu sekitar 160 cm untuk jantan dan sedikit lebih pendek untuk betina.",
                    "Berat tubuh: Berkisar antara 600–800 kg pada jantan, sedangkan betina lebih ringan, sekitar 400–600 kg.",
                    "Warna tubuh: Jantan dewasa berwarna coklat tua hingga hitam mengkilap, Betina dan individu muda memiliki warna coklat kemerahan, Bagian kaki memiliki pola putih khas seperti *kaos kaki*.",
                    "Ciri khas: Jantan memiliki tanduk besar melengkung ke atas, sedangkan tanduk betina lebih kecil dan pendek.",
                ],
                "habitat": "Banteng Jawa hidup di hutan tropis dataran rendah, hutan pegunungan, padang rumput, dan daerah terbuka dengan sumber air. Mereka dapat ditemukan di kawasan konservasi seperti Taman Nasional Ujung Kulon, Taman Nasional Baluran, dan Alas Purwo di Jawa Timur.",
                "fakta_unik": [
                    "Banteng Jawa adalah salah satu spesies banteng liar terakhir di dunia yang masih bertahan.",
                    "Tanduknya terus tumbuh sepanjang hidup, dan bentuknya dapat digunakan untuk mengidentifikasi individu.",
                    "Sebagai herbivora besar, banteng memainkan peran penting dalam menjaga keseimbangan ekosistem dengan membantu penyebaran benih tanaman melalui kotorannya."
                ]
            },
            {
                "nama": "Merak Hijau",
                "img": "merak-hijau.jpg",
                "status": "Merak hijau dikategorikan sebagai *Endangered* (Terancam) oleh IUCN. Ancaman utamanya adalah perburuan untuk bulu dan hilangnya habitat akibat konversi lahan.",
                "ciri_fisik": [
                    "Panjang tubuh: Jantan hingga 3 meter (termasuk ekor), betina sekitar 1 meter.",
                    "Berat tubuh: Jantan 4–6 kg, betina 3–4 kg.",
                    "Warna bulu: Jantan: Kepala hijau berkilauan, dada dan leher dengan warna hijau metalik, dan ekor panjang dihiasi mata bulat menyerupai mata burung ,Betina: Lebih kusam, tanpa ekor panjang.",
                    "Paruh: Pendek, kokoh, dan melengkung sedikit.",
                ],
                "habitat": "Merak hijau hidup di hutan tropis dataran rendah, padang rumput, dan area terbuka yang dekat dengan air. Mereka juga sering ditemukan di kawasan konservasi seperti Taman Nasional Alas Purwo di Jawa Timur.",
                "deskripsi": "Merak hijau adalah burung besar dari keluarga Phasianidae yang terkenal karena ekornya yang panjang dan warna bulunya yang indah. Burung ini tersebar di Asia Tenggara dan merupakan spesies endemik di Jawa dan Bali.",
                "fakta_unik": [
                    "Ekornya bukan ekor sebenarnya: Ekornya yang panjang sebenarnya adalah bulu penutup atas ekor, sementara ekor asli burung ini lebih pendek dan tersembunyi.",
                    "Tarian memikat: Saat memikat betina, jantan mengguncang ekornya untuk menciptakan suara yang menarik dan memamerkan *mata* bulu yang mengkilap.",
                    "Penerbang hebat: Meskipun ukurannya besar, merak hijau adalah penerbang yang cepat dan gesit, sering terbang ke pohon untuk beristirahat atau menghindari predator.",
                    "Simbol mitologi: Merak hijau sering dianggap simbol keindahan dan keabadian dalam budaya lokal dan mitologi Jawa."
                ]
            }
        ]
    },
    "pulau2": {
        "nama": "Pulau Sumatra",
        "sinopsis": "Pulau Sumatra merupakan pulau terbesar keenam di Indonesia, yang dikenal dengan keanekaragaman hayati yang luar biasa. Pulau ini adalah rumah bagi beberapa spesies langka dan endemik, serta memiliki berbagai jenis ekosistem, mulai dari hutan hujan tropis hingga savana dan pesisir pantai.",
        "fauna": [
        {
            "nama": "Harimau Sumatra",
            "img": "Harimau.jpg",
            "status": "Terancam Punah",
            "deskripsi": "Harimau Sumatra (*Panthera tigris sumatrae*) adalah subspesies harimau terkecil di dunia yang hanya ditemukan di Pulau Sumatra, Indonesia. Harimau ini memiliki ciri khas bulu berwarna oranye dengan garis-garis hitam yang lebih lebar dan lebih rapat dibandingkan dengan subspesies harimau lainnya. Populasinya terus menurun akibat deforestasi, perburuan liar, dan perdagangan bagian tubuhnya. Diperkirakan hanya ada sekitar 400 ekor harimau Sumatra yang tersisa di alam liar, dan mereka hidup di berbagai jenis hutan, mulai dari hutan dataran rendah hingga hutan pegunungan.",
            "ciri_fisik": [
                "Panjang tubuh: 230–310 cm (termasuk ekor sekitar 1 m).",
                "Berat tubuh: Jantan 100–140 kg, betina 75–110 kg.",
                "Ciri khusus: Memiliki garis-garis hitam tegas pada tubuh dan wajah yang lebih rapat dibandingkan harimau dari daerah lain.",
                "Warna bulu: Cenderung oranye terang dengan garis-garis hitam lebar yang sangat kontras.",
            ],
            "fakta_unik": [
                "Harimau Sumatra adalah subspesies harimau terkecil di dunia.",
                "Mereka memiliki selaput di sela-sela jarinya yang memungkinkan mereka berenang cepat.",
                "Harimau betina memiliki masa kehamilan sekitar 103 hari dan biasanya melahirkan 2 hingga 3 anak.",
                "Anak harimau mulai belajar berburu pada usia 6 bulan dan dapat mandiri pada usia 2 tahun."
            ]
        },
            {
                "nama": "Badak Sumatra",
                "img" : "Badak-Sumatra.jpg",
                "status": "Terancam Punah",
                "deskripsi": "Badak Sumatra (*Dicerorhinus sumatrensis*) adalah salah satu spesies badak yang paling terancam punah di dunia. Mereka memiliki tubuh yang lebih kecil dibandingkan dengan badak lainnya, dengan panjang sekitar 2,5-3 meter dan berat 500-800 kg. Badak Sumatra hidup di hutan tropis Sumatra dan Kalimantan, dan mereka sangat bergantung pada habitat yang kaya akan tumbuhan seperti rumput dan kulit kayu. Populasi mereka terus menurun, dengan hanya sekitar 80 individu yang tersisa.",
                "ciri_fisik": [
                    "Panjang tubuh: 250–320 cm, dengan panjang ekor sekitar 50–60 cm.",
                    "Berat tubuh: 500–800 kg.",
                    "Ciri khusus: Memiliki dua cula pendek di hidung dan tubuh berbulu kasar, terutama pada bagian leher dan kaki.",
                    "Warna kulit: Berwarna kelabu dengan tekstur berbulu, yang memberi kesan seperti *berkerut*."
                ],
                "fakta_unik": [
                    "Badak Sumatra adalah satu-satunya badak dengan dua cula.",
                    "Badak Sumatra lebih aktif di malam hari dan jarang terlihat pada siang hari."
                ]
            },
            {
                "nama": "Gajah Sumatra",
                "img": "Gajah-Sumatra.jpg",
                "status": "Terancam Punah",
                "deskripsi": "Gajah Sumatra (*Elephas maximus sumatranus*) adalah subspesies gajah Asia yang hanya ditemukan di Pulau Sumatra. Mereka memiliki tubuh yang lebih kecil dibandingkan dengan gajah Asia lainnya, dengan tinggi sekitar 2-3 meter dan berat 2-5 ton. Gajah Sumatra terancam punah akibat perusakan habitat dan perburuan ilegal. Gajah ini berperan penting dalam ekosistem sebagai penyebar benih tumbuhan dan pembuka jalan di hutan tropis.",
                "ciri_fisik": [
                    "Panjang tubuh: 5–6 meter (termasuk ekor sekitar 1 meter).",
                    "Berat tubuh: 2.000–4.000 kg.",
                    "Ciri khusus: Memiliki telinga besar, ekor lebih pendek dibandingkan gajah Asia lainnya, dan gading yang lebih kecil.",
                    "Warna kulit: Berwarna abu-abu dengan kulit yang lebih kasar dan berkeriput."
                ],
                "fakta_unik": [
                    "Gajah Sumatra memiliki bintik-bintik terang di kulitnya, yang membedakannya dari gajah Asia lainnya.",
                    "Gajah Sumatra dapat memakan hingga 150 kg makanan per hari."   
                ]
            }
        ]
    },
    "pulau3": {
        "nama": "Pulau Papua",
        "fauna": [
    {
        "nama": "Burung Cenderawasih",
        "img": "Burung-Cendrawasih.jpeg",
        "status": "Terancam Punah",
        "deskripsi": "Burung Cenderawasih (*Paradisaea*) adalah salah satu jenis burung yang paling indah dan terkenal di dunia, endemik di Papua dan Maluku. Burung ini dikenal dengan bulu-bulunya yang sangat cantik dan menakjubkan, terutama pada burung jantan yang memiliki ekor panjang dan bulu berwarna cerah yang digunakan untuk menarik perhatian betina. Populasi burung cenderawasih semakin menurun akibat perusakan habitat dan perdagangan ilegal. Cenderawasih memiliki berbagai spesies yang masing-masing memiliki warna dan pola bulu yang berbeda.",
        "ciri_fisik": [
            "Panjang tubuh: 35–45 cm untuk betina, 40–90 cm untuk jantan.",
            "Berat tubuh: 150–400 gram.",
            "Ciri khusus: Jantan memiliki bulu ekor yang sangat panjang dan warna yang cerah, seperti merah, kuning, hijau, atau biru.",
            "Warna bulu: Jantan memiliki bulu yang sangat cerah dan mencolok, sementara betina cenderung memiliki warna yang lebih kusam dan camouflaged."
        ],
        "fakta_unik": [
            "Burung Cenderawasih dikenal sebagai burung yang memiliki ritual perkawinan yang sangat rumit.",
            "Bulu cenderawasih jantan sangat dicari oleh kolektor karena kecantikannya yang luar biasa.",
            "Cenderawasih hanya ditemukan di Papua dan beberapa wilayah di Maluku."
        ]
    },
    {
        "nama": "Kanguru Pohon Mantel Emas",
        "img": "Kanguru-Pohon-Mantel-Emas.jpg",
        "status": "Terancam Punah",
        "deskripsi": "Kanguru Pohon Mantel Emas (*Dendrolagus ursinus*) adalah spesies kanguru yang hidup di pohon-pohon hutan tropis Papua, Indonesia. Ciri khasnya adalah bulu berbulu tebal yang berwarna coklat kekuningan dengan mantel keemasan di bagian punggungnya. Spesies ini memiliki kemampuan luar biasa untuk melompat dari cabang ke cabang dengan lincah meskipun ukurannya cukup besar. Populasi mereka terancam karena deforestasi dan perburuan liar.",
        "ciri_fisik": [
            "Panjang tubuh: 50–60 cm (tanpa ekor).",
            "Berat tubuh: 4–6 kg.",
            "Ciri khusus: Memiliki bulu tebal dengan mantel keemasan di bagian punggung, serta ekor panjang yang digunakan untuk keseimbangan.",
            "Warna bulu: Bulu tubuh berwarna coklat kekuningan, dengan mantel emas yang mencolok di punggung."
        ],
        "fakta_unik": [
            "Kanguru Pohon Mantel Emas adalah satu-satunya kanguru yang hidup di pohon dan sangat terampil melompat dari cabang ke cabang.",
            "Mereka memiliki ekor yang sangat kuat yang berfungsi sebagai penyeimbang saat berpindah antar pohon.",
            "Habitat alami mereka adalah hutan tropis yang sedang terancam akibat penebangan pohon secara besar-besaran."
        ]
    },
    {
        "nama": "Kakaktua Raja",
        "img": "Kakatua-Raja.jpg",
        "status": "Terancam Punah",
        "deskripsi": "Kakaktua Raja (*Cacatua galerita*) adalah salah satu jenis kakaktua yang ditemukan di Papua dan beberapa wilayah di Indonesia. Kakaktua ini dikenal dengan mahkota bulu putih yang mencolok dan kemampuan vokal yang luar biasa. Mereka sering terlihat di hutan dan daerah pesisir, dan sangat bergantung pada pohon-pohon besar untuk bersarang. Karena perburuan dan perdagangan burung peliharaan, populasinya semakin berkurang.",
        "ciri_fisik": [
            "Panjang tubuh: 40–50 cm.",
            "Berat tubuh: 300–500 gram.",
            "Ciri khusus: Memiliki mahkota bulu yang besar dan mencolok yang dapat dibuka ketika burung merasa terancam atau tertarik.",
            "Warna bulu: Bulu tubuh putih, dengan mahkota dan beberapa bulu ekor berwarna kuning cerah."
        ],
        "fakta_unik": [
            "Kakaktua Raja adalah burung yang sangat pintar dan dapat meniru suara manusia dengan sangat baik.",
            "Mahkota bulu yang besar digunakan sebagai tanda peringatan atau untuk menarik perhatian betina.",
            "Kakaktua ini sering menjadi burung peliharaan karena kecerdasannya, meskipun populasinya terancam karena perdagangan ilegal."
        ]
    }
]
    },
    "pulau4": {
        "nama": "Kepulauan Nusa Tenggara",
    "fauna": [
    {
        "nama": "Komodo",
        "img": "Komodo.jpg",
        "status": "Rentan",
        "deskripsi": "Komodo (*Varanus komodoensis*) adalah kadal terbesar di dunia yang hanya ditemukan di beberapa pulau di Indonesia, termasuk Pulau Komodo, Rinca, Flores, dan Gili Motang. Komodo dikenal sebagai predator puncak dengan gigitan yang mematikan karena mengandung bakteri dan bisa ringan yang mempercepat kematian mangsa. Hewan ini memiliki peran penting dalam ekosistem sebagai pengendali populasi mangsa seperti rusa dan babi hutan.",
        "ciri_fisik": [
            "Panjang tubuh: 2–3 meter (termasuk ekor).",
            "Berat tubuh: 70–90 kg untuk jantan dewasa, 50–70 kg untuk betina.",
            "Ciri khusus: Memiliki lidah bercabang yang digunakan untuk mendeteksi bau mangsa.",
            "Warna kulit: Berwarna abu-abu gelap, coklat, atau hijau zaitun, dengan kulit kasar yang bertekstur seperti sisik."
        ],
        "fakta_unik": [
            "Komodo adalah reptil terbesar di dunia dan dapat memangsa hewan yang jauh lebih besar dari tubuhnya.",
            "Mereka memiliki kemampuan berburu yang sangat baik, bahkan bisa mendeteksi bau bangkai sejauh 4 km.",
            "Komodo adalah pelari cepat, mampu berlari hingga 20 km/jam dalam waktu singkat."
        ]
    },
    {
        "nama": "Rusa Timor",
        "img": "Rusa-Timor.jpg",
        "status": "Rentan",
        "deskripsi": "Rusa Timor (*Rusa timorensis*) adalah spesies rusa yang berasal dari Pulau Timor, tetapi juga ditemukan di beberapa wilayah lain di Indonesia, termasuk Nusa Tenggara dan Jawa. Mereka dikenal dengan tubuh yang ramping dan tanduk bercabang yang dimiliki oleh rusa jantan. Hewan ini biasanya hidup di padang rumput atau hutan terbuka, dan sangat bergantung pada vegetasi untuk makanan.",
        "ciri_fisik": [
            "Panjang tubuh: 1,3–1,7 meter.",
            "Berat tubuh: 40–70 kg.",
            "Ciri khusus: Rusa jantan memiliki tanduk bercabang dengan panjang hingga 30 cm, sedangkan betina tidak bertanduk.",
            "Warna bulu: Coklat kemerahan pada musim panas dan berubah menjadi abu-abu kecoklatan pada musim dingin."
        ],
        "fakta_unik": [
            "Rusa Timor adalah salah satu makanan utama komodo di Pulau Komodo.",
            "Betina biasanya melahirkan satu anak setelah masa kehamilan sekitar 7 bulan.",
            "Rusa ini adalah hewan yang sangat waspada, mampu mendeteksi ancaman dari jarak jauh."
        ]
    },
    {
        "nama": "Burung Madu Lombok",
        "img": "Burung-Madu-Lombok.jpg",
        "status": "Hampir Terancam",
        "deskripsi": "Burung Madu Lombok (*Cinnyris lombokius*) adalah burung kecil yang endemik di Pulau Lombok, Nusa Tenggara Barat. Burung ini dikenal dengan warnanya yang cerah dan kemampuan menghisap nektar bunga, menjadikannya salah satu penyerbuk penting dalam ekosistem. Burung Madu Lombok biasanya ditemukan di hutan terbuka, taman, dan kebun, serta sangat aktif pada pagi hingga siang hari.",
        "ciri_fisik": [
            "Panjang tubuh: 10–12 cm.",
            "Berat tubuh: 5–10 gram.",
            "Ciri khusus: Paruh melengkung panjang yang digunakan untuk menghisap nektar dari bunga.",
            "Warna bulu: Jantan memiliki bulu berwarna hijau metalik dengan dada kuning cerah, sedangkan betina berwarna coklat keabu-abuan yang lebih kusam."
        ],
        "fakta_unik": [
            "Burung Madu Lombok memiliki metabolisme tinggi, sehingga harus makan secara terus-menerus.",
            "Burung ini memainkan peran penting sebagai penyerbuk dalam ekosistem di Pulau Lombok.",
            "Mereka memiliki suara kicauan melengking yang khas, sering digunakan untuk berkomunikasi dan menarik pasangan."
        ]
    }
    ]
    },
    "pulau5": {
        "nama": "Pulau Sulawesi",
        "fauna": [
            {
        "nama": "Anoa",
        "img": "Anoa.jpeg",
        "status": "Terancam Punah",
        "deskripsi": "Anoa (*Bubalus depressicornis*) adalah kerbau kecil endemik Sulawesi yang sering disebut sebagai 'kerbau kerdil'. Anoa terbagi menjadi dua jenis utama, yaitu Anoa Dataran Rendah dan Anoa Pegunungan. Hewan ini lebih suka hidup di hutan tropis yang lebat dan memiliki kebiasaan hidup soliter atau dalam kelompok kecil. Populasinya semakin menurun akibat perburuan liar dan kehilangan habitat.",
        "ciri_fisik": [
            "Panjang tubuh: 120–150 cm.",
            "Berat tubuh: 150–300 kg.",
            "Ciri khusus: Memiliki tanduk pendek melengkung ke belakang, digunakan untuk bertahan dari predator.",
            "Warna kulit: Hitam atau coklat gelap dengan rambut pendek dan kasar."
        ],
        "fakta_unik": [
            "Anoa adalah spesies kerbau terkecil di dunia.",
            "Mereka sering mandi di lumpur atau air untuk menjaga suhu tubuh.",
            "Anoa sering dibandingkan dengan kerbau Afrika meskipun ukurannya jauh lebih kecil."
        ]
    },
    {
        "nama": "Tarsius",
        "img": "Tarsius.jpeg",
        "status": "Rentan",
        "deskripsi": "Tarsius (*Tarsius tarsier*) adalah primata kecil endemik Sulawesi yang dikenal dengan mata besar yang luar biasa. Hewan ini adalah hewan nokturnal yang aktif pada malam hari untuk berburu serangga. Tarsius sangat bergantung pada hutan lebat untuk perlindungan dan makanan, tetapi habitatnya semakin menyusut akibat deforestasi. Mereka memiliki kemampuan melompat yang luar biasa untuk ukuran tubuhnya yang kecil.",
        "ciri_fisik": [
            "Panjang tubuh: 10–15 cm (tidak termasuk ekor).",
            "Berat tubuh: 80–160 gram.",
            "Ciri khusus: Mata sangat besar, yang memungkinkan penglihatan tajam pada malam hari.",
            "Warna bulu: Coklat keabu-abuan, dengan ekor panjang yang tidak berbulu."
        ],
        "fakta_unik": [
            "Mata tarsius memiliki ukuran yang lebih besar dibandingkan otaknya.",
            "Hewan ini dapat memutar kepalanya hampir 180 derajat untuk mengamati lingkungan.",
            "Tarsius hanya makan daging, seperti serangga kecil, reptil, atau burung."
        ]
    },
    {
        "nama": "Yaki",
        "img": "Yaki.jpeg",
        "status": "Terancam Punah",
        "deskripsi": "Yaki (*Macaca nigra*), juga dikenal sebagai monyet hitam Sulawesi, adalah primata endemik Sulawesi Utara. Hewan ini memiliki ciri khas wajah hitam legam dan jambul di atas kepala. Yaki hidup dalam kelompok sosial besar dan biasanya aktif di siang hari. Sayangnya, populasi Yaki terus menurun akibat perburuan liar dan perusakan habitat.",
        "ciri_fisik": [
            "Panjang tubuh: 50–60 cm.",
            "Berat tubuh: 5–10 kg untuk betina, 10–15 kg untuk jantan.",
            "Ciri khusus: Memiliki wajah hitam legam tanpa rambut, dengan jambul mencolok di kepala.",
            "Warna bulu: Hitam pekat di seluruh tubuh."
        ],
        "fakta_unik": [
            "Yaki terkenal dengan ekspresi wajahnya yang terlihat 'tersenyum'.",
            "Mereka memiliki hierarki sosial yang kompleks dalam kelompoknya.",
            "Yaki sering menjadi korban perburuan untuk konsumsi daging di beberapa daerah Sulawesi."
        ]
    }
    ]
    },
    "pulau6": {
        "nama": "Pulau Kalimantan",
        "fauna": [
    {
        "nama": "Orangutan Kalimantan",
        "img": "Orangutan-Kalimantan.jpeg",
        "status": "Terancam Punah",
        "deskripsi": "Orangutan Kalimantan (*Pongo pygmaeus*) adalah spesies primata besar yang hanya ditemukan di Pulau Kalimantan. Mereka terkenal dengan kecerdasannya, sering menggunakan alat sederhana untuk memudahkan kehidupan sehari-hari, seperti mengambil makanan atau membangun sarang. Orangutan Kalimantan hidup di hutan hujan tropis yang kini semakin terancam akibat deforestasi dan perburuan liar.",
        "ciri_fisik": [
            "Panjang tubuh: 1,2–1,5 meter.",
            "Berat tubuh: 50–100 kg untuk jantan, 30–50 kg untuk betina.",
            "Ciri khusus: Jantan dewasa memiliki bantalan pipi besar (*flange*) yang membuat wajah mereka tampak lebih lebar.",
            "Warna bulu: Merah kecoklatan dengan tekstur panjang dan lebat."
        ],
        "fakta_unik": [
            "Orangutan Kalimantan memiliki lengan panjang yang bisa mencapai dua kali panjang tubuhnya.",
            "Hewan ini berbagi 97% DNA dengan manusia.",
            "Mereka adalah satwa soliter, biasanya hanya berinteraksi saat kawin atau antara induk dan anak."
        ]
    },
    {
        "nama": "Bekantan",
        "img": "Bekantan.jpeg",
        "status": "Terancam Punah",
        "deskripsi": "Bekantan (*Nasalis larvatus*) adalah monyet berhidung panjang yang hanya ditemukan di hutan bakau, rawa, dan hutan tropis Kalimantan. Hidung besar mereka, terutama pada jantan, digunakan untuk menarik perhatian betina dan memperkuat suara. Bekantan sering disebut sebagai 'kera Belanda' karena hidung besar dan tubuh mereka yang tegak.",
        "ciri_fisik": [
            "Panjang tubuh: 55–75 cm (tidak termasuk ekor sepanjang 60–80 cm).",
            "Berat tubuh: 15–24 kg untuk jantan, 7–12 kg untuk betina.",
            "Ciri khusus: Hidung besar pada jantan, wajah kemerahan, dan perut yang tampak membulat.",
            "Warna bulu: Coklat kekuningan dengan bagian belakang lebih gelap."
        ],
        "fakta_unik": [
            "Bekantan adalah perenang ulung yang mampu menyelam hingga 20 meter.",
            "Mereka memiliki perut khusus untuk mencerna daun dan biji keras.",
            "Hewan ini hidup berkelompok yang terdiri dari satu jantan dominan dan beberapa betina serta anak-anaknya."
        ]
    },
    {
        "nama": "Ikan Pesut Mahakam",
        "img": "Ikan-Pesut-Mahakam.jpeg",
        "status": "Kritis",
        "deskripsi": "Ikan Pesut Mahakam (*Orcaella brevirostris*) adalah lumba-lumba air tawar yang hidup di Sungai Mahakam, Kalimantan Timur. Pesut ini menjadi simbol konservasi sungai karena habitatnya yang sangat terbatas dan populasinya yang terus menurun akibat aktivitas manusia, seperti penangkapan ikan dengan alat berbahaya dan pencemaran air.",
        "ciri_fisik": [
            "Panjang tubuh: 2–2,7 meter.",
            "Berat tubuh: 90–130 kg.",
            "Ciri khusus: Kepala bulat tanpa moncong yang menonjol, sirip punggung kecil, dan tubuh yang kekar.",
            "Warna kulit: Abu-abu gelap di bagian punggung dan lebih terang di bagian bawah."
        ],
        "fakta_unik": [
            "Pesut Mahakam adalah salah satu dari sedikit lumba-lumba yang hidup di air tawar.",
            "Mereka menggunakan ekolokasi untuk berburu ikan di air keruh.",
            "Populasi Pesut Mahakam diperkirakan kurang dari 100 individu di alam liar."
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

  
    
// Slider Configuration
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

// Slider Event Listeners
if (dots.length > 0) {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Auto slide every 3 seconds
    setInterval(nextSlide, 3000);
}

// Ambil elemen HTML yang diperlukan
const faunaImage = document.getElementById('fauna-image');
const faunaTitle = document.getElementById('fauna-title');
const faunaDescription = document.getElementById('fauna-description');
const faunaStatus = document.getElementById('fauna-status');
const faunaCharacteristic = document.getElementById('fauna-characteristic');
const faunaFacts = document.getElementById('fauna-facts');
const additionalImages = document.querySelectorAll('.additional-images img');

// Ambil data-pulau dari elemen body
const pulau = document.body.getAttribute('data-pulau');

// Pilih data fauna berdasarkan pulau
const faunaData = data[pulau].fauna;

// Fungsi untuk memperbarui detail fauna
function updateFaunaDetails(index) {
    const fauna = faunaData[index]; // Data fauna sesuai pulau
    console.log("Data fauna yang dipilih:", fauna); 

    // Update elemen HTML dengan data fauna
    faunaImage.src = fauna.img;
    faunaTitle.textContent = fauna.nama;
    faunaDescription.textContent = fauna.deskripsi;
    faunaStatus.textContent = fauna.status;

    // Perbarui ciri fisik
    faunaCharacteristic.innerHTML = '';
    fauna.ciri_fisik.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        faunaCharacteristic.appendChild(li);
    });

    // Perbarui fakta unik
    faunaFacts.innerHTML = '';
    fauna.fakta_unik.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        faunaFacts.appendChild(li);
    });
}

// Event listener untuk gambar tambahan
additionalImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        // Hapus tanda aktif dari semua gambar
        additionalImages.forEach(img => img.classList.remove('active'));

        // Tambahkan tanda aktif ke gambar yang diklik
        image.classList.add('active');

        // Perbarui detail fauna berdasarkan indeks
        updateFaunaDetails(index);
    });
});

// Inisialisasi data fauna pertama kali
window.addEventListener('load', () => {
    // Pastikan gambar pertama ditandai sebagai aktif
    additionalImages[0].classList.add('active');
    updateFaunaDetails(0);
});