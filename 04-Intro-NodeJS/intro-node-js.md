### 1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?
`Node JS adalah server-side dari Javascript yang dibuat dengan mesin dari Chrome, V8.
Perbedaan Node JS dengan JavaScript adalah apabila javascript adalah bahasa pemrograman yang dipakai di front end side sehingga hanya dapat di jalankan dengan web browser, sedangkan dengan Node JS, kode dapat dieksekusi di luar web browser(terminal/command line) menggunakan perintah "node".`
### 2. Mohon jelaskan arsitektur dari Node.js?
`Arsitektur dari Node JS terdiri dari V8 dan LIBUV. Konsep kerja dari Node JS ini, pertama adalah application yang berisikan file yang akan dijalankan pada runtime V8 Engine untuk selanjutnya dibindings ke Node API dan akan masuk ke dalam LIBUV. Pada proses ini, semua kode akan di proses dengan mengikuti antrian yang sudah ditentukan di dalam Event Queue. Apabila diperkirakan proses program atau kode masih lama, maka akan di stop terlebih dahulu dan akan mengantri kembali. Jika ada proses yang sudah selesai maka callback akan di jalankan.
`
### 3. Ape perbedaan antara Build-in Module, External Module, dan Custom Module pada Node.js?
`1. Build-in module berisikan modul bawaan(build-in) yang dapat dimanfaatkan tanpa harus menginstall lagi.
2. External module merupakan modul yang harus di install terlebih dahulu sebelum menggunakannya dalam kode program.
3. Custom module adalah module yang dapat kita buat sendiri secara custom. Kita hanya perlu membuat fungsi kemudian dapat di ekspor untuk dapat digunakan.`
### 4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?
`1. Contoh dari build-in module adalah http, fs, url, querystring, os, dan lainnya.
2. Contoh dari external module adalah moments, express
3. Contoh dari costum module :
   exports.myFunction = function(){
        return "Ini adalah custom module";
   };`