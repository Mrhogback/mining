document.addEventListener("DOMContentLoaded", function () {
    let topbarScrolled = document.querySelector("#topbar");
    let headerScrolled = document.querySelector("#header");

    // Pastikan elemen header ditemukan sebelum digunakan
    if (!headerScrolled) {
        console.error("Elemen #header tidak ditemukan!");
        return;
    }

    // Fungsi untuk menangani efek scroll
    const scrolled = () => {
        if (window.scrollY >= 30) {
            headerScrolled.classList.add("header-scrolled");
            if (topbarScrolled) {
                topbarScrolled.classList.add("topbar-scrolled");
            }
        } else {
            headerScrolled.classList.remove("header-scrolled");
            if (topbarScrolled) {
                topbarScrolled.classList.remove("topbar-scrolled");
            }
        }
    };

    // Tambahkan event listener untuk memantau scroll sejak awal
    window.addEventListener("scroll", scrolled);

    // Fungsi untuk scroll ke section pertama di halaman
    const scrollFunction = () => {
        let offset = headerScrolled.offsetHeight; // Ambil tinggi header
        

        if (headerScrolled) {
            let elementPos = headerScrolled.offsetTop; // Posisi section pertama
            window.scrollTo({
                top: elementPos - offset, // Scroll ke posisi elemen dikurangi tinggi header
                behavior: "smooth",
            });
        } else {
            console.warn("Tidak ada elemen <section> di halaman.");
        }
    };

    
});


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".animasi");

    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position < windowHeight - 100) { 
                section.classList.add("show");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".utama");

    setTimeout(() => {
       hero.classList.add("show");
    }, 8000); // Delay 500ms sebelum muncul
});

// document.addEventListener("DOMContentLoaded", function() {
//     console.log("Mulai loading animasi SVG...");
    
//     setTimeout(() => {
//         console.log("Loading selesai, menampilkan konten utama...");
//         document.getElementById("loadingScreen").classList.add("hidden"); // Sembunyikan loading
//         document.querySelectorAll("main, main-header").forEach(el => {
//             el.style.display = "block";  // ✅ Perbaikan di sini
//         });
//     }, 7000); // 7 detik
// });

document.addEventListener("DOMContentLoaded", function() {
    console.log("Mulai loading...");

    setTimeout(() => {
        console.log("Loading selesai, menampilkan konten utama...");

        let loadingScreen = document.getElementById("loadingScreen");
        loadingScreen.classList.add("hidden");

        // Tunggu transisi opacity selesai, lalu hapus elemen dari DOM
        setTimeout(() => {
            loadingScreen.remove();
        }, 500); // Tunggu 0.5 detik agar transisi selesai

        // Tampilkan konten utama
        document.querySelectorAll("main-header, main, sectionhero, sectionabout").forEach(el => {
            el.style.display = "block";
        });

    }, 7000); // 7 detik
});
