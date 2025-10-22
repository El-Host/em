const loginForm = document.getElementById("loginForm")
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;
        if (user === "admin" && pass === "123") {
            localStorage.setItem("loggedIn", "true");
            window.location.href = "menu.html";
        
        } else {
            alert ("USername Atau Password salah ( ! )");
        }
    });
}
//cek login
if (window.location.pathname.includes("menu.html")) {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn) {
        window.location.href = "index.html";

    }
}
// logout check
function logout() {
    alert("Anda Telah Berhasil Logout ( ! )");
    window.location.href ="index.html";
}

function pesan() {
     const tujuan = "6285183880972";
    const ted = "Halo Sayaa ingin memesan sesuatu"
     const order = `https://wa.me/${tujuan}?text=${ted}`;
    window.open(order, "_blank");
}
function kirim() {
    const nama = document.getElementById("nama").value;
    const pesan = document.getElementById("pesan").value;
    const tujuan = "6285183880972";

    if (nama === "" || pesan === ""){
        alert("harap isi semua kolom !");
        return;
    }
    const teks = `Halo, saya ${nama}. %0A%0A${pesan}`;
    const url = `https://wa.me/${tujuan}?text=${teks}`;
    window.open(url, "_blank");
}