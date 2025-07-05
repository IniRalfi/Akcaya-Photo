import React from 'react';

function PhotoDetailModal({ photo, onClose }) {
    const handleContentClick = (e) => e.stopPropagation();


    const tags = photo.tags ? photo.tags.split(',').map(tag => tag.trim()) : [];
    const getOptimizedDetailUrl = (url) => {
        if (!url || !url.includes('/upload/')) return photo.urlGambar;
        return url.replace('/upload/', '/upload/f_auto,q_auto,w_1280/');
    };
    return (

        <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4"
            onClick={onClose}
        >
            {/* Konten Modal */}
            <div
                className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto grid grid-cols-1 lg:grid-cols-2 gap-6"
                onClick={handleContentClick}
            >
                {/* Kolom Kiri: Gambar */}
                <div className="bg-slate-100 flex items-center justify-center">
                    <img
                        src={getOptimizedDetailUrl(photo.urlGambar)}
                        alt={photo.judulFoto}
                        loading="lazy"
                        className="w-full h-full object-contain max-h-[90vh]"
                    />
                </div>

                {/* Kolom Kanan: Detail Foto */}
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">{photo.judulFoto}</h2>
                    <p className="text-slate-500 mb-2">oleh {photo.fotografer}</p>

                    <p className="text-slate-700 font-light mb-6 text-sm">{photo.deskripsiFoto}</p>

                    <div className="space-y-3 text-sm">
                        <div className="flex items-center">
                            <span className="font-semibold text-slate-800 w-20">Kamera</span>
                            <span className="text-slate-600">{photo.kamera}</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-slate-800 w-20 mt-1">Tags</span>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag, index) => (
                                    <span key={index} className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tombol Close (X) */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-red-500 text-3xl transition"
                aria-label="Tutup"
            >
                &times;
            </button>
        </div>
    );
}

export default PhotoDetailModal;