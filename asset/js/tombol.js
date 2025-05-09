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
        if (window.scrollY >= 100) {
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
    }, 5000); // Delay 500ms sebelum muncul
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
        }, 3); // Tunggu 0.5 detik agar transisi selesai

        // Tampilkan konten utama
        document.querySelectorAll("main-header, main, sectionhero, sectionabout").forEach(el => {
            el.style.display = "block";
        });

    }, 4000); // 7 detik
});

const navbarHeight = 80; // ganti sesuai tinggi navbar kamu

// document.querySelectorAll('.nav-link').forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//     const targetId = this.getAttribute('href');
//     const targetSection = document.querySelector(targetId);

//     if (targetSection) {
//       const sectionTop = targetSection.offsetTop;
//       const scrollToPosition = sectionTop - navbarHeight;

//       window.scrollTo({
//         top: scrollToPosition,
//         behavior: 'smooth'
//       });
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const icons = document.querySelectorAll(".material-icons");
//     const leftSection = document.querySelector(".leftService");
//     const leftText = document.querySelector(".leftService p");
//     const rightSection = document.querySelector(".rightService");
//     const originalText = rightSection.innerHTML; // Simpan teks asli

//     icons.forEach(icon => {
//         icon.addEventListener("click", function() {
//             const selectedService = icon.getAttribute("data-service");
//             const description = icon.getAttribute("data-description");

//             // Sembunyikan teks "Our Services"
//             leftText.style.display = "none";

//              // Bersihkan ikon di kanan
//             rightSection.innerHTML = "";

//             // Duplikasi ikon dan tampilkan di kiri
//             const newIcon = icon.cloneNode(true);
//             newIcon.style.fontSize = "80px";
//             newIcon.style.color = "black";
//             leftSection.appendChild(newIcon);

//             // Tampilkan deskripsi layanan di kanan
//              // Tambahkan deskripsi ke kanan
//             rightSection.innerHTML = `
//             <div class="text-white text-center p-4">
//                 <h2 class="mb-3">${service}</h2>
//                 <p>${description}</p>
//                 <button class="btn btn-warning mt-3" onclick="resetServices()">Kembali</button>
//             </div>
//             `;
//         });
//     });
//     function resetServices() {
//         location.reload(); // cara paling cepat: reload halaman
//         // Atau kamu bisa reset manual semua elemen ke state awal jika ingin tanpa reload
//     };
// });
  
document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll(".material-icons");
    const leftSection = document.querySelector(".leftService");
    const leftText = document.querySelector(".leftService p");
    const rightSection = document.querySelector(".rightService");
    const originalText = rightSection.innerHTML; // Simpan teks asli

    icons.forEach(icon => {
        icon.addEventListener("click", handleIconClick);
    });

    function handleIconClick(event)  {
            const icon = event.currentTarget; // Ambil ikon yang diklik
            const selectedService = icon.getAttribute("data-service");
            const description = icon.getAttribute("data-description");

            // Sembunyikan teks "Our Services"
            leftText.style.display = "none";

             // Bersihkan ikon di kanan
            rightSection.innerHTML = "";

            // Duplikasi ikon dan tampilkan di kiri
            const newIcon = icon.cloneNode(true);
            newIcon.classList.add("custom-icon");
            newIcon.style.fontSize = "80px";
            newIcon.style.color = "black";
            newIcon.style.cursor = "pointer";
            newIcon.addEventListener("click", resetServices);
            leftSection.appendChild(newIcon);

            // Tampilkan deskripsi layanan di kanan
             // Tambahkan deskripsi ke kanan
            rightSection.innerHTML = `
            <div class="text-white text-center p-4">
                <h2 class="mb-3">${selectedService}</h2>
                <p>${description}</p>
                <button class="btn btn-warning mt-3" onclick="resetServices()">Kembali</button>
            </div>
            `;
    };
    window.resetServices = function () {
        // Tampilkan kembali teks
        leftText.style.display = "block";
        
        rightSection.innerHTML = originalText; // Kembalikan teks asli

         // Hapus ikon besar di kiri
        const bigIcon = leftSection.querySelector(".material-icons:not(p)");
        if (bigIcon) bigIcon.remove();
        
        // Tambahkan kembali event listener ke ikon awal
        const newIcons = rightSection.querySelectorAll(".material-icons");
        newIcons.forEach(icon => {
            icon.addEventListener("click", handleIconClick);
        });
    };

   
});