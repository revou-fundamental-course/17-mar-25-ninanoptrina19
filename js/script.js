let isKelilingVisible = false; // Status awal: luas yang terlihat

document.getElementById("switch-keliling").addEventListener("click", function () {
    if (!isKelilingVisible) {
        isKelilingVisible = true;
        document.getElementById("luas-section").style.display = "none";
        document.getElementById("keliling-section").style.display = "block";
        this.innerHTML = "<u>Switch ke Luas Persegi</u>";
    } else {
        isKelilingVisible = false;
        document.getElementById("luas-section").style.display = "block";
        document.getElementById("keliling-section").style.display = "none";
        this.innerHTML = "<u>Switch ke Keliling Persegi</u>";
    }
});

// Fungsi validasi input
function hitungLuas() {
    let sisi = parseFloat(document.getElementById('Sisi-luas').value);

    if (!isNaN(sisi) && sisi > 0) {
        let luas = sisi * sisi; // Rumus Luas: L = S × S
        document.getElementById('Luas-output').innerText = `Luas: ${luas}`;
    } else {
        alert('⚠️ Masukkan angka sisi yang valid dan lebih dari 0!');
    }
}

function hitungKeliling() {
    let sisi = parseFloat(document.getElementById('Sisi-keliling').value);

    if (!isNaN(sisi) && sisi > 0) {
        let keliling = 4 * sisi; // Rumus Keliling: K = 4 × S
        document.getElementById('Keliling-output').innerText = `Keliling: ${keliling}`;
    } else {
        alert('⚠️ Masukkan angka sisi yang valid dan lebih dari 0!');
    }
}

function resetForm() {
    // Mengosongkan input
    document.getElementById('Sisi-luas').value = '';
    document.getElementById('Sisi-keliling').value = '';

    // Menghapus hasil output
    document.getElementById('Luas-output').innerText = 'Luas: -';
    document.getElementById('Keliling-output').innerText = 'Keliling: -';
}


