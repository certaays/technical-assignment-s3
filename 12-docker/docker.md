### 1. Jelaskan apa yang dimaksud dengan container pada docker !
Container pada docker ialah wadah aplikasi yang meliputi system tools, kemudian kode, runtime, dan juga konfigurasi. Pada container hanya diperbolehkan untuk mengakses sumber(resource) yang telah ditentukan sebelumnya dalam docker image.

### 2. Jelaskan apa perbedaan antara konsep container dengan virtual machine !
1) Alokasi resource pada virtual machine bersifat terisolasi, hal ini dikarenakan alokasi resource dilakukan pada awal instalasi. Sedangkan untuk container, alokasi resourcenya dapat dilakukan langsung oleh host server kemudian akan mengambil alokasi resourse yang ada pada hardware sesuai apa yang dibutuhkan.
2) Virtual machine tidak bisa berjalan tanpa adanya hypervisor dan juga tidak dapat berjalan langsung di atas sistem operasi. Sedangkan, container bisa berjalan tanpa adanya hypervisor dan juga bisa berjalan langsung pada sistem operasi itu sendiri.
3) Virtual machine menggunakan kernel tersendiri untuk menjalankan aplikasi didalamnya. Hal ini berbeda dengan container yang tidak diizinkan untuk mengakses kernel.

### 3. Apa yang dimaksud dengan docker file ?
Docker file adalah file yang berupa teks atau script yang memiliki isi seluruh intruksi yang dibutuhkan oleh docker yang selanjutnya akan dijalankan secara otomatis dan juga berurutan untuk membangun sebuah image sehingga pengguna tidak harus mengetikkan perintah setiap menjalankan containernya.

### 4. Apa yang dimaksud dengan docker registery ?
Docker registry ialah wadah untuk menyimpan sebuah docker image yang kemudian akan menghasilkan keluaran yang sesuai dengan perintah yang diberikan.

### 5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !
Cara untuk menjalankan lebih dari 1 container secara bersamaan dan terhubung adalah dengan menggunakan docker compose. Docker compose ini adalah sebuah tools yang menjalankan satu atau beberapa container pada aplikasi docker. Cara menggunakan docker compose ini adalah dengan membuat file berekstensi yml/yaml yang didalamnya berisi konfigurasi terhadap service aplikasi yang akan dijalankan. Kemudian, pengguna bisa membuat dan juga menjalankan semua layanan(service) pada file yml dengan menggunakan sebuah command.