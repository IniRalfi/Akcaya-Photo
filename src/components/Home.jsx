import React from 'react';
import logo from '../assets/Akcaya.png';

function Hero() {
    return (
        <section
            id="home"
            className="w-full h-[calc(100vh-4rem)] flex items-center p-5 md:p-10"
        >
            <div className="container mx-auto max-w-6xl">
                {/* PERBAIKAN: Mengganti Flexbox dengan Grid untuk kontrol yang lebih baik */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16">

                    {/* 1. Bagian Teks */}
                    <div className="text-center md:text-left order-2 md:order-1">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-2">
                            Akcaya Photo
                        </h1>
                        <p className="text-sm md:text-base text-slate-500 mt-2 mb-8 max-w-xl mx-auto md:mx-0">
                            Ini adalah website portofolio komunitas kami, sebuah ruang untuk menampilkan karya-karya terbaik dari setiap anggota.
                        </p>
                        <p className="text-lg md:text-xl text-slate-600 mb-8">
                            Photography • Art • Community
                        </p>
                        <a
                            href="#about"
                            className="inline-block py-3 px-8 bg-[#f63b3b] text-white font-semibold rounded-lg shadow-md hover:bg-[#eb2525] transition-all duration-300 transform hover:scale-105"
                        >
                            Selengkapnya Tentang Kami
                        </a>
                    </div>

                    {/* 2. Bagian Gambar/Logo */}
                    {/* PERBAIKAN: Ukuran gambar diatur ulang untuk setiap breakpoint */}
                    <div className="flex justify-center order-1 md:order-2">
                        <img
                            src={logo}
                            alt="Logo Akcaya Photo"
                            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;