import React, { useState, useEffect } from 'react';
import PhotoCard from '../components/PhotoCard'; // Import komponen kartu yang sudah kita buat
import Papa from 'papaparse'; // <-- 1. IMPORT PAPA PARSE

function GalleryPage() {
    // State untuk menyimpan daftar foto, status loading, dan kemungkinan error
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect akan berjalan satu kali setelah komponen pertama kali di-render
    useEffect(() => {
        // FUNGSI UNTUK MENGAMBIL DAN MEM-PARSING DATA CSV
        const fetchPhotos = async () => {
            // !!! PENTING: Ganti URL di bawah ini dengan URL CSV dari Google Sheet Anda !!!
            const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQAIoVOxRdAFoJRG7WWac1KV-BuPm1OxwmA2ogt8vaHUhGZIZDZItNS29oUo-u9ORrt_VsLFuE7tq0a/pub?output=csv';

            try {
                const response = await fetch(GOOGLE_SHEET_CSV_URL);
                if (!response.ok) {
                    throw new Error('Gagal mengambil data dari Google Sheet.');
                }
                const csvText = await response.text();

                Papa.parse(csvText, {
                    header: true, // Ini kuncinya! Otomatis baca header sebagai nama properti
                    complete: (results) => {
                        // Mengubah nama properti agar konsisten (misal: "Judul Foto" -> "judul_foto")
                        const formattedData = results.data.map(row => {
                            const newRow = {};
                            for (const key in row) {
                                const newKey = key.trim().toLowerCase().replace(/ /g, '_');
                                newRow[newKey] = row[key];
                            }
                            return newRow;
                        }).filter(row => row.url_gambar && row.url_gambar.trim() !== ''); // Filter baris kosong

                        setPhotos(formattedData.reverse());
                    }
                });
            } catch (err) {
                setError(err.message);
                console.error("Error fetching photos:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    // Tampilan kondisional berdasarkan status
    if (loading) {
        return <div className="min-h-screen flex justify-center items-center"><p className="text-xl text-slate-500">Memuat galeri...</p></div>;
    }

    if (error) {
        return <div className="min-h-screen flex justify-center items-center"><p className="text-xl text-red-500">Error: {error}</p></div>;
    }

    return (
        <div className="py-20 md:py-28">
            <div className="container mx-auto max-w-7xl px-5">

                {/* Judul Halaman */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Galeri Karya</h1>
                    <p className="text-lg text-slate-500 mt-2">Setiap gambar menyimpan cerita dan perspektif unik dari anggota kami.</p>
                </div>

                {/* Grid untuk menampilkan semua kartu foto */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {photos.map((photo, index) => (
                        <PhotoCard
                            key={index} // Sebaiknya gunakan ID unik jika ada, jika tidak index bisa dipakai
                            photo={photo}
                        // onClick={() => handlePhotoClick(photo)} // Ini akan kita tambahkan di Tugas 4
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default GalleryPage;