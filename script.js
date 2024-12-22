JavaScript (script.js)
```
const formOrder = document.getElementById('form-order');
const kirim = document.getElementById('kirim');

kirim.addEventListener('click', (e) => {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const nomorHp = document.getElementById('nomor-hp').value;
  const produk = document.getElementById('produk').value;
  const jumlah = document.getElementById('jumlah').value;

  const pesan = `Halo, saya ingin memesan ${produk} sebanyak ${jumlah} buah. Nama saya ${nama}. Nomor HP saya ${nomorHp}.`;

  const urlWa = `(https://wa.me/6283151636921){encodeURIComponent(pesan)}`;

  window.open(urlWa, '_blank');
});