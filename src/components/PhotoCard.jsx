import React from 'react';

const FALLBACK_IMAGE_URL = 'https://placehold.co/400x300/e2e8f0/475569?text=Gambar+Rusak';

function PhotoCard({ photo, onClick }) {
    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.src = FALLBACK_IMAGE_URL;
    };

    return (
        <div
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            onClick={onClick}
        >
            {/* === BAGIAN KUNCI UNTUK RASIO ASPEK ADA DI SINI === */}
            {/* 1. Div ini menciptakan sebuah "bingkai" dengan rasio 4:3 */}
            <div className="aspect-[4/3] bg-slate-200"> {/* Diberi bg-slate-200 agar terlihat jika gambar gagal muat */}
                {/* 2. Img ini mengisi penuh bingkai 4:3 tersebut */}
                <img
                    src={photo.url_gambar}
                    alt={photo.judul_foto}
                    onError={handleImageError}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            {/* ================================================ */}

            {/* Overlay yang muncul saat di-hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="font-bold text-white text-lg">{photo.judul_foto}</h3>
                    <p className="text-sm text-slate-300">{photo.fotografer}</p>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;