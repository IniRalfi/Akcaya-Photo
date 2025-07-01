import React, { useState, useEffect } from 'react';
import PhotoCard from '../components/PhotoCard';
import Papa from 'papaparse';
import PhotoDetailModal from '../components/PhotoDetailModal';
import SEO from '../components/SEO';

function GalleryPage() {

    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        // FUNGSI UNTUK MENGAMBIL DAN MEM-PARSING DATA CSV
        const fetchPhotos = async () => {
            const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQAIoVOxRdAFoJRG7WWac1KV-BuPm1OxwmA2ogt8vaHUhGZIZDZItNS29oUo-u9ORrt_VsLFuE7tq0a/pub?output=csv';

            try {
                const response = await fetch(GOOGLE_SHEET_CSV_URL);
                if (!response.ok) {
                    throw new Error('Gagal mengambil data dari Google Sheet.');
                }
                const csvText = await response.text();

                Papa.parse(csvText, {
                    header: true,
                    complete: (results) => {
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

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
    };

    const handleCloseModal = () => {
        setSelectedPhoto(null);
    };

    // Tampilan kondisional berdasarkan status
    if (loading) {
        return <div className="min-h-screen flex justify-center items-center"><p className="text-xl text-slate-500">Memuat galeri...</p></div>;
    }

    if (error) {
        return <div className="min-h-screen flex justify-center items-center"><p className="text-xl text-red-500">Error: {error}</p></div>;
    }

    return (
        <div className="py-20 md:py-28">
            <SEO
                title="Galeri Karya"
                description="Jelajahi galeri karya dari para anggota Akcaya Photo. Temukan berbagai momen, cerita, dan perspektif unik yang diabadikan melalui lensa kami."
            />
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
                            onClick={() => handlePhotoClick(photo)}
                        />
                    ))}
                </div>
            </div>

            {selectedPhoto && (
                <PhotoDetailModal
                    photo={selectedPhoto}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}

export default GalleryPage;