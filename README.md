# Akcaya Photo - Website Portofolio Komunitas

Website portofolio modern untuk Akcaya Photo, sebuah komunitas fotografi yang berbasis di Pontianak. Dibuat untuk menampilkan karya-karya terbaik dari para anggotanya dengan cara yang simpel, estetik, dan cepat.

**🚀 Lihat Live Demo:** [**akcayaphoto.netlify.app**](https://www.google.com/search?q=https://akcayaphoto.netlify.app/)

## Fitur Utama ✨

-  **Navigasi Multi-Halaman**: Arsitektur _Single Page Application_ (SPA) dengan beberapa halaman (`Home`, `Gallery`, `Contact`) yang dikelola oleh **React Router**.
-  **Navigasi Cerdas**: Navbar yang _sticky_ dengan state aktif yang bisa mendeteksi posisi scroll pengguna di halaman utama (`IntersectionObserver`) dan juga URL aktif di halaman lain.
-  **Galeri Dinamis**: Bagian galeri sepenuhnya dikelola melalui **Google Sheets** yang berfungsi sebagai CMS/database gratis. Data foto di-fetch dan di-parsing secara _real-time_.
-  **Tampilan Detail Foto**: Pengalaman pengguna yang interaktif dengan _modal_ (pop-up) untuk melihat detail setiap foto tanpa meninggalkan halaman galeri.
-  **Optimasi Gambar Tingkat Lanjut**:
   -  **Lazy Loading**: Gambar di galeri hanya dimuat saat akan masuk ke layar untuk mempercepat waktu muat awal.
   -  **Optimasi Cloudinary**: URL gambar diubah secara dinamis untuk menyajikan format modern (`WebP/AVIF`), kualitas otomatis, dan ukuran yang sesuai konteks (thumbnail vs detail).
   -  **Preconnect**: Mempercepat koneksi ke server Cloudinary untuk pemuatan gambar yang lebih cepat.
-  **Desain Responsif**: Tampilan yang dioptimalkan untuk berbagai ukuran layar, dari desktop hingga mobile, menggunakan **Tailwind CSS**.
-  **Konfigurasi Deployment**: Dilengkapi dengan file `_redirects` untuk penanganan rute SPA yang benar di **Netlify**.

## Teknologi yang Digunakan 💻

-  **Framework**: React.js (dengan Vite)
-  **Styling**: Tailwind CSS
-  **Routing**: React Router DOM
-  **Smooth Scroll**: React Router Hash Link
-  **Deteksi Scroll**: React Intersection Observer
-  **Parsing Data**: Papa Parse (untuk mengurai data CSV dari Google Sheets)
-  **Image Hosting & CDN**: Cloudinary
-  **Deployment**: Netlify

## Setup dan Instalasi Lokal

Untuk menjalankan proyek ini di mesin lokal Anda, ikuti langkah-langkah berikut:

1. **Clone repository ini:**

   ```bash
   git clone https://github.com/URL_REPOSITORY_ANDA.git
   cd nama-folder-proyek
   ```

2. **Install semua dependensi:**

   ```bash
   npm install
   ```

3. **Buat file environment variable:**

   -  Buat file baru di direktori utama proyek dengan nama `.env`.
   -  Tambahkan variabel berikut ke dalamnya. Ini adalah URL CSV dari Google Sheet yang telah Anda publikasikan.
      ```
      VITE_GOOGLE_SHEET_CSV_URL="URL_CSV_ANDA_DISINI"
      ```

4. **Update kode untuk menggunakan environment variable:**

   -  Buka `src/pages/GalleryPage.jsx` dan ganti baris URL Google Sheet menjadi:
      ```javascript
      const GOOGLE_SHEET_CSV_URL = import.meta.env.VITE_GOOGLE_SHEET_CSV_URL;
      ```
   -  Ini adalah cara yang lebih aman untuk mengelola kunci atau URL rahasia.

5. **Jalankan server pengembangan:**

   ```bash
   npm run dev
   ```

   -  Aplikasi akan berjalan di `http://localhost:5173`.

## Skrip yang Tersedia

-  `npm run dev`: Menjalankan aplikasi dalam mode pengembangan.
-  `npm run build`: Mem-build aplikasi untuk produksi ke dalam folder `dist`.
-  `npm run preview`: Menjalankan server lokal untuk melihat hasil build produksi.
