function sendToWhatsapp(){
  let number = "+6283151636921"
    
  let nama = document.getElementById('nama').value;
  let Config = document.getElementById('config').value;
  let Protocol = document.getElementById('protocol').value;
  let Server = document.getElementById('server').value;
  
  var url = "https:wa.me/" + number + "?teks="
  
  + "Nama : " +nama+ "%0a"
  + "Config : " +config+ "%0a"
  + "Server : " +server+ "%0a"
  + "Protocol : " +protocol+ "%0a%0a";

  
  window.open(url, `_blank`).focus();
}