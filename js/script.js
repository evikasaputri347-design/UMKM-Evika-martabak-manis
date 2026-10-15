
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

// Menu untuk HP
menuToggle.addEventListener("click", function () {
    navigation.classList.toggle("open");

    const terbuka = navigation.classList.contains("open");

    menuToggle.textContent = terbuka ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", terbuka);
});

// Tutup menu setelah diklik
document.querySelectorAll(".navigation a").forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("open");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Tombol pesan pada setiap produk
document.querySelectorAll(".order-button").forEach(function (button) {
    button.addEventListener("click", function () {
        const rasa = button.dataset.flavor;

        document.querySelector("#rasa").value = rasa;

        document.querySelector("#kontak").scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Formulir pemesanan WhatsApp
document.querySelector("#order-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.querySelector("#nama").value.trim();
    const rasa = document.querySelector("#rasa").value;
    const jumlah = document.querySelector("#jumlah").value;
    const catatan = document.querySelector("#catatan").value.trim();

    const pesan =
        "Halo, saya ingin memesan Martabak Manis.\n\n" +
        "Nama: " + nama + "\n" +
        "Rasa: " + rasa + "\n" +
        "Jumlah: " + jumlah + "\n" +
        (catatan ? "Catatan: " + catatan : "");

    const nomorWhatsApp = "6283192869198";

    const url = "https://wa.me/" + nomorWhatsApp +
        "?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");
});

// Tahun otomatis di bagian footer
document.querySelector("#year").textContent =
    new Date().getFullYear();
