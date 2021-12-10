### 1. Apa perbedaan antara static web server dan dynamic web server?
Static web server terdiri dari komputer(hardware) dengan HTTP server(software). Alasan mengapa disebut sebagai static web server karena server mengirimkan file yang dihosting ke browser apa adanya. Sedangkan dynamic web server terdiri dari static web server itu sendiri(hardware+software) dengan software tambahan biasanya berupa application server dan database. Server ini disebut dengan dynamic web server karena aplikasi server memperbarui file yang sudah dihosting melalui server HTTP sebelum mengirimnya ke browser.

### 2. Jelaskan arsitektur static site dan dynamic site
1. Untuk static site, client side meminta request ke http untuk selanjutnya disampaikan kepada web server dimana didalamnya terdiri dari file seperti HTML, CSS, dan JavaScript, kemudian response akan menampilkan hasilnya hanya berupa file-file yang sudah dikirim sebelumnya, tanpa ada proses data apapun di web server.
2. Untuk Dynamic site, client side akan meminta GET request dan kemudian akan diteruskan ke web server. Kemudian akan masuk juga ke dalam web application untuk dilakukan proses data dari database untuk kemudian dibawa kembali ke web server dan web server akan merespons sehingga data akan tampil pada browser. 

### 3. Apa saja yang dapat kita buat pada sisi server?
1. Membuat penyimpanan dan juga proses pengiriman informasi menjadi efisien.
2. Dapat membuat user experience sesuai kebutuhan.
3. Dapat mengontrol akses ke konten.
4. Dapat menyimpan session maupun state information.
5. Dapat berkomunikasi dan mengirimkan notifikasi.
6. Dapat melakukan analisis data.

### 4. Mohon jelaskan apa itu RESTful?
REST adalah sebuah gaya arsitektur yang menyediakan standar untuk sistem komputer dalam web sehingga memudahkan sistem untuk berkomunikasi satu sama lain. Sedangkan, RESTful adalah sistem yang tergolong stateless dan memisahkan masalah dari client dan servernya.

### 5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)
1. GET, untuk mengambil resource spesifik berdasarkan id atau mengambil koleksi dari berbagai resource.
2. POST, membuat resource baru.
3. PUT, untuk memperbarui resouce spefisik berdasarkan id.
4. DELETE, untuk menghapus resource spesifik berdasarkan id.

### 6. Apa fungsi dari Response Codes?
Response code memiliki kegunaan untuk memberikan respons kepada client berisi informasi atas request yang sudah dilakukan. Tiap kodenya memiliki arti-arti yang berbeda, contohnya 200 memiliki arti OK, 404 berarti not found, dan lain sebagainya. Dengan response code ini dapat digunakan sebagai tanda apakah request berhasil atau tidak.