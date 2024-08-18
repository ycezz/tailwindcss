Langkah - langkah dalam instalasi & konfigurasi Tailwindcss CLI
- npm init / npm init -y (-y inisialisasi secara default)
- npm install -D tailwindcss / npm i - D tailwindcss postcss autoprefixer (jika plugin postcss dan autoprefixer belum ada di vscode)
- npx tailwindcss init (inisialisasi tailwind di app kita, agar kita mempunyai file konfigurasi)
- setting konfiguasri file yang akan dibuka tailwind, di tailwind.config.js (content: ['./fileapa.html,js'])
- buat file input.css untuk tailwind directives simpan di folder (src/css/input.css)
- buat folder public yg berfungsi untuk menyimpan file yang bisa dilihat oleh siapapun (yg berisi file index.html)
- npx tailwindcss -i ./src/css/input.css -o ./public/css/style.css --watch
- Tailwind sudah bisa digunakan
- Untuk menghapus kelas yang tidak digunakan di file style.css maka kita bisa restart buildernya dengan 2 cara
    1. ctrl+c pada terminal untuk mematikan builder watchernya, lalu hidupkan kembali perintah watcher untuk menghidupkan kembali. 
    2. buka file tailwind.config.js lalu tekan ctrl+s, makan kelas yang tidak terpakai di file style.css akan hilang otomatis




NB: Plugin yang harus digunakan untuk menajalankan tailwind
- Autoprefixer
- Tailwindcss Intellisense
- PostCSS


Setting konfigurasi file package.json agar memudahkan running tailwind ketika kita akan mengunakannya lagi. 
- pada "script" hapus "test" lalu ubah menjadi "dev"
- lalu ubah isinya dengan perintah "npx tailwindcss -i ./src/css/input.css -o ./public/css/style.css --watch"
- dan ketika akan menjalankan file kita lagi maka kita bisa mengetikkan npm run dev pada terminal

Ketika kita sudah selesai membuat project, maka kita bisa Minify file style.css (mengecilkan file). Lakukan perintah ini 1 kali saja ketika kita sudah benar-benar selesai development.
- ketikkan perintah pada terminal npx tailwindcss -o ./public/css/final.css --minify
- lalu pindahkan link style.css ke <link rel="stylesheet" href="css/final.css">
- karena final.css sudah diminified jadi file kita bisa mereload file yg lebih kecil.