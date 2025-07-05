import React from 'react';

const FALLBACK_IMAGE_URL = 'https://placehold.co/400x300/e2e8f0/475569?text=Gambar+Rusak';

function PhotoCard({ photo, onClick }) {
    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.src = FALLBACK_IMAGE_URL;
    };

    const getOptimizedThumbnailUrl = (url) => {
        if (!url || !url.includes('/upload/')) return FALLBACK_IMAGE_URL;
        return url.replace('/upload/', '/upload/f_auto,q_auto,w_600/');
    };

    return (
        <div
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            onClick={onClick}
        >


            <div className="aspect-[4/3] bg-slate-200">
                <img
                    src={getOptimizedThumbnailUrl(photo.urlGambar)}
                    alt={photo.judulFoto}
                    onError={handleImageError}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="font-bold text-white text-lg">{photo.judulFoto}</h3>
                    <p className="text-sm text-slate-300">{photo.fotografer}</p>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;